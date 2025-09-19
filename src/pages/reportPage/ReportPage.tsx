/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import ReportTable from "../../components/reportTable/ReportTable";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import logo from "../../assets/tracevia_do_brasil_logo.jpeg";
import MultiSelect from "../../components/multiselect/Multiselect";
import Modal from "../../components/modalSearch";
import { FaFileExcel } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import {
  Container,
  NameReport,
  OpenModal,
  ButtonExcel,
  Title,
  Logo,
  ButtonContainer,
  Options
} from "./styles";

// ================== Interfaces ==================
interface Param {
  name: string;
  label: string;
  type: string;
  options?: { value: any; label: string }[];
  datasource?: string;
}

interface ReportOutput {
  type: string;
  columns: { name: string; label: string; type: string }[];
  headerLayout?: { label: string; rowSpan?: number; colSpan?: number }[][];
}

interface Manifest {
  name: string;
  queryFile: string;
  params?: Param[];
  output: ReportOutput;
}

interface ReportResponse {
  output: ReportOutput;
  data: Record<string, any>[];
}

// =================================================
export default function ReportPage({ reportName }: { reportName: string }) {
  const [manifest, setManifest] = useState<Manifest | null>(null);
  const [params, setParams] = useState<Record<string, any>>({});
  const [report, setReport] = useState<ReportResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setReport(null);
    setParams({});

    const token = localStorage.getItem("token");
    fetch(`http://localhost:8080/manifests/${reportName}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    })
      .then((res) => res.json())
      .then((data: Manifest) => {
        setManifest(data);
        const initialParams: Record<string, any> = {};
        data.params?.forEach((p) => {
          if (p.type === "select" && p.options && p.options.length > 0) {
            initialParams[p.name] = p.label;
          } else if (p.type === "select-multi") {
            initialParams[p.name] = [];
          } else {
            initialParams[p.name] = "";
          }
        });
        setParams(initialParams);
      });
  }, [reportName]);

  const fetchReport = () => {
    if (!manifest) return;
    const filteredParams: Record<string, any> = {};
    for (const key in params) {
      if (key === "initDate" || key === "endDate") {
        const date = new Date(params[key]);
        const pad = (num: number, size = 2) => String(num).padStart(size, "0");

        const formatted =
          `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
            date.getDate()
          )} ` + `${pad(date.getHours())}:${pad(date.getMinutes())}`;

        filteredParams[key] = formatted;
      } else {
        filteredParams[key] = params[key] || null;
      }
    }

    const queryString = new URLSearchParams(filteredParams).toString();
    setLoading(true);
    const token = localStorage.getItem("token");
    fetch(
      `http://localhost:8080/reports/${reportName}${
        queryString ? `?${queryString}` : ""
      }`,
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      }
    )
      .then((res) => res.json())
      .then(setReport)
      .finally(() => setLoading(false));
  };

  // Função para obter colunas dinamicamente do backend
  function getDynamicColumns(report: ReportResponse | null) {
    if (report?.output?.columns && report.output.columns.length > 0) {
      return report.output.columns;
    }
    if (report?.data && report.data.length > 0) {
      return Object.keys(report.data[0]).map((key) => ({
        name: key,
        label: key,
        type: "string",
      }));
    }
    return [];
  }

  // Exportar Excel
  const exportToExcel = async () => {
    if (!report || !manifest) return;
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Relatório");

    const columns = getDynamicColumns(report);
    const lastColLetter = worksheet.getColumn(columns.length + 1).letter;
    worksheet.mergeCells(`A1:${lastColLetter}1`);
    worksheet.getCell("A1").value = manifest.name;
    worksheet.getCell("A1").fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFFF00" },
    };

    // Cabeçalhos
    columns.forEach((col, idx) => {
      const cell = worksheet.getCell(2, idx + 1);
      cell.value = col.label;
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFFF00" },
      };
    });

    for (let colIdx = 1; colIdx <= columns.length; colIdx++) {
      worksheet.getCell(2, colIdx).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFFF00" },
      };
    }

    // Dados
    report.data.forEach((row, rowIdx) => {
      columns.forEach((col, colIdx) => {
        worksheet.getCell(rowIdx + 3, colIdx + 1).value = row[col.name];
      });
    });

    // Ajustar largura das colunas
    columns.forEach((col, idx) => {
      let maxLength = col.label.length;
      report.data.forEach((row) => {
        const value = row[col.name];
        if (value && value.toString().length > maxLength) {
          maxLength = value.toString().length;
        }
      });
      worksheet.getColumn(idx + 1).width = Math.max(maxLength + 2, 10);
    });

    // Logo
    const response = await fetch(logo);
    const imageBuffer = await response.arrayBuffer();
    const imageId = workbook.addImage({
      buffer: imageBuffer,
      extension: "jpeg",
    });
    worksheet.addImage(imageId, {
      tl: { col: 0, row: 0 },
      ext: { width: 120, height: 40 },
    });

    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(
      new Blob([buffer], { type: "application/octet-stream" }),
      `${manifest.name}.xlsx`
    );
  };

  if (!manifest) return <div>Carregando manifesto...</div>;

  return (
    <Container>
      <Title>
        <NameReport>{manifest.name}</NameReport>
        <Logo></Logo>
        <ButtonContainer>
          <OpenModal onClick={() => setIsModalOpen(true)}>
            <FaSearch size={20} />
          </OpenModal>
          {report && (
            <ButtonExcel onClick={exportToExcel}>
              <FaFileExcel size={20} />
            </ButtonExcel>
          )}
        </ButtonContainer>
      </Title>

      {loading && <p>Carregando dados...</p>}
      {report && (
        <>
          <ReportTable
            output={{
              ...report.output,
              columns: getDynamicColumns(report),
            }}
            data={report.data}
          />
        </>
      )}

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="p-4">
            {manifest.params?.map((p) => (
              <div key={p.name} className="mb-4">
                {p.type === "datetime-local" ? (
                  <input
                    type="datetime-local"
                    value={params[p.name] || ""}
                    onChange={(e) =>
                      setParams({ ...params, [p.name]: e.target.value })
                    }
                    className="border px-2 py-1"
                  />
                ) : p.type === "select" ? (
                  <select
                    value={params[p.name]}
                    onChange={(e) =>
                      setParams({ ...params, [p.name]: e.target.value })
                    }
                  >
                    <Options value="">{p.label}</Options>
                    {p.options?.map((opt) => (
                      <Options key={opt.value} value={opt.value}>
                        {opt.label}
                      </Options>
                    ))}
                  </select>
                ) : p.type === "select-multi" ? (
                  <MultiSelect
                    name={p.name}
                    options={
                      p.options
                        ? p.options.map((opt) => ({
                            value: opt.value,
                            label: opt.label,
                          }))
                        : []
                    }
                    value={Array.isArray(params[p.name]) ? params[p.name] : []}
                    onChange={(val) => {
                      setParams({ ...params, [p.name]: val });
                    }}
                    // Passa a label do parâmetro como placeholder
                    placeholder={p.label}
                  />
                ) : (
                  <input
                    type={p.type === "number" ? "number" : "text"}
                    value={params[p.name]}
                    onChange={(e) =>
                      setParams({ ...params, [p.name]: e.target.value })
                    }
                    className="border px-2 py-1"
                  />
                )}
              </div>
            ))}

            <button
              onClick={() => {
                fetchReport();
                setIsModalOpen(false);
              }}
              className="px-3 py-1 bg-blue-600 text-white rounded"
            >
              Filtrar
            </button>
          </div>
        </Modal>
      )}
    </Container>
  );
}
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import ReportTable from "../components/ReportTable";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import logo from "../assets/tracevia_do_brasil_logo.jpeg";
import Modal from "../components/modalSearch";
// ================== Interfaces ==================
interface Param {
  name: string;
  label: string;
  type: string;
  options?: { value: any; label: string }[];
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

  // Fetch Manifesto
  useEffect(() => {
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
            initialParams[p.name] = p.options[0].value;
          } else {
            initialParams[p.name] = "";
          }
        });
        setParams(initialParams);
      });
  }, [reportName]);

  // Buscar relatório
  const fetchReport = () => {
    if (!manifest) return;
    const filteredParams: Record<string, any> = {};
    for (const key in params) {
      filteredParams[key] = params[key] || null;
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

  // Exportar Excel
  const exportToExcel = async () => {
    if (!report || !manifest) return;
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Relatório");

    const columns = manifest.output.columns;
    const lastColLetter = worksheet.getColumn(columns.length + 1).letter;
    worksheet.mergeCells(`A1:${lastColLetter}1`);
    worksheet.getCell("A1").value = manifest.name;
    worksheet.getCell("A1").fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFFF00" },
    };

    const firstCols = columns.slice(0, 13);
    const restCols = columns.slice(13);

    // Cabeçalhos
    firstCols.forEach((col, idx) => {
      const cell = worksheet.getCell(2, idx + 2);
      cell.value = col.label;
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFFF00" },
      };
    });

    const totalCols = columns.length;
    for (let colIdx = 1; colIdx <= totalCols + 1; colIdx++) {
      const cell = worksheet.getCell(2, colIdx);
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFFF00" },
      };
    }

    const totalRows = report.data.length;
    for (let i = 2; i <= totalRows + 2; i++) {
      const cell = worksheet.getCell(i, 1);
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFFF00" },
      };
    }

    // Dados
    report.data.forEach((row, rowIdx) => {
      firstCols.forEach((col, colIdx) => {
        worksheet.getCell(rowIdx + 3, colIdx + 2).value = row[col.name];
      });
      restCols.forEach((col, colIdx) => {
        worksheet.getCell(rowIdx + 3, colIdx + 6).value = row[col.name];
      });
    });

    worksheet.getColumn(1).width = 3;

    const allCols = [...firstCols, ...restCols];
    allCols.forEach((col, idx) => {
      const colIndex = idx + 2;
      let maxLength = col.label.length;
      report.data.forEach((row) => {
        const value = row[col.name];
        if (value && value.toString().length > maxLength) {
          maxLength = value.toString().length;
        }
      });
      worksheet.getColumn(colIndex).width = Math.max(maxLength + 2, 10);
    });

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
    <div className="p-4">
      <h1 className="text-xl mb-4">{manifest.name}</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-2 py-1 bg-purple-600 text-white rounded"
      >
        Abrir Painel de Seleção
      </button>

      {loading && <p>Carregando dados...</p>}
      {report && (
        <>
          <button
            onClick={exportToExcel}
            className="ml-2 px-2 py-1 bg-green-600 text-white rounded"
          >
            Exportar para Excel
          </button>
          <ReportTable output={report.output} data={report.data} />
        </>
      )}

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="p-4">
            {manifest.params?.map((p) => (
              <div key={p.name} className="mb-4">
                <label className="mr-2">{p.label}:</label>
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
                    className="border px-2 py-1"
                  >
                    <option value="">Selecione</option>
                    {p.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
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
    </div>
  );
}

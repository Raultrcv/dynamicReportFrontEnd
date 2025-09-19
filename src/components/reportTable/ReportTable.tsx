/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { 
  Container,
  ContainerTable,
  Table 
} from "./styles";

// As interfaces não mudam
interface Column {
  name: string;
  label: string;
  type: string;
}

interface HeaderCell {
  label: string;
  rowSpan?: number;
  colSpan?: number;
}

interface ReportOutput {
  columns: Column[];
  headerLayout?: HeaderCell[][];
}

interface ReportTableProps {
  output: ReportOutput;
  data: Record<string, any>[];
}

export default function ReportTable({ output, data }: ReportTableProps) {
  if (!data || data.length === 0) {
    // Usando um estilo simples para a mensagem
    return <p style={{ marginTop: '20px' }}>Nenhum dado encontrado.</p>;
  }

  // Objeto de estilo para as células do cabeçalho
  const headerCellStyle: React.CSSProperties = {
    backgroundColor: '#0E0E10', // Um tom de vermelho escuro
    color: 'white',
    padding: '15px',
    border: '1px solid #424951', 
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '12px',
    letterSpacing: '1px'
  };

  // Objeto de estilo para as células de dados
  const dataCellStyle: React.CSSProperties = {
    padding: '12px',
    border: '1px solid #424951',
    color: "white",
    backgroundColor: "#2C3034",
    textAlign: 'center'
  };

  const renderTableHeader = () => {
    if (output.headerLayout) {
      return (
        <thead>
          {output.headerLayout.map((row, rowIndex) => (
            <tr key={`header-row-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <th
                  key={`header-cell-${rowIndex}-${cellIndex}`}
                  rowSpan={cell.rowSpan}
                  colSpan={cell.colSpan}
                  style={headerCellStyle} // Aplica o estilo do cabeçalho
                >
                  {cell.label}
                </th>
              ))}
            </tr>
          ))}
        </thead>
      );
    }

    // Fallback para cabeçalho simples
    return (
      <thead>
        <tr>
          {output.columns.map((col) => (
            <th key={col.name} style={headerCellStyle}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  return (
    <Container>
    <ContainerTable>
      <Table>
        {renderTableHeader()}
       <tbody>
          {data.map((row, rowIndex) => {
            const rowStyle = {
              backgroundColor: rowIndex % 2 === 0 ? '#2C3034' : '#24282B'
            };

            return (
              <tr key={`data-row-${rowIndex}`} style={rowStyle}>
                {output.columns.map((col) => {
                  const isNumber = col.type === 'number';
                  const cellStyle: React.CSSProperties = isNumber
                    ? { ...dataCellStyle, textAlign: 'center' as React.CSSProperties['textAlign'], backgroundColor: 'transparent' } // Opcional: define o fundo como transparente para herdar o fundo da linha
                    : { ...dataCellStyle, backgroundColor: 'transparent' };

                  return (
                    <td key={`${col.name}-${rowIndex}`} style={cellStyle}>
                      {row[col.name] ?? ""}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </ContainerTable>
    </Container>
  );
}
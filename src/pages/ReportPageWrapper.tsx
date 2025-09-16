import { useParams } from "react-router-dom";
import ReportPage from "./ReportPage";

export default function ReportPageWrapper() {
  const { reportName } = useParams<{ reportName: string }>();

  if (!reportName) return <div>Relatório não especificado</div>;{/**Tradução */}

  return <ReportPage reportName={reportName} />;
}

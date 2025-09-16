import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Sidebar from "./components/Sidebar";
import Sidebar from "./components/sidebar/index";
import ReportPageWrapper from "./pages/ReportPageWrapper";


function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/:reportName" element={<ReportPageWrapper />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/index";
import ReportPageWrapper from "./pages/ReportPageWrapper";
import Header from "./components/header";
import Modal from "./components/modalSearch";
import { useState } from "react";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/:reportName" element={<ReportPageWrapper />} />
            </Routes>

            

          </main>
        </div>

        {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
      </div>
    </BrowserRouter>
  );
}

export default App;

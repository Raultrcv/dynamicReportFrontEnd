import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Sidebar from "./components/Sidebar";
import Sidebar from "./components/sidebar/index";
import ReportPageWrapper from "./pages/ReportPageWrapper";
import Header from "./components/header";
import Search from "./components/search";
import { FaSearch} from "react-icons/fa"


function App() {
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
            <Search>
              <FaSearch size={20} />
            </Search>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
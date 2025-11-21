// App.jsx Pagina principal jsx para llamar a cada link
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Visualizaciones from "./pages/Visualizaciones";
import Datos_Loan from "./pages/Datos_Loan";
import Home from "./components/Home";
import Modelos from "./pages/Modelos";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col">
            <Header />
            {/* <Home/> */}
            <main className="p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/datos-loan" element={<Datos_Loan />} />
                <Route path="/visualizaciones" element={<Visualizaciones />} />
                <Route path="/modelo" element={<Modelos />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

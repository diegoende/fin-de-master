import { useEffect, useState } from "react";

export default function DatosLoan() {
  const [clientes, setClientes] = useState([]);
  const [filtroId, setFiltroId] = useState("");
  const [filtroGenero, setFiltroGenero] = useState("");

  const [paginaActual, setPaginaActual] = useState(1);
  const filasPorPagina = 10;

  useEffect(() => {
    fetch("http://localhost:8000/datos")  // Ajusta a tu endpoint real
      .then((res) => res.json())
      .then((data) => setClientes(data))
      .catch((err) => console.error("Error al cargar datos:", err));
  }, []);

  // Filtros
  const clientesFiltrados = clientes.filter((cliente) => {
    const coincideId =
      filtroId === "" ||
      cliente.id_cliente.toString().includes(filtroId);
    const coincideGenero =
      filtroGenero === "" ||
      cliente.genero.toLowerCase().includes(filtroGenero.toLowerCase());
    return coincideId && coincideGenero;
  });

  // Paginación
  const totalPaginas = Math.ceil(clientesFiltrados.length / filasPorPagina);
  const indiceInicio = (paginaActual - 1) * filasPorPagina;
  const indiceFin = indiceInicio + filasPorPagina;
  const paginaActualClientes = clientesFiltrados.slice(indiceInicio, indiceFin);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Resumen de Clientes</h2>

      {/* Filtros */}
      <div className="row mb-3">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Filtrar por ID Cliente"
            value={filtroId}
            onChange={(e) => {
              setFiltroId(e.target.value);
              setPaginaActual(1);
            }}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Filtrar por Género (M/F)"
            value={filtroGenero}
            onChange={(e) => {
              setFiltroGenero(e.target.value);
              setPaginaActual(1);
            }}
          />
        </div>
      </div>

      {/* Tabla */}
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID Cliente</th>
              <th>Incumple</th>
              <th>Género</th>
              <th>Edad (años)</th>
              <th>Ingreso</th>
              <th>Crédito</th>
              <th>Cuota</th>
              <th>Tipo Ingreso</th>
              <th>Organización</th>
            </tr>
          </thead>
          <tbody>
            {paginaActualClientes.length > 0 ? (
              paginaActualClientes.map((cliente) => (
                <tr key={cliente.id_cliente}>
                  <td>{cliente.id_cliente}</td>
                  <td>{cliente.incumplimiento === 1 ? "Sí" : "No"}</td>
                  <td>{cliente.genero}</td>
                  <td>{cliente.edad_anios}</td>
                  <td>${cliente.ingreso_anual?.toLocaleString()}</td>
                  <td>${cliente.monto_credito?.toLocaleString()}</td>
                  <td>${cliente.monto_cuota?.toLocaleString()}</td>
                  <td>{cliente.tipo_ingreso}</td>
                  <td>{cliente.organizacion}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  No se encontraron resultados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <button
          className="btn btn-secondary"
          onClick={() => setPaginaActual(Math.max(paginaActual - 1, 1))}
          disabled={paginaActual === 1}
        >
          Anterior
        </button>

        <span>Página {paginaActual} de {totalPaginas}</span>

        <button
          className="btn btn-secondary"
          onClick={() => setPaginaActual(Math.min(paginaActual + 1, totalPaginas))}
          disabled={paginaActual === totalPaginas}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

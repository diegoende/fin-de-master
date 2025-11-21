import { useState, useEffect } from "react";

export default function PrediccionRandomForest() {
  const datosPorDefecto = {
    AMT_INCOME_TOTAL: 150000,
    AMT_CREDIT: 200000,
    AMT_ANNUITY: 18000,
    DAYS_BIRTH: -12000,
    DAYS_EMPLOYED: -1000,
    CNT_CHILDREN: 2,
    EXT_SOURCE_1: 0.5,
    EXT_SOURCE_2: 0.6,
    EXT_SOURCE_3: 0.55,
    DAYS_ID_PUBLISH: -2000,
  };

  const etiquetas = {
    AMT_INCOME_TOTAL: "Ingreso Total Anual ($)",
    AMT_CREDIT: "Monto Total del Crédito ($)",
    AMT_ANNUITY: "Monto Anual de la Cuota ($)",
    DAYS_BIRTH: "Edad (en días negativos)",
    DAYS_EMPLOYED: "Días Trabajados (negativo si empleado actual)",
    CNT_CHILDREN: "Número de Hijos",
    EXT_SOURCE_1: "Factor Externo 1 (0-1)",
    EXT_SOURCE_2: "Factor Externo 2 (0-1)",
    EXT_SOURCE_3: "Factor Externo 3 (0-1)",
    DAYS_ID_PUBLISH: "Días desde Publicación de Identificación",
  };

  const [datosCliente, setDatosCliente] = useState(datosPorDefecto);
  const [resultado, setResultado] = useState(null);

  const handleChange = (e) => {
    setDatosCliente({
      ...datosCliente,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const enviarPrediccion = () => {
    fetch("http://localhost:8000/api/prediccion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosCliente),
    })
      .then((res) => res.json())
      .then((json) => {
        setResultado(json);
      })
      .catch((err) => {
        console.error("Error al solicitar predicción:", err);
      });
  };

  const limpiarFormulario = () => {
    setDatosCliente(datosPorDefecto);
    setResultado(null);
  };

  const [mejorModelo, setMejorModelo] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/mejor_modelo")
      .then((res) => res.json())
      .then((data) => setMejorModelo(data.mejor_modelo))
      .catch((err) => console.error("Error al obtener mejor modelo:", err));
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Simulador de Riesgo Crediticio</h2>

      {/* Mostrar el modelo activo */}
      {mejorModelo && (
        <p className="mb-4">
          Modelo usado para predicción: <strong>{mejorModelo}</strong>
        </p>
      )}
      
      <div className="row">
        {Object.keys(datosCliente).map((campo) => (
          <div key={campo} className="mb-3 col-md-6">
            <label className="form-label fw-bold">{etiquetas[campo]}</label>
            <input
              type="number"
              className="form-control"
              name={campo}
              value={datosCliente[campo]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>

      <div className="d-flex gap-2 mt-3">
        <button className="btn btn-primary" onClick={enviarPrediccion}>
          Generar Predicción
        </button>
        <button className="btn btn-secondary" onClick={limpiarFormulario}>
          Limpiar Formulario
        </button>
      </div>

      {resultado && (
        <div className="alert alert-info mt-4">
          <h5>Resultado de la Predicción</h5>
          Cliente clasificado como:{" "}
          {(() => {
            const probabilidad = resultado.probabilidad_incumplimiento * 100;

            if (probabilidad <= 25) {
              return <span className="text-success fw-bold">RIESGO BAJO</span>;
            } else if (probabilidad > 25 && probabilidad <= 50) {
              return <span className="text-warning fw-bold">RIESGO MODERADO</span>;
            } else {
              return <span className="text-danger fw-bold">RIESGO ALTO</span>;
            }
          })()}
          <br />
          Probabilidad de Incumplimiento:{" "}
          <strong>{(resultado.probabilidad_incumplimiento * 100).toFixed(2)}%</strong>
        </div>
      )}

    </div>
  );
}

import { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";

export default function ComparacionModelos() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/comparacion_modelos")
      .then((res) => res.json())
      .then((json) => setDatos(json))
      .catch((err) => console.error("Error al cargar comparación de modelos:", err));
  }, []);

  // Obtener el nombre del modelo con mayor roc_auc
  const mejorModelo = datos.reduce((best, current) =>
    current.roc_auc > (best?.roc_auc || 0) ? current : best, null
  )?.modelo;

  return (
    <div className="bg-white shadow rounded-lg p-4 mt-4">
      <h2 className="text-xl font-semibold mb-4">Comparación de Modelos de Clasificación</h2>

      <table className="table table-striped mb-5">
        <thead className="table-dark">
          <tr>
            <th>Modelo</th>
            <th>Accuracy</th>
            <th>F1 Score</th>
            <th>ROC AUC</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((fila) => (
            <tr
              key={fila.modelo}
              className={fila.modelo === mejorModelo ? "table-success fw-bold" : ""}
            >
              <td>{fila.modelo}</td>
              <td>{(fila.accuracy * 100).toFixed(2)}%</td>
              <td>{(fila.f1_score * 100).toFixed(2)}%</td>
              <td>{(fila.roc_auc * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mb-2">Gráfico Comparativo</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={datos.map((d) => ({
            ...d,
            accuracy: d.accuracy * 100,
            f1_score: d.f1_score * 100,
            roc_auc: d.roc_auc * 100,
          }))}
          margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="modelo" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="accuracy" fill="#6ebcecff" name="Accuracy" />
          <Bar dataKey="f1_score" fill="#c8eeb8ff" name="F1 Score" />
          <Bar dataKey="roc_auc" fill="#e37425ff" name="ROC AUC" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

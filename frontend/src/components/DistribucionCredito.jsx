import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function DistribucionCredito() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/distribucion_credito")
      .then((res) => res.json())
      .then((json) => {
        const datosAdaptados = json.map((item) => ({
          rango: item.rango_credito,
          total: item.total_creditos,
        }));
        setData(datosAdaptados);
      })
      .catch((err) => {
        console.error("Error al cargar distribución de crédito:", err);
      });
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Distribución por Rango de Crédito</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="rango" type="category" />
          <Tooltip />
          <Bar dataKey="total" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

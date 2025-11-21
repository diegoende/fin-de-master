import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";

export default function DistribucionIngresos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/distribucion_ingreso")
      .then((res) => res.json())
      .then((json) => {
        const datosAdaptados = json.map((item) => ({
          rango: item.rango_ingresos,
          clientes: item.total_clientes,
        }));
        setData(datosAdaptados);
      })
      .catch((err) => {
        console.error("Error al cargar distribución de ingresos:", err);
      });
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">
        Distribución de Clientes por Rango de Ingresos
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 80 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="rango"
            interval={0}
            angle={-45}
            textAnchor="end"
            tick={{ fontSize: 12 }}
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="clientes" fill="#0ea5e9">
            <LabelList dataKey="clientes" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

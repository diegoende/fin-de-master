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

export default function IncumplimientoPorContrato() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/incumplimiento_por_contrato")
      .then((res) => res.json())
      .then((json) => {
        const datosAdaptados = json.map((item) => ({
          contrato: item.tipo_contrato,
          porcentaje: item.porcentaje_incumplen, // Eje X (porcentaje)
        }));
        setData(datosAdaptados);
      })
      .catch((err) => {
        console.error("Error al cargar incumplimiento por contrato:", err);
      });
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">
        Porcentaje de Incumplimiento por Tipo de Contrato
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
          <YAxis type="category" dataKey="contrato" />
          <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
          <Bar dataKey="porcentaje" fill="#f59e0b">
            <LabelList dataKey="porcentaje" position="right" formatter={(v) => `${v.toFixed(1)}%`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

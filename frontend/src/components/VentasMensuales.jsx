import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function VentasMensuales() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/tendencia_ventas")
      .then((res) => res.json())
      .then((json) => {
        const datosAdaptados = json.map(item => ({
          mes: item.mes, // Ya viene como "Ene", "Feb", etc.
          ventas: item.total_ventas,
        }));
        setData(datosAdaptados);
      })
      .catch(err => console.error("Error cargando ventas mensuales:", err));
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Tendencia de Ventas Mensuales</h2>
      <ResponsiveContainer width="100%" height={433}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip formatter={(value) => `$${Number(value).toFixed(2)}`} />
          <Line type="monotone" dataKey="ventas" stroke="#4f46e5" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

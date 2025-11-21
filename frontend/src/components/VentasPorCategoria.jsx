import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#0088FE", "#00C49F", "#FFBB28", "#FF8042",
  "#A28CF6", "#F66D9B", "#34D399", "#FBBF24",
  "#60A5FA", "#9CA3AF"
];

export default function VentasPorCategoria() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/mas_vendidos_categoria")
      .then((res) => res.json())
      .then((json) => {
        // Mapea la data para el PieChart
        const dataFinal = json.map(item => ({
          name: item.categoria_producto?.substring(0, 40) || "Sin categoría",
          value: item.total_ventas,
        }));
        setData(dataFinal);
      })
      .catch(err => console.error("Error cargando ventas por categoría:", err));
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Ventas por Categoría</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={value => `$${Number(value).toFixed(2)}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

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

export default function ProductosPopulares() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/productos_mas_vendidos")
      .then((res) => res.json())
      .then((json) => {
        // Adaptar los datos al formato que espera Recharts
        const datosAdaptados = json.map((item) => ({
          producto: item.producto.length > 30
            ? item.producto.substring(0, 27) + "..."
            : item.producto,
          cantidad: item.total_cantidad_vendida, // o item.total_ventas si prefieres
        }));
        setData(datosAdaptados);
      })
      .catch((err) => {
        console.error("Error al cargar productos más vendidos:", err);
      });
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Productos Más Vendidos</h2>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="producto"
            angle={-45}
            textAnchor="end"
            interval={0}
            tick={{ fontSize: 12 }}
            height={150}
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="cantidad" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

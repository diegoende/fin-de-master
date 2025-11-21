import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function TasaIncumplimiento() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/tasa_incumplimiento")
      .then((res) => res.json())
      .then((json) => {
        // Adaptar datos para grafico
        const incumplen = json.find((item) => item.incumplimiento === 1);
        const noIncumplen = json.find((item) => item.incumplimiento === 0);

        const datosAdaptados = [
          { nombre: "Incumplen", valor: incumplen ? incumplen.total_clientes : 0 },
          { nombre: "Cumplen", valor: noIncumplen ? noIncumplen.total_clientes : 0 },
        ];

        setData(datosAdaptados);
      })
      .catch((err) => {
        console.error("Error al cargar tasa de incumplimiento:", err);
      });
  }, []);

  const COLORS = ["#e63946", "#2a9d8f"];

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Tasa de Incumplimiento</h2>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="valor"
            nameKey="nombre"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label={({ nombre, percent }) => `${nombre}: ${(percent * 100).toFixed(1)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} clientes`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

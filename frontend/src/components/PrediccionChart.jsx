import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function PrediccionChart() {
  const [cantidad, setCantidad] = useState(1);
  const [precio, setPrecio] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:8000/predecir?cantidad=${cantidad}`);
      const result = await res.json();

      if (result.precio_estimado) {
        setPrecio(result.precio_estimado.toFixed(2));

        const newData = await Promise.all(
          Array.from({ length: 20 }, async (_, i) => {
            const qty = i + 1;
            const res = await fetch(`http://localhost:8000/predecir?cantidad=${qty}`);
            const json = await res.json();
            return { cantidad: qty, precio: parseFloat(json.precio_estimado.toFixed(2)) };
          })
        );
        setData(newData);
      } else {
        setPrecio("Error");
        setData([]);
      }
    } catch (error) {
      setPrecio("Error");
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Predicción de Precio</h2>

      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
        <label className="text-gray-700">Cantidad:</label>
        <input
          type="number"
          min="1"
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
          className="border border-gray-300 rounded px-3 py-2 w-32 mt-2 sm:mt-0"
        />
        <button
          onClick={handlePredict}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-3 sm:mt-0 hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Cargando..." : "Predecir"}
        </button>
      </div>

      {precio && (
        <p className="text-lg mb-4">
          Precio estimado para {cantidad} unidad{cantidad > 1 ? "es" : ""}:{' '}
          <strong className="text-green-600">${precio}</strong>
        </p>
      )}

      {data.length > 0 && (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="cantidad" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="precio" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default PrediccionChart;

import TasaIncumplimiento from "../components/TasaIncumplimiento";
import IncumplimientoPorContrato from "../components/IncumplimientoPorContrato";
import DistribucionIngresos from "../components/DistribucionIngresos";
import DistribucionCredito from "../components/DistribucionCredito";

export default function Visualizaciones() {
  return (
    <div className="row g-4">
      <div className="col-md-6">
        <TasaIncumplimiento />
      </div>
      <div className="col-md-6">
        <IncumplimientoPorContrato />
      </div>
      <div className="col-md-6">
        <DistribucionIngresos />
      </div>
      <div className="col-md-6">
        <DistribucionCredito />
      </div>
    </div>
  );
}

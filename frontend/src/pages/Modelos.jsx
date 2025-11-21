import ComparacionModelos from "../components/ComparacionModelos";
import PrediccionRandomForest from "../components/PrediccionRandomForest";

export default function Modelos() {
  return (
    <div className="row g-4">
      <div className="col-md-6">
        <PrediccionRandomForest />
      </div>
      <div className="col-md-6">
        <ComparacionModelos />
      </div>
    </div>
  );
}

import unirLogo from '../assets/logoUnir.jpg';

export default function Home() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center text-center">
      <img src={unirLogo} alt="Logo UNIR" className="mb-4" style={{ maxWidth: '800px' }} />

      <h2 className="fw-semibold">Universidad Internacional de La Rioja</h2>
      <h4 className="mb-4">Escuela Superior de Ingeniería y Tecnología</h4>

      <h5 className="mb-3">
        Máster Universitario en Análisis y Visualización de Datos Masivos / Visual Analytics and Big Data
      </h5>

      <h1 className="fw-bold text-primary mb-5" style={{ maxWidth: '800px' }}>
        Modelos de Machine Learning para la Evaluación y Predicción de Riesgos en Entidades Financieras
      </h1>

      <table className="table table-bordered w-auto text-start">
        <tbody>
          <tr>
            <th scope="row" className="bg-light">Trabajo fin de estudio presentado por:</th>
            <td>Diego Alfredo Enderica Ortega</td>
          </tr>
          <tr>
            <th scope="row" className="bg-light">Tipo de trabajo:</th>
            <td>Desarrollo de dashboard o software</td>
          </tr>
          <tr>
            <th scope="row" className="bg-light">Director/a:</th>
            <td>Hugo Xochicale Rojas</td>
          </tr>
          <tr>
            <th scope="row" className="bg-light">Fecha:</th>
            <td>23-04-2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

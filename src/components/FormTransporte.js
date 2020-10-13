import React, { useState } from "react";
import "../styles/Vulnerabilidad.css";

function FormVulnerabilidad({ pregunta }) {
  const [response, setResponse] = useState();
  return (
    <div className="formVulnerabilidad">
      <div className="modal-header">
        <h5 id="modal-label" className="fromVulnerable__title">
          {pregunta}
        </h5>
      </div>
      <div className="modal-body">
        <div className="modal-Option">
          <form>
            <select
              className="modal-select"
              onChange={(event) => setResponse(event.target.value)}
            >
              <option>Seleccione una respuesta</option>
              <option>Caminando</option>
              <option>Bicicleta</option>
              <option>Moto</option>
              <option>Carro</option>
              <option>Comparto carro/moto</option>
              <option>Transporte público</option>
              <option>Ruta escolar</option>
              <option>Ruta escolar partucular</option>

            </select>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormVulnerabilidad;

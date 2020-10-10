import React, { useState } from "react";
import "../styles/FormCovid19.css";

function FormCovid19({ pregunta }) {
  const [response, setResponse] = useState();
  return (
    <div className="formCovid19">
      <div className="modal-header">
        <h5 id="modal-label" className="fromCovid19__title">
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
              <option>Sí</option>
              <option>No</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormCovid19;

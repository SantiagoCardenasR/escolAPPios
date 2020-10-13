import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Vulnerabilidad.css";
import body from "../images/casa.png";
import logo from "../images/logo2.jpeg";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import usePortal from "react-cool-portal";
import FormVulnerabilidad from "./FormVulnerabillidad";

function Vulnerabilidad() {
  const [modalTopic, setModalTopic] = useState("");
  const [response, setResponse] = useState("");
  const preguntasNariz = [
    "¿presenta comorbilidad de riesgo para enfermedad respiratoria grave?",
  ];
  const preguntasAntecedentes = [
    "¿El estudiante presenta o ha presentado alguno de los siguientes antecedentes ?   Nota: todas las condiciones de salud relevantes o enfermedades preexistentes deben estas debidamente diagnosticadas. Los trabajadores en el momento de comunicar este tipo de situaciones deben compartir copia de diagnostico pertinente a responsables de SG-SST del centro de trabajo."

];
  
  const preguntasMedicamento = [
    "¿El estudiante ¿toma algún medicamento diario o permanente?",
    "El estudiante recibe tratamiento con corticosteroides como PREDNISONA, por algún tipo de enfermedad"
  
  ];
  const preguntasTratamiento = [
    "¿El estudiante recibe tratamiento con corticosteroides como PREDNISONA, por algún tipo de enfermedad?",
    
  ];
  const preguntasCancer = [
    "El estudiante ha recibido tratamiento para el cáncer en los últimos 5 años, o esta en tratamiento actualmente?",
    
  ];
  
  const { Portal, isShow, toggle } = usePortal({
    defaultShow: false, // The default visibility of portal, default is true
    internalShowHide: false, // Disable the built-in show/hide portal functions, default is true
    onShow: (e) => {
      if (e.target.viewportElement?.id === "Nariz") {
        setModalTopic("Nariz");
      }
      if (e.target.viewportElement?.id === "Antecedentes") {
        setModalTopic("Antecedentes");
      }
      if (e.target.viewportElement?.id === "Medicamento") {
        setModalTopic("Medicamento");
      }
      if (e.target.viewportElement?.id === "Tratamiento") {
        setModalTopic("Tratamiento");
      }
      if (e.target.viewportElement?.id === "Cancer") {
        setModalTopic("Cancer");
      }
     
      // Triggered when portal is shown
      // The event object will be the parameter of "show(e?)"
    },
    onHide: (e) => {
      console.log(e.target);
      // Triggered when portal is hidden
      // The event object will be the parameter of "hide(e?)", it maybe MouseEvent (on clicks outside) or KeyboardEvent (press ESC key)
    },
  });

  const selection = (event) => {
    console.log(event.target);
  };
  return (
    <div className="vulnerabilidad">
      <section id="icon-boxes" class="icon-boxes vulnerabilidad__menu">
        <div class="container vulnerabilidad__container">
          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 vulnerabilidad__cardContainer"
            data-aos="fade-up"
          >
            <div class="icon-box vulnerabilidad__card">
              <div className="vulnerabilidad__logo">
                <img src={logo} className="vulnerabilidad__logoImage"></img>
              </div>
              <h4 class="title vulnerabilidad__cardTitle">Formulario Vulnerabilidad</h4>
              <div class="icon vulnerabilidad__icon">
                <img src={body} alt="bodyVulnerabilidad"></img>

                <InfoIcon
                  className="vulnerabilidad__infoIcon"
                  onClick={toggle}
                  className="vulnerabilidad__ButtonFormNariz"
                  id="Nariz"
                />
                <InfoIcon
                  className="vulnerabilidad__infoIcon"
                  onClick={toggle}
                  className="vulnerabilidad__ButtonFormAntecedentes"
                  id="Antecedentes"
                />
                <InfoIcon
                  className="vulnerabilidad__infoIcon"
                  onClick={toggle}
                  className="vulnerabilidad__ButtonFormMedicamento"
                  id="Medicamento"
                />
                <InfoIcon
                  className="vulnerabilidad__infoIcon"
                  onClick={toggle}
                  className="vulnerabilidad__ButtonFormTratamiento"
                  id="Tratamiento"
                />

                <InfoIcon
                  className="vulnerabilidad__infoIcon"
                  onClick={toggle}
                  className="vulnerabilidad__ButtonFormCancer"
                  id="Cancer"
                />
                
              </div>
              <div class="btn vulnerabilidad__botton">
                <Portal>
                  <div
                    // Now you can use the "isShow" state to handle the CSS animations
                    className={`modal${isShow ? " modal-open" : ""}`}
                    tabIndex={-1}
                  >
                    <div
                      className="modal-dialog"
                      role="dialog"
                      aria-labelledby="modal-label"
                      aria-modal="true"
                    >
                      <div className="modal-close">
                        <CloseIcon
                          onClick={toggle}
                          className="vulnerabilidad__closeIcon"
                        />
                      </div>
                      {modalTopic === "Nariz"
                        ? preguntasNariz.map((item) => {
                            return <FormVulnerabilidad pregunta={item} />;
                          })
                        : modalTopic === "Antecedentes"
                        ? preguntasAntecedentes.map((item) => {
                            return <FormVulnerabilidad pregunta={item} />;
                          })
                        : modalTopic === "Medicamento"
                        ? preguntasMedicamento.map((item) => {
                            return <FormVulnerabilidad pregunta={item} />;
                          })
                        : modalTopic === "Tratamiento"
                        ? preguntasTratamiento.map((item) => {
                            return <FormVulnerabilidad pregunta={item} />;
                          })
                        : modalTopic === "Cancer"
                        ? preguntasCancer.map((item) => {
                            return <FormVulnerabilidad pregunta={item} />;
                          })
                        
                        : ""}
                      <button
                        type="button"
                        id="buttonHide"
                        class={"btn btn-primary active"}
                        onClick={toggle}
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </Portal>
              </div>

              <Link className="vulnerabilidad__link" to="/home">
                <button
                  type="button"
                  className="btn btn-primary active vulnerabilidad__backButton"
                >
                  Volver
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Vulnerabilidad;

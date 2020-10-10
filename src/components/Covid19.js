import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Covid19.css";
import body from "../images/cuerpoHumano2.jpg";
import logo from "../images/logo2.jpeg";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import usePortal from "react-cool-portal";
import FormCovid19 from "./FormCovid19";

function Covid19() {
  const [modalTopic, setModalTopic] = useState("");
  const [response, setResponse] = useState("");
  const preguntasNariz = [
    "¿Tiene o ha tenido en los ultimos 14 días dificultad respiratoria o algún otro síntoma respiratorio o algun otro sintoma respiratorio ?",
    "¿Tiene secreiciones nasales o congestión nasal?(no relacionadas con procesos alérgicos)",
  ];
  const preguntasGarganta = ["¿Tiene dolor de garganta ?"];
  const preguntasBrazos = [
    "¿Malestar general y dolor muscular que le limite las actividades de la vida diaria ?",
  ];
  const preguntasCabeza = [
    "¿Tiene fiebre?  (mayor a 38°C medida con termometro)",
    "¿Tiene o ha tenido sensación de mucho cansancio o malestar en los últimos 14 días?",
  ];
  const preguntasBoca = [
    "¿Tiene tos seca y persistente ?",
    "¿Ha notado una pérdida del sentido del gusto o del olfato en los últimos 14 dias?",
  ];
  const preguntasMano = [
    "¿Actualmente te encuentras en aislamiento y en espera del resultado de una prueba para Coronavirus COVID-19?",
    "¿Actualmente te encuentras en aislamiento luego de haber sido diagnosticado con prueba positiva para Coronavirus COVID-19",
    "¿Vives con alguien en proceso de diagnóstico (le ordenaron prueba) o confirmado de tener COVID-19?",
    "En los últimos 14 días has tenido contacto estrecho (por más de 15 minutos, a menos de 2 metros y sin usar elementos de protección personal) con alguien en proceso de diagnóstico (le ordenaron prueba) o confirmado de COVID-19",
  ];
  const preguntasPiernas = [
    "¿Tiene malestar general o escalofríos que le limite las actividades diarias?",
  ];
  const preguntasEstomago = [
    "¿Tiene o ha tenido en los últimos 14 días diarrea u otras molestias digestivas?",
  ];
  const { Portal, isShow, toggle } = usePortal({
    defaultShow: false, // The default visibility of portal, default is true
    internalShowHide: false, // Disable the built-in show/hide portal functions, default is true
    onShow: (e) => {
      if (e.target.viewportElement?.id === "Cabeza") {
        setModalTopic("Cabeza");
      }
      if (e.target.viewportElement?.id === "Garganta") {
        setModalTopic("Garganta");
      }
      if (e.target.viewportElement?.id === "Brazos") {
        setModalTopic("Brazos");
      }
      if (e.target.viewportElement?.id === "Nariz") {
        setModalTopic("Nariz");
      }
      if (e.target.viewportElement?.id === "Boca") {
        setModalTopic("Boca");
      }
      if (e.target.viewportElement?.id === "Mano") {
        setModalTopic("Mano");
      }
      if (e.target.viewportElement?.id === "Piernas") {
        setModalTopic("Piernas");
      }
      if (e.target.viewportElement?.id === "Estomago") {
        setModalTopic("Estomago");
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
    <div className="covid19">
      <section id="icon-boxes" class="icon-boxes covid19__menu">
        <div class="container covid19__container">
          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 covid19__cardContainer"
            data-aos="fade-up"
          >
            <div class="icon-box covid19__card">
              <div className="covid19__logo">
                <img src={logo} className="covid19__logoImage"></img>
              </div>
              <h4 class="title covid19__cardTitle">Formulario Covid-19</h4>
              <div class="icon covid19__icon">
                <img src={body} alt="bodyCovid"></img>

                <InfoIcon
                  className="covid19__infoIcon"
                  onClick={toggle}
                  className="covid-19__ButtonFormCabeza"
                  id="Cabeza"
                />
                <InfoIcon
                  className="covid19__infoIcon"
                  onClick={toggle}
                  className="covid-19__ButtonFormGarganta"
                  id="Garganta"
                />
                <InfoIcon
                  className="covid19__infoIcon"
                  onClick={toggle}
                  className="covid-19__ButtonFormBrazos"
                  id="Brazos"
                />
                <InfoIcon
                  className="covid19__infoIcon"
                  onClick={toggle}
                  className="covid-19__ButtonFormNariz"
                  id="Nariz"
                />

                <InfoIcon
                  className="covid19__infoIcon"
                  onClick={toggle}
                  className="covid-19__ButtonFormBoca"
                  id="Boca"
                />
                <InfoIcon
                  className="covid19__infoIcon"
                  onClick={toggle}
                  className="covid-19__ButtonFormMano"
                  id="Mano"
                />
                <InfoIcon
                  className="covid19__infoIcon"
                  onClick={toggle}
                  className="covid-19__ButtonFormPiernas"
                  id="Piernas"
                />

                <InfoIcon
                  className="covid19__infoIcon"
                  onClick={toggle}
                  className="covid-19__ButtonFormEstomago"
                  id="Estomago"
                />
              </div>
              <div class="btn covid19__botton">
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
                          className="covid19__closeIcon"
                        />
                      </div>
                      {modalTopic === "Nariz"
                        ? preguntasNariz.map((item) => {
                            return <FormCovid19 pregunta={item} />;
                          })
                        : modalTopic === "Cabeza"
                        ? preguntasCabeza.map((item) => {
                            return <FormCovid19 pregunta={item} />;
                          })
                        : modalTopic === "Garganta"
                        ? preguntasGarganta.map((item) => {
                            return <FormCovid19 pregunta={item} />;
                          })
                        : modalTopic === "Brazos"
                        ? preguntasBrazos.map((item) => {
                            return <FormCovid19 pregunta={item} />;
                          })
                        : modalTopic === "Boca"
                        ? preguntasBoca.map((item) => {
                            return <FormCovid19 pregunta={item} />;
                          })
                        : modalTopic === "Mano"
                        ? preguntasMano.map((item) => {
                            return <FormCovid19 pregunta={item} />;
                          })
                        : modalTopic === "Piernas"
                        ? preguntasPiernas.map((item) => {
                            return <FormCovid19 pregunta={item} />;
                          })
                        : modalTopic === "Estomago"
                        ? preguntasEstomago.map((item) => {
                            return <FormCovid19 pregunta={item} />;
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

              <Link className="covid19__link" to="/salud">
                <button
                  type="button"
                  className="btn btn-primary active covid19__backButton"
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
export default Covid19;

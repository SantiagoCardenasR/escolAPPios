import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Satifaccion.css";
import body from "../images/estudiantes.png";
import logo from "../images/logo2.jpeg";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import usePortal from "react-cool-portal";
import FormSatifaccion from "./FormSatifaccion";

function Satifaccion() {
  const [modalTopic, setModalTopic] = useState("");
  const [response, setResponse] = useState("");
  
  const preguntasGeneral = [
    "En general ¿cómo calificaría la(s) clase(s) de esta semana ?",
   
  ];
  const preguntasTemas = [
    "¿Los temas en clase fueron claros y comprendibles?",
  ];
  const preguntasActividades  = [
    "¿Las actividades de la clase facilitaron mi aprendizaje?",
    
  ];
  const preguntasFomentar = [
    "¿La clase fomentó la participación de los miembros de losgrupos, de forma cooperativa y abierta, para el intercambio de ideas ?",
]; 
  const preguntasFavor = [
    "¿La clase favoreció la interacción de los estudiantes con el profesor?",
];
  const preguntasUso = [
    "¿En la clase se hixo un buen uso de las herramientas tecnológicas?",
  ];
  const preguntasActitud = [
    "¿Cómo fue la actutud en la clase?",
  ];
  
  const { Portal, isShow, toggle } = usePortal({
    defaultShow: false, // The default visibility of portal, default is true
    internalShowHide: false, // Disable the built-in show/hide portal functions, default is true
    onShow: (e) => {
      if (e.target.viewportElement?.id === "General") {
        setModalTopic("General");
      }
      if (e.target.viewportElement?.id === "Temas") {
        setModalTopic("Temas");
      }
      if (e.target.viewportElement?.id === "Actividades") {
        setModalTopic("Actividades");
      }
      if (e.target.viewportElement?.id === "Fomentar") {
        setModalTopic("Fomentar");
      }
      if (e.target.viewportElement?.id === "Favor") {
        setModalTopic("Favor");
      }
      if (e.target.viewportElement?.id === "Uso") {
        setModalTopic("Uso");
      }
      if (e.target.viewportElement?.id === "Actitud") {
        setModalTopic("Actitud");
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
    <div className="Satifaccion">
      <section id="icon-boxes" class="icon-boxes Satifaccion__menu">
        <div class="container Satifaccion__container">
          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 Satifaccion__cardContainer"
            data-aos="fade-up"
          >
            <div class="icon-box Satifaccion__card">
              <div className="Satifaccion__logo">
                <img src={logo} className="Satifaccion__logoImage"></img>
              </div>
              <h4 class="title Satifaccion__cardTitle">Formulario de satifacción en clase</h4>
              <div class="icon Satifaccion__icon">
                <img src={body} alt="bodyCovid"></img>

                <InfoIcon
                  className="Satifaccion__infoIcon"
                  onClick={toggle}
                  className="Satifaccion__ButtonFormGeneral"
                  id="General"
                />
                <InfoIcon
                  className="Satifaccion__infoIcon"
                  onClick={toggle}
                  className="Satifaccion__ButtonFormTemas"
                  id="Temas"
                />
                <InfoIcon
                  className="Satifaccion__infoIcon"
                  onClick={toggle}
                  className="Satifaccion__ButtonFormActividades"
                  id="Actividades"
                />
                <InfoIcon
                  className="Satifaccion__infoIcon"
                  onClick={toggle}
                  className="Satifaccion__ButtonFormFomentar"
                  id="Fomentar"
                />

                <InfoIcon
                  className="Satifaccion__infoIcon"
                  onClick={toggle}
                  className="Satifaccion__ButtonFormFavor"
                  id="Favor"
                />
                <InfoIcon
                  className="Satifaccion__infoIcon"
                  onClick={toggle}
                  className="Satifaccion__ButtonFormUso"
                  id="Uso"
                />
                <InfoIcon
                  className="Satifaccion__infoIcon"
                  onClick={toggle}
                  className="Satifaccion__ButtonFormActitud"
                  id="Actitud"
                />

            
              </div>
              <div class="btn Satifaccion__botton">
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
                          className="Satifaccion__closeIcon"
                        />
                      </div>
                      {modalTopic === "Fomentar"
                        ? preguntasFomentar.map((item) => {
                            return <FormSatifaccion pregunta={item} />;
                          })
                        : modalTopic === "General"
                        ? preguntasGeneral.map((item) => {
                            return <FormSatifaccion pregunta={item} />;
                          })
                        : modalTopic === "Temas"
                        ? preguntasTemas.map((item) => {
                            return <FormSatifaccion pregunta={item} />;
                          })
                        : modalTopic === "Actividades"
                        ? preguntasActividades.map((item) => {
                            return <FormSatifaccion pregunta={item} />;
                          })
                        : modalTopic === "Favor"
                        ? preguntasFavor.map((item) => {
                            return <FormSatifaccion pregunta={item} />;
                          })
                        : modalTopic === "Uso"
                        ? preguntasUso.map((item) => {
                            return <FormSatifaccion pregunta={item} />;
                          })
                        : modalTopic === "Actitud"
                        ? preguntasActitud.map((item) => {
                            return <FormSatifaccion pregunta={item} />;
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

              <Link className="Satifaccion__link" to="/home">
                <button
                  type="button"
                  className="btn btn-primary active Satifaccion__backButton"
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
export default Satifaccion;

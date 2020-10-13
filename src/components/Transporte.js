import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Transporte.css";
import body from "../images/Bus2.jpg";
import logo from "../images/logo2.jpeg";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import usePortal from "react-cool-portal";
import FormTransporte from "./FormTransporte";

function Transporte() {
  const [modalTopic, setModalTopic] = useState("");
  const [response, setResponse] = useState("");
  const preguntasVehiculo = [
    "¿Qué medio de transporte utiliza para ir y regresar al colegio?",
  ];
 
  
  const { Portal, isShow, toggle } = usePortal({
    defaultShow: false, // The default visibility of portal, default is true
    internalShowHide: false, // Disable the built-in show/hide portal functions, default is true
    onShow: (e) => {
      if (e.target.viewportElement?.id === "Vehiculo") {
        setModalTopic("Vehiculo");
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
    <div className="Transporte">
      <section id="icon-boxes" class="icon-boxes Transporte__menu">
        <div class="container Transporte__container">
          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 Transporte__cardContainer"
            data-aos="fade-up"
          >
            <div class="icon-box Transporte__card">
              <div className="Transporte__logo">
                <img src={logo} className="Transporte__logoImage"></img>
              </div>
              <h4 class="title Transporte__cardTitle">Formulario Transporte</h4>
              <div class="icon Transporte__icon">
                <img src={body} alt="bodyTransporte"></img>

                <InfoIcon
                  className="Transporte__infoIcon"
                  onClick={toggle}
                  className="Transporte__ButtonFormVehiculo"
                  id="Vehiculo"
                />
                
                
              </div>
              <div class="btn Transporte__botton">
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
                          className="Transporte__closeIcon"
                        />
                      </div>
                      {modalTopic === "Vehiculo"
                        ? preguntasVehiculo.map((item) => {
                            return <FormTransporte pregunta={item} />;
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

              <Link className="Transporte__link" to="/home">
                <button
                  type="button"
                  className="btn btn-primary active Transporte__backButton"
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
export default Transporte;

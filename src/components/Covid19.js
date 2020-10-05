import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Covid19.css";
import body from "../images/cuerpoHumano.png";
import InfoIcon from "@material-ui/icons/Info";
import usePortal from "react-cool-portal";

function Covid19() {
  const { Portal, isShow, toggle } = usePortal({
    defaultShow: false, // The default visibility of portal, default is true
    internalShowHide: false, // Disable the built-in show/hide portal functions, default is true
    onShow: (e) => {
      // Triggered when portal is shown
      // The event object will be the parameter of "show(e?)"
    },
    onHide: (e) => {
      // Triggered when portal is hidden
      // The event object will be the parameter of "hide(e?)", it maybe MouseEvent (on clicks outside) or KeyboardEvent (press ESC key)
    },
  });
  return (
    <div className="covid19">
      <section id="icon-boxes" class="icon-boxes covid19__menu">
        <div class="container covid19__container">
          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 covid19__cardContainer"
            data-aos="fade-up"
          >
            <div class="icon-box covid19__card">
              <h4 class="title covid19__cardTitle">Formulario Covid-19</h4>
              <div class="icon covid19__icon">
                <img src={body} alt="bodyCovid"></img>
              </div>
              <div class="btn covid19__botton">
                <button onClick={toggle}>
                  {isShow ? "Close" : "Open"} <InfoIcon />
                </button>
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
                      <div className="modal-header">
                        <h5 id="modal-label" className="modal-title">
                          Modal title
                        </h5>
                      </div>
                      <div className="modal-body">
                        <p>Modal body text goes here.</p>
                      </div>
                    </div>
                  </div>
                </Portal>
              </div>

              <Link className="covid19__link" to="/salud">
                <button type="button" class={"btn btn-primary active"}>
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

import React, { FC, MouseEvent, useState, useEffect } from "react";
/* import { Link } from "react-router-dom"; */
import "../styles/Covid19.css";
import usePortal from "../ReactPortal";
import { Global, css } from "@emotion/core";
/* import body from "../images/cuerpoHumano.png";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import InfoIcon from "@material-ui/icons/Info"; */

function Covid19() {
  const [isFadeOut, setIsFadeOut] = useState(false);
  const { Portal, show, hide, isShow } = usePortal({
    defaultShow: false,
    escToHide: false,
  });

  const close = () => {
    setIsFadeOut(true);
  };

  const handleClickBackdrop = (MouseEvent) => {
    const { id } = MouseEvent.target;

    if (id === "modal" || id === "modal-dialog") close();
  };

  const handleAnimEnd = () => {
    if (!isFadeOut) return;

    setIsFadeOut(false);
    hide();
  };

  useEffect(() => {
    const handleKeyDown = (KeyboardEvent) => {
      if (isShow && KeyboardEvent.keyCode === 27) close();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isShow]);

  return (
    <div className="covid19">
      {/*  <section id="icon-boxes" class="icon-boxes covid19__menu">
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
                <Tooltip title={longText} className="covid19__tooltip">
                  <Button className={classes.button}>
                    <InfoIcon className="covid19__infoIcon" />
                  </Button>
                </Tooltip>
              </div>

              <Link className="covid19__link" to="/salud">
                <button type="button" class={"btn btn-primary active"}>
                  Volver
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      <>
        <Global
          styles={css`
            ${normalize}
            ${root}
          `}
        />
        <div css={container}>
          <h1 css={title}>REACT COOL PORTAL</h1>
          <p css={subtitle}>
            {
              "React hook for Portals, which renders modals, dropdowns, tooltips etc. to <body> or else."
            }
          </p>
          <button css={btn} onClick={show} type="button">
            OPEN MODAL
          </button>
          <Portal>
            <div
              id="modal"
              css={[modal, isFadeOut && modalFadeOut]}
              onClick={handleClickBackdrop}
              onAnimationEnd={handleAnimEnd}
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div id="modal-dialog" css={modalDialog} role="document">
                <div css={modalContent}>
                  <div css={modalHeader}>
                    <h5 css={modalTitle} id="exampleModalLabel">
                      <span role="img" aria-label="Hello">
                        👋🏻
                      </span>{" "}
                      Hola
                    </h5>
                    <button
                      css={modalClose}
                      onClick={close}
                      type="button"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div css={modalBody}>
                    <p>
                      You can also close me by pressing the &quot;ESC&quot; key.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Portal>
        </div>
      </>
    </div>
  );
}
export default Covid19;

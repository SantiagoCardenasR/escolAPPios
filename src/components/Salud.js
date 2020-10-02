import React from "react";
import "../styles/Salud.css";
import "../assets/css/style.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import HealingIcon from '@material-ui/icons/Healing';
import { Link } from "react-router-dom";

function Salud() {
  return (
    <div className="salud">
      <section id="icon-boxes" class="icon-boxes salud__menu">
        <div class="container salud__container">
          <Link className="salud__link" to="/coivd19Form">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 salud__cardContainer"
              data-aos="fade-up"
            >
              <div class="icon-box salud__card">
                <div class="icon salud__icon">
                  <HealingIcon className="salud__covidIcono" />
                </div>
                <h4 class="title salud__cardTitle">Covid-19</h4>
              </div>
            </div>
          </Link>

          <Link className="salud__link" to="">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 salud__cardContainer"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="icon-box salud__card">
                <div class="icon salud__icon">
                  <i class="bx bx-file"></i>
                </div>
                <h4 class="title salud__cardTitle">Vulnerabilidad</h4>
              </div>
            </div>
          </Link>
        </div>

        <div className="container salud__container">
          <Link className="salud__link" to="">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 salud__cardContainer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon-box salud__card">
                <div class="icon salud__icon">
                  <i class="bx bx-tacsaludter"></i>
                </div>
                <h4 class="title salud__cardTitle">Riesgo</h4>
              </div>
            </div>
          </Link>

          
        </div>
      </section>
    </div>
  );
}

export default Salud;

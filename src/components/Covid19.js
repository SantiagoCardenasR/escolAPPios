import React from "react";
import { Link } from "react-router-dom";
import "../styles/Covid19.css";

function Covid19() {
  return (
    <div className="covid19">
      <section id="icon-boxes" class="icon-boxes covid19__menu">
        <div class="container covid19__container">
          <Link className="covid19__link" to="/salud">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 covid19__cardContainer"
              data-aos="fade-up"
            >
              <div class="icon-box covid19__card">
                <h4 class="title covid19__cardTitle">Formulario Covid-19</h4>
                <div class="icon covid19__icon">
                  <i class="bx bxl-dribbble"></i>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Covid19;

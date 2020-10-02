import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section id="icon-boxes" class="icon-boxes home__menu">
        <div class="container home__container">
          <Link className="home__link" to="/salud">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 home__cardContainer"
              data-aos="fade-up"
            >
              <div class="icon-box home__card">
                <div class="icon home__icon">
                  <i class="bx bxl-dribbble"></i>
                </div>
                <h4 class="title home__cardTitle">Salud</h4>
              </div>
            </div>
          </Link>

          <Link className="home__link" to="">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 home__cardContainer"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="icon-box home__card">
                <div class="icon home__icon">
                  <i class="bx bx-file"></i>
                </div>
                <h4 class="title home__cardTitle">Transporte</h4>
              </div>
            </div>
          </Link>
        </div>

        <div className="container home__container">
          <Link className="home__link" to="">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 home__cardContainer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon-box home__card">
                <div class="icon home__icon">
                  <i class="bx bx-tachometer"></i>
                </div>
                <h4 class="title home__cardTitle">Carné</h4>
              </div>
            </div>
          </Link>

          <Link className="home__link" to="">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 home__cardContainer"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="icon-box home__card">
                <div class="icon home__icon">
                  <i class="bx bx-layer"></i>
                </div>
                <h4 class="title home__cardTitle">Agenda</h4>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

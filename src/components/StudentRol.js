import React from 'react'
import { Link } from "react-router-dom";
import '../styles/StudentRol.css'

function StudentRol() {
    return (
        <div className="studentRol">
            <div class="container studentRol__container">
          <Link className="studentRol__link" to="/salud">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 studentRol__cardContainer"
              data-aos="fade-up"
            >
              <div class="icon-box studentRol__card">
                <div class="icon studentRol__icon">
                  <i class="bx bxl-dribbble"></i>
                </div>
                <h4 class="title studentRol__cardTitle">Carné</h4>
              </div>
            </div>
          </Link>

          <Link className="studentRol__link" to="/salud">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 studentRol__cardContainer"
              data-aos="fade-up"
            >
              <div class="icon-box studentRol__card">
                <div class="icon studentRol__icon">
                  <i class="bx bxl-dribbble"></i>
                </div>
                <h4 class="title studentRol__cardTitle">Pico y cole</h4>
              </div>
            </div>
          </Link>

          <Link className="studentRol__link" to="">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 studentRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="icon-box studentRol__card">
                <div class="icon studentRol__icon">
                  <i class="bx bx-file"></i>
                </div>
                <h4 class="title studentRol__cardTitle">Transporte</h4>
              </div>
            </div>
          </Link>
        </div>

        <div className="container studentRol__container">
          <Link className="studentRol__link" to="">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 studentRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon-box studentRol__card">
                <div class="icon studentRol__icon">
                  <i class="bx bx-tacstudentRolter"></i>
                </div>
                <h4 class="title studentRol__cardTitle">Formato Covid</h4>
              </div>
            </div>
          </Link>

          <Link className="studentRol__link" to="">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 studentRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon-box studentRol__card">
                <div class="icon studentRol__icon">
                  <i class="bx bx-tacstudentRolter"></i>
                </div>
                <h4 class="title studentRol__cardTitle">Formato Vulnerabilidad</h4>
              </div>
            </div>
          </Link>

          <Link className="studentRol__link" to="">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 studentRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="icon-box studentRol__card">
                <div class="icon studentRol__icon">
                  <i class="bx bx-layer"></i>
                </div>
                <h4 class="title studentRol__cardTitle">Agenda</h4>
              </div>
            </div>
          </Link>
        </div> 
        
        <div className="container studentRol__container">
          <Link className="studentRol__link" to="">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 studentRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon-box studentRol__card">
                <div class="icon studentRol__icon">
                  <i class="bx bx-tacstudentRolter"></i>
                </div>
                <h4 class="title studentRol__cardTitle">Calendario</h4>
              </div>
            </div>
          </Link>

          <Link className="studentRol__link" to="">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 studentRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon-box studentRol__card">
                <div class="icon studentRol__icon">
                  <i class="bx bx-tacstudentRolter"></i>
                </div>
                <h4 class="title studentRol__cardTitle">Notas</h4>
              </div>
            </div>
          </Link>

        </div>
        </div>
    )
}

export default StudentRol

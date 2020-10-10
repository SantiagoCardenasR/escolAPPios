import React from 'react'
import { Link } from "react-router-dom";
import '../styles/AdminRol.css'

function AdminRol() {
    return (
        <div className="AdminRol">
            <div class="container AdminRol__container">
          <Link className="AdminRol__link" to="/carne">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 AdminRol__cardContainer"
              data-aos="fade-up"
            >
              <div class="icon-box AdminRol__card">
                <div class="icon AdminRol__icon">
                  <i class="bx bxl-dribbble"></i>
                </div>
                <h4 class="title AdminRol__cardTitle">Carné</h4>
              </div>
            </div>
          </Link>

          <Link className="AdminRol__link" to="/salud">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 AdminRol__cardContainer"
              data-aos="fade-up"
            >
              <div class="icon-box AdminRol__card">
                <div class="icon AdminRol__icon">
                  <i class="bx bxl-dribbble"></i>
                </div>
                <h4 class="title AdminRol__cardTitle">Carné</h4>
              </div>
            </div>
          </Link>

          <Link className="AdminRol__link" to="/transporte">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 AdminRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="icon-box AdminRol__card">
                <div class="icon AdminRol__icon">
                  <i class="bx bx-file"></i>
                </div>
                <h4 class="title AdminRol__cardTitle">Transporte</h4>
              </div>
            </div>
          </Link>
        </div>

        <div className="container AdminRol__container">
          <Link className="AdminRol__link" to="/coivd19Form">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 AdminRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon-box AdminRol__card">
                <div class="icon AdminRol__icon">
                  <i class="bx bx-tacAdminRolter"></i>
                </div>
                <h4 class="title AdminRol__cardTitle">Formato Covid</h4>
              </div>
            </div>
          </Link>

          <Link className="AdminRol__link" to="/vulnerabiliad">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 AdminRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon-box AdminRol__card">
                <div class="icon AdminRol__icon">
                  <i class="bx bx-tacAdminRolter"></i>
                </div>
                <h4 class="title AdminRol__cardTitle">Formato Vulnerabilidad</h4>
              </div>
            </div>
          </Link>

          <Link className="AdminRol__link" to="/agenda">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 AdminRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="icon-box AdminRol__card">
                <div class="icon AdminRol__icon">
                  <i class="bx bx-layer"></i>
                </div>
                <h4 class="title AdminRol__cardTitle">Agenda</h4>
              </div>
            </div>
          </Link>
        </div> 
        
        <div className="container AdminRol__container">
          <Link className="AdminRol__link" to="/calendario">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 AdminRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon-box AdminRol__card">
                <div class="icon AdminRol__icon">
                  <i class="bx bx-tacAdminRolter"></i>
                </div>
                <h4 class="title AdminRol__cardTitle">Calendario</h4>
              </div>
            </div>
          </Link>

          <Link className="AdminRol__link" to="/notas">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 AdminRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon-box AdminRol__card">
                <div class="icon AdminRol__icon">
                  <i class="bx bx-tacAdminRolter"></i>
                </div>
                <h4 class="title AdminRol__cardTitle">Notas</h4>
              </div>
            </div>
          </Link>

        </div>
        
            
        </div>
    )
}

export default AdminRol

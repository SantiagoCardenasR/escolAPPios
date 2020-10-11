import React from 'react'
import { Link } from "react-router-dom";
import '../styles/AdminRol.css'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CommuteIcon from '@material-ui/icons/Commute';
import BookIcon from '@material-ui/icons/Book';
import HealingIcon from '@material-ui/icons/Healing';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EventIcon from '@material-ui/icons/Event';
import TimelineIcon from '@material-ui/icons/Timeline';
import WarningIcon from '@material-ui/icons/Warning';

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
                  <PermIdentityIcon  className="adminRol__iconImage"/>
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
                  <PermIdentityIcon  className="adminRol__iconImage"/>
                </div>
                <h4 class="title AdminRol__cardTitle">Carné</h4>
              </div>
            </div>
          </Link>
        </div>

        <div className="container AdminRol__container">
        <Link className="AdminRol__link" to="/transporte">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 AdminRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="icon-box AdminRol__card">
                <div class="icon AdminRol__icon">
                <CommuteIcon  className="adminRol__iconImage"/>
                </div>
                <h4 class="title AdminRol__cardTitle">Transporte</h4>
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
                <BookIcon  className="adminRol__iconImage"/>
                </div>
                <h4 class="title AdminRol__cardTitle">Agenda</h4>
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
                <HealingIcon  className="adminRol__iconImage"/>
                </div>
                <h4 class="title AdminRol__cardTitle">Formato Covid</h4>
              </div>
            </div>
          </Link>

          <Link className="AdminRol__link" to="/vulnerabilidad">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 AdminRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon-box AdminRol__card">
                <div class="icon AdminRol__icon">
                <LocalHospitalIcon  className="adminRol__iconImage"/>
                </div>
                <h4 class="title AdminRol__cardTitle">Formato Vulnerabilidad</h4>
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
                <EventIcon  className="adminRol__iconImage"/>
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
                <TimelineIcon  className="adminRol__iconImage"/>
                </div>
                <h4 class="title AdminRol__cardTitle">Notas</h4>
              </div>
            </div>
          </Link>

        </div>

        <div className="container AdminRol__container">
          <Link className="AdminRol__link" to="/riesgo">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 AdminRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon-box AdminRol__card">
                <div class="icon AdminRol__icon">
                <WarningIcon  className="adminRol__iconImage"/>
                </div>
                <h4 class="title AdminRol__cardTitle">Riesgo</h4>
              </div>
            </div>
          </Link>

        </div>        
            
        </div>
    )
}

export default AdminRol

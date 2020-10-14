import React from 'react'
import { Link } from "react-router-dom";
import '../styles/StudentRol.css'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CommuteIcon from '@material-ui/icons/Commute';
import BookIcon from '@material-ui/icons/Book';
import HealingIcon from '@material-ui/icons/Healing';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EventIcon from '@material-ui/icons/Event';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import TimelineIcon from '@material-ui/icons/Timeline';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function StudentRol() {
    return (
        <div className="studentRol">
            <div class="container studentRol__container">
          <Link className="studentRol__link" to="/carne">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 studentRol__cardContainer"
              data-aos="fade-up"
            >
              <div class="icon-box studentRol__card">
                <div class="icon studentRol__icon">
                <PermIdentityIcon  className="studentRol__iconImage"/>
                </div>
                <h4 class="title studentRol__cardTitle">Carné</h4>
              </div>
            </div>
          </Link>

          <Link className="studentRol__link" to="/picoYcole">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 studentRol__cardContainer"
              data-aos="fade-up"
            >
              <div class="icon-box studentRol__card">
                <div class="icon studentRol__icon">
                  <DirectionsRunIcon  className="studentRol__iconImage"/>
                </div>
                <h4 class="title studentRol__cardTitle">Pico y cole</h4>
              </div>
            </div>
          </Link>

          <Link className="studentRol__link" to="/transporte">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 studentRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="icon-box studentRol__card">
                <div class="icon studentRol__icon">
                  <CommuteIcon  className="studentRol__iconImage"/>
                </div>
                <h4 class="title studentRol__cardTitle">Transporte</h4>
              </div>
            </div>
          </Link>
        </div>

        <div className="container studentRol__container">
          <Link className="studentRol__link" to="/coivd19Form">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 studentRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon-box studentRol__card">
                <div class="icon studentRol__icon">
                  <HealingIcon  className="studentRol__iconImage"/>
                </div>
                <h4 class="title studentRol__cardTitle">Formato Covid</h4>
              </div>
            </div>
          </Link>

          <Link className="studentRol__link" to="/vulnerabilidad">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 studentRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon-box studentRol__card">
                <div class="icon studentRol__icon">
                  <LocalHospitalIcon  className="studentRol__iconImage"/>
                </div>
                <h4 class="title studentRol__cardTitle">Formato Vulnerabilidad</h4>
              </div>
            </div>
          </Link>

          <Link className="studentRol__link" to="/agenda">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 studentRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="icon-box studentRol__card">
                <div class="icon studentRol__icon">
                  <BookIcon  className="studentRol__iconImage"/>
                </div>
                <h4 class="title studentRol__cardTitle">Agenda</h4>
              </div>
            </div>
          </Link>
        </div> 
        
        <div className="container studentRol__container">
          <Link className="studentRol__link" to="/calendario">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 studentRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon-box studentRol__card">
                <div class="icon studentRol__icon">
                  <EventIcon  className="studentRol__iconImage"/>
                </div>
                <h4 class="title studentRol__cardTitle">Calendario</h4>
              </div>
            </div>
          </Link>

          <Link className="studentRol__link" to="/notas">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 studentRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon-box studentRol__card">
                <div class="icon studentRol__icon">
                  <TimelineIcon  className="studentRol__iconImage"/>
                </div>
                <h4 class="title studentRol__cardTitle">Notas</h4>
              </div>
            </div>
          </Link>

          <Link className="studentRol__link" to="/satisfaccion">
            <div
              class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 studentRol__cardContainer"
              data-aos="fade-up"
              data-aos-delay="300"
            >
               <div class="icon-box studentRol__card">
                <div class="icon studentRol__icon">
                  <InsertEmoticonIcon  className="studentRol__iconImage"/>
                </div>
                <h4 class="title studentRol__cardTitle">Formato de satisfacción</h4>
              </div>
            </div>
          </Link>

        </div>
        </div>
    )
}

export default StudentRol

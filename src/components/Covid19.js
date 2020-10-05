import React from "react";
import { Link } from "react-router-dom";
import "../styles/Covid19.css";
import body from "../images/cuerpoHumano.png";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: "100%",
  },
  customWidth: {
    maxWidth: 1000,
  },
  noMaxWidth: {
    maxWidth: 'none',
  },
}));

const longText = `
¿Tiene una temperatura corporal de 38°?
`;

export default function VariableWidth(){
  const classes = useStyles();

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
                
                <Tooltip title={longText} className="covid19__tooltip">
                  <Button className={classes.button}><InfoIcon className="covid19__infoIcon" /></Button>
                </Tooltip>
                </div>
        
                <Link className="covid19__link" to="/salud">
                  <button type="button" class={"btn btn-primary active"}>Volver</button>
                </Link>
              </div>
            </div>
        </div>
      </section>
    </div>
    
  );
}


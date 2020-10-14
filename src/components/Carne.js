import React from 'react'
import { Link } from "react-router-dom";
import QRCode from 'qrcode.react';
import {useStateValue} from '../StateProvider'
import "../styles/Carne.css"
import userImage from "../images/user.png"

function Carne() {
    const [{userInfo}, dispatch] = useStateValue();
    return (
        <div className="carne">
            <img src={userImage} className="carne__image"></img>
            <div className="carne__userInfoContainer">
                <p>Nombre: {userInfo.user_name}</p>
                <p>Apellido: {userInfo.user_lastName}</p>
                <p>email: {userInfo.user_email}</p>
            </div>
            <div className="carne__qrCodeContainer">
                <QRCode className="carne__qrCode" includeMargin="true" renderAs="canvas" value={userInfo.user_id.toString()} size="200" bgColor="black" fgColor="#bfe349"/>
            </div>

            <Link className="carne__link" to="/home">
                <button
                  type="button"
                  className="btn btn-primary active carne__backButton"
                >
                  Volver
                </button>
              </Link>

        </div>
    )
}

export default Carne

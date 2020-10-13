import React from 'react'
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
                <QRCode value={userInfo.user_id} size="300" bgColor="black" fgColor="#bfe349"/>
            </div>
        </div>
    )
}

export default Carne

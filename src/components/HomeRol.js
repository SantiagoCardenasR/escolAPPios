import React from 'react'
import { useStateValue } from "../StateProvider";
import {useHistory } from "react-router-dom";
import { auth} from "../firebase";
import StudentRol from './StudentRol';
import AdminRol from './AdminRol';
import '../styles/HomeRol.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function HomeRol({rol}) {
    const [{ userInfo, user }, dispatch] = useStateValue();
    const history = useHistory();

    const logOut = () => {
        if(user)
        {
            sessionStorage.removeItem('User');
            sessionStorage.removeItem("User_name");
            sessionStorage.removeItem("User_email");
            sessionStorage.removeItem("User_id");
            
            dispatch({
                type: "ADD_USER_DATA",
                userData:{
                    user_name: "",
                      user_lastName: "",
                      user_email: "",
                      user_id: "",
                      user_address1: "",
                      user_address2: "",
                      user_phone: "",
                      user_typeId: "",
                      user_rol: "",
                }
            });

           auth.signOut();
           history.push("/"); 
        }
    }

    return (
        <div className="homeRol">
            <div className="homeRol__welcome">
                <h3 className="homeRol__welcomeMessage">Bienvenido {userInfo.user_name + " " + userInfo.user_lastName} </h3>
                <div onClick={logOut} className="homeRol__signout">
                    <ExitToAppIcon className="homeRol__signoutIcon"/>
                </div> 
            </div>
            {rol === "Estudiante"? <StudentRol />: rol === "Administrativo" ? <AdminRol />:""}
        </div>
    )
}

export default HomeRol

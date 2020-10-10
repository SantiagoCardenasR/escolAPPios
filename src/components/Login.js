import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import { Link, useHistory } from "react-router-dom";
import { auth, reference } from "../firebase";
import logo from "../images/logo.png";
import "../styles/Login.css"; 

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();

    reference.child("users").on("value", snap => {
      snap.forEach(element => {
          if(email === element.val().email)
          {
              dispatch({
                  type: "ADD_USER_DATA",
                  userData: {
                      user_name: element.val().name,
                      user_lastName: element.val().lastName,
                      user_email: element.val().email,
                      user_id: element.val().id,
                      user_address1: element.val().addrress1,
                      user_address2: element.val().addrress2,
                      user_phone: element.val().phone,
                      user_typeId: element.val().typeId,
                      user_rol: element.val().rol,
                  }
                });
              console.log('SESION STOREAGE SECTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
              sessionStorage.setItem('User', user);
              sessionStorage.setItem("User_name", element.val().name);
              sessionStorage.setItem("User_email", element.val().email);
              sessionStorage.setItem("User_id", element.val().id);
              console.log('USER ID >>>>>>>>>>>>>>>>> '+element.val().id)
          }
      });
  });


    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/home");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <Link to="/">
          <img className="login__logo" src={logo} alt="logo" />
        </Link>
        <h1>EscolAppios</h1>
        <form>
          <h5>E-mail / identificación</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          ></input>
          <h5>Contraseña</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          ></input>
          <button onClick={login} type="submit" className="login__signInButton">
            Iniciar Sesión
          </button>
        </form>
        <p>
          Al iniciar sesión aceptas los terminos y condiciones de uso, de
          escolappios.
        </p>
        <Link to="/register">
          <button className="login__registerButton">
            Crea tu cuenta escolAPPios
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;

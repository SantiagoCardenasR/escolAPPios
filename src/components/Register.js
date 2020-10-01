import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import { reference } from "../firebase";
import logo from "../images/logo.png";
import "../styles/Register.css";

function Register() {
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState(0);
  const [typeId, setTypeId] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [phone, setPhone] = useState(0);
  const [rol, setRol] = useState("");

  const register = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_USER_DATA",
      userData: {
        user_name: name,
        user_lastName: lastName,
        user_email: email,
        user_id: id,
        user_address1: address1,
        user_address2: address2,
        user_phone: phone,
        user_typeId: typeId,
        user_rol: rol,
      },
    });

    var updates = {};
    var userData = {
      name: name,
      lastName: lastName,
      email: email,
      id: parseInt(id),
      address1: address1,
      address2: address2,
      phone: parseInt(phone),
      typeId: typeId,
      rol: rol,
    };
    updates["users/USR_" + id] = userData;
    reference.update(updates);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //Create user
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="register">
      <div className="register__container">
        <Link to="/">
          <img className="register__logo" src={logo} alt="logo" />
        </Link>
        <h1>Crear Cuenta</h1>
        <div className="register__info">
          <form>
            <h5 className="register__infoLabel">Tu nombre</h5>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
            ></input>
            <h5 className="register__infoLabel">Tu Apellido</h5>
            <input
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              type="text"
            ></input>
            <h5 className="register__infoLabel">tipo de identificación</h5>
            <select
              value={typeId}
              onChange={(event) => setTypeId(event.target.value)}
            >
              <option>Selecciona un tipo de documento</option>
              <option>Cédula de ciudadanía</option>
              <option>Cédula de extrangería</option>
              <option>Tarjerta de identidad</option>
              <option>Carné institucional</option>
            </select>
            <h5 className="register__infoLabel">Tu identificación</h5>
            <input
              value={id}
              onChange={(event) => setId(event.target.value)}
              type="number"
            ></input>
            <h5 className="register__infoLabel">E-mail</h5>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
            ></input>
            <h5 className="register__infoLabel">Dirección principal</h5>
            <input
              value={address1}
              onChange={(event) => setAddress1(event.target.value)}
              type="text"
            ></input>
            <h5 className="register__infoLabel">
              Apartamento/Torre/Oficina/Casa
            </h5>
            <input
              value={address2}
              onChange={(event) => setAddress2(event.target.value)}
              type="text"
            ></input>
            <h5 className="register__infoLabel">Teléfono celular</h5>
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              type="text"
            ></input>
            <h5 className="register__infoLabel">Rol</h5>
            <select
              value={rol}
              onChange={(event) => setRol(event.target.value)}
            >
              <option>Selecciona un rol</option>
              <option>Estudiante</option>
              <option>Profesor</option>
              <option>Administrativo</option>
              <option>Enfermería</option>
              <option>Seguridad</option>
              <option>Contratista</option>
            </select>
            <h5 className="register__infoLabel">Contraseña</h5>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            ></input>
            <input type="hidden" value={id}></input>
            <button
              onClick={register}
              type="submit"
              className="register__Button"
            >
              Crear cuenta
            </button>
          </form>
          <p>
            Al crear una cuenta aceptas los terminos y condiciones de uso y
            venta, de coporación Sílaba.
          </p>
        </div>

        <div className="register__alreadyAccount">
          <p>¿Ya tienes una cuenta?</p>
          <Link className="register__links" to="/">
            <p className="register__loginLink">Inicia Sesión</p>
          </Link>
        </div>
      </div>

      <div className="register__divider">
        <p>Condiciones de uso</p>
        <p>Nota de privacidad</p>
        <p>Ayuda</p>
      </div>
    </div>
  );
}

export default Register;

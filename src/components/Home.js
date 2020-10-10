import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import HomeRol from './HomeRol';
import {useStateValue} from '../StateProvider'

function Home() {
  const [{userInfo}, dispatch] = useStateValue();
  console.log("USER INFO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ", userInfo);
  return (
    <div className="home">
      <section id="icon-boxes" class="icon-boxes home__menu">
        <HomeRol rol={userInfo.user_rol}/>
      </section>
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import perfil from "../assets/images/profile.png"
import { _MENU } from "../utils/types"

import { getItem } from "../localStorage";

const SideBar: React.FC<{menu: _MENU, actions: _MENU}> = (props) => {
  const [user, setUser] = useState("");
  const [marca, setMarca] = useState("Marca");
  const [imgPerfil, setImgPerfil] = useState(perfil);

  const [sideBar, setSideBar] = useState(false);

  const cliente = useSelector((state: any) => {
    return state.user;
  });

  useEffect(() => {
    setImgPerfil(perfil);
    setUser("Ismael")
    setMarca("Ideas");
    console.log(marca, imgPerfil, cliente, user);
  },[cliente])

  useEffect(() => {
    setSideBar(localStorage.sideBar);
  },[localStorage])

  return (
    <aside className={`side-nav ${localStorage.sideBar === "true" ? "display-any": ""}`}>
        <div className="main-menu-title">Menu</div>
        <div className="main-menu">
            <ul>
              {props.menu.map((el, index) => {
                return el.show === false ? null :
                  (
                  <li key={index}>
                    <NavLink to={el.link}>
                      <i className={`fa ${el.icon}`}></i> 
                      <span>{el.name}</span>                  
                    </NavLink>
                  </li>
                  )
                })
              }
            </ul>
        </div>
        <div className="main-menu-title">Actiones</div>
        <div className="main-menu">
            <ul>
            {props.actions.map((el, index) => {
                return el.show === false ? null : 
                  (
                  <li key={index}>
                    <NavLink to={el.link}>
                      <i className={`fa ${el.icon}`}></i> 
                      <span>{el.name}</span>                  
                    </NavLink>
                  </li>
                  )
                })
              }
            </ul>
        </div>
    </aside>
  );
};

export default SideBar;

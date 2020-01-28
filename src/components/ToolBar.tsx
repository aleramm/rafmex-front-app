import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// import progileImg from "../assets/images/profile.png";
import brandImg from "../assets/images/logos/brand.png";

import Spinner from "../components/Spinner";

import { logoutAccion } from "../redux/actions/loginActions";
import { userLoadAction } from "../redux/actions/userActions";

import { saveItem } from "../localStorage"

const ToolBar = () => {
  const [perfilMenu, setPerfilMenu] = useState(false);
  const [perfilMobile, setPerfilMobile] = useState(false);
  const [shortCuts, setShortCuts] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const [brand, setBrand] = useState("");
  const [logo, setLogo] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [rol, setRol] = useState("");

  const [logOut, setLogOut] = useState(false);
  const dispatch = useDispatch();

  const LoadUser = () => dispatch( userLoadAction() );

  const perfil = useSelector((state: any) => {
    return state.user;
  });

  useEffect(() => {
      LoadUser();
      if(perfil.perfil.user === undefined) {
          return;
      } else if(name === "" && rol === "" && brand === "") {
        setName(perfil.perfil.user.name);
        setPhoto(perfil.perfil.user.photo);
        setRol(perfil.perfil.employee.rol);
        setBrand(perfil.perfil.employee.brand);
        setLogo(perfil.perfil.employee.logo);
      }
  },[perfil.perfil.user])

  const showMenu = (type: string) => {
      switch (type) {
          case "menu":
              setPerfilMenu(!perfilMenu);
              setPerfilMobile(false);
              break;
          case "menuMobile":
              setPerfilMobile(!perfilMobile);
              setPerfilMenu(false);
              break;
          case "short": setShortCuts(!shortCuts); break;
          case "side": 
            setSideBar(!sideBar);
            saveItem("sideBar", sideBar);
            break;
      }
  }

  const logOutPDV = () => {
    dispatch( logoutAccion() ); 
    setLogOut(true);
  } 

  if(logOut){
      window.location.href = "/";
  }

  if(perfil.loading){
      return (
          <Spinner color="red" />
      );
  }


  return (
<div className="top-nav">
<div className="top-nav-box">
    <div className="side-nav-mobile" onClick={e => showMenu("side")}><i className="fa fa-bars"></i></div>
    <div className="logo-wrapper">
        <div className="logo-box">
            <img className="custom-logo" alt={brand} src={logo} />
            <a href="#">
                <div className="logo-title cutom-brad-title">{brand}</div>
            </a>
        </div>
    </div>
    <div className="top-nav-content">
        <div className="top-nav-box">
            <div className="quick-link">
                <div className="link-icon"><i className="fa fa-bars" onClick={e => showMenu("short")}></i></div>
                <ul className={`animated bounceInUp ${shortCuts ? "display-any" : ""}`}>
                    <li><a href="#"><i className="fa fa-bars"></i> Mailbox</a></li>
                    <li><a href="#"><i className="fa fa-map-marker"></i> Calendar</a></li>
                    <li><a href="#"><i className="fa fa-suitcase"></i> Map</a></li>
                    <li><a href="#"><i className="fa fa-signal"></i> Trainning</a></li>
                    <li><a href="#"><i className="fa fa-paper-plane"></i> Photos</a></li>
                    <li><a href="#"><i className="fa fa-map-o"></i> Timeline</a></li>
                </ul>
            </div>
            <div className="global-search">
                <form className="form-inline">
                    <button className="btn btn-primary" type="submit"> <i className="fa fa-search"></i></button>
                    <input className="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Search projects..." type="text" />
                </form>
            </div>
            <div className="top-notification">
                <div className="notification-icon">
                    <i className="fa fa-envelope-open"></i>
                </div>
                <div className="notification-icon">
                    <div className="notification-badge bounceInDown animated timer" data-from="0" data-to="21">21</div>
                    <i className="fa fa-comments"></i>
                    <div className="notification-wrapper animated bounceInUp">
                        <div className="notification-header">Notifications <span className="notification-count">3</span></div>
                        <div className="notification-body">
                            <a className="notification-list" href="#">
                                <div className="notification-image">
                                </div>
                                <div className="notification-content">
                                    <div className="notification-text"><strong>Mark</strong> sent you a message</div>
                                    <div className="notification-time">1 minutes ago</div>
                                </div>
                            </a>
                            <a className="notification-list" href="#">
                                <div className="notification-image">
                                </div>
                                <div className="notification-content">
                                    <div className="notification-text"><strong>Lisa</strong> sent you a message</div>
                                    <div className="notification-time">1 minutes ago</div>
                                </div>
                            </a>
                        </div>
                        <div className="notification-footer">
                            <a href="#">See all notifications</a>
                        </div>
                    </div>
                </div>
                <div className="notification-icon">
                    <div className="notification-badge bounceInDown animated timer" data-from="0" data-to="3">3</div>
                    <i className="fa fa-bell"></i>
                    <div className="notification-wrapper animated bounceInUp">
                        <div className="notification-header">Notifications <span className="notification-count">3</span></div>
                        <div className="notification-body">
                            <a className="notification-list" href="#">
                                <div className="notification-image">
                                </div>
                                <div className="notification-content">
                                    <div className="notification-text"><strong>Mark</strong> sent you a email</div>
                                    <div className="notification-time">1 minutes ago</div>
                                </div>
                            </a>
                            <a className="notification-list" href="#">
                                <div className="notification-image">
                                </div>
                                <div className="notification-content">
                                    <div className="notification-text"><strong>Lisa</strong> sent you a email</div>
                                    <div className="notification-time">1 minutes ago</div>
                                </div>
                            </a>
                            <a className="notification-list" href="#">
                                <div className="notification-image">
                                </div>
                                <div className="notification-content">
                                    <div className="notification-text"><strong>Parker</strong> sent you a email</div>
                                    <div className="notification-time">1 minutes ago</div>
                                </div>
                            </a>
                            <a className="notification-list" href="#">
                                <div className="notification-image">
                                </div>
                                <div className="notification-content">
                                    <div className="notification-text"><strong>Sophie</strong> sent you a email</div>
                                    <div className="notification-time">1 minutes ago</div>
                                </div>
                            </a>
                            <a className="notification-list" href="#">
                                <div className="notification-image">
                                </div>
                                <div className="notification-content">
                                    <div className="notification-text"><strong>Sophie</strong> sent you a email</div>
                                    <div className="notification-time">1 minutes ago</div>
                                </div>
                            </a>
                            <a className="notification-list" href="#">
                                <div className="notification-image">
                                </div>
                                <div className="notification-content">
                                    <div className="notification-text"><strong>Sophie</strong> sent you a email</div>
                                    <div className="notification-time">1 minutes ago</div>
                                </div>
                            </a>
                        </div>
                        <div className="notification-footer">
                            <a href="#">See all notifications</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`user-top-profile ${perfilMobile ? "display-any" : ""}`} onClick={e => showMenu("menu")}>
                <div className="user-image">
                    <div className="user-on"></div>
                    <img alt="pongo" src={photo} />
                </div>
                <div className="clear">
                    <div className="user-name">{name}</div>
                    <div className="user-group">{rol}</div>
                    <ul className={`user-top-menu animated bounceInUp ${perfilMenu ? "display-any" : ""} ${perfilMobile ? "display-any" : ""}`}>
                        <li><a href="#">Profile <div className="badge badge-yellow pull-right">2</div></a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="#">Change Password</a></li>
                        <li onClick={logOutPDV}><a href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="profile-nav-mobile" onClick={e => showMenu("menuMobile")}><i className="fa fa-cog"></i></div>
</div>
</div>
  );
};

export default ToolBar;

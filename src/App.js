import React, { useState } from "react";
//importar componentes aqui:
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Bio from "./Components/Bio/Bio";
import Timeline from "./Components/Timeline/Timeline";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import "./App.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/SchoolRounded";
import LocationCityIcon from "@material-ui/icons/LocationCityRounded";

const app = () => {
  const [eventoState, setEventoState] = useState({
    eventos: [
      {
        id: 1,
        icone: <LocationCityIcon />,
        ano: "2010 - 2011",
        titulo: "Teste1",
        texto: "Lorem ipsum1",
        cor: { background: "rgb(249, 149, 219)", color: "#fff" }
      },
      {
        id: 2,
        icone: <WorkIcon />,
        ano: "2011 - 2013",
        titulo: "Teste2",
        texto: "Lorem ipsum2",
        cor: { background: "rgb(33, 150, 243)", color: "#fff" }
      },
      {
        id: 3,
        icone: <SchoolIcon />,
        ano: "2013 - Present",
        titulo: "Teste3",
        texto: "Lorem ipsum3",
        cor: { background: "rgb(33, 150, 243)", color: "#fff" }
      }
    ]
  });

  const [modalState, setModalState] = useState({
    modalShow: false
  });

  const handlerModal = () => {
    setModalState({
      ...modalState,
      modalShow: !modalState.modalShow
    });
  };

  return (
    <div>
      <Header />
      <Navbar />
      <Bio />
      <Timeline eventos={eventoState.eventos} />
      <Projects />
      <Footer />
    </div>
  );
};

export default app;

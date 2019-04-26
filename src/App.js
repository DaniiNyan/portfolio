import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Bio from "./Components/Bio/Bio";
import Timeline from "./Components/Timeline/Timeline";
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
        ano: "2020 — Futuro",
        titulo: "Metas",
        texto: "Morar sozinha, arrumar um emprego fixo",
        cor: { background: "#fff", color: "#000" }
      },
      {
        id: 2,
        icone: <WorkIcon />,
        ano: "2019 — Presente",
        titulo: "Aceleradora Ágil",
        texto:
          "Estágio de desenvolvimento com a Thought Works e o Centro de Inovação da PUCRS",
        cor: { background: "#fff", color: "#000" }
      },
      {
        id: 3,
        icone: <SchoolIcon />,
        ano: "2018",
        titulo: "Fundatec",
        texto: "Ingresso no curso Técnico em Informática",
        cor: { background: "#fff", color: "#000" }
      },
      {
        id: 4,
        icone: <LocationCityIcon />,
        ano: "2017",
        titulo: "Mudança",
        texto: "De São Paulo para Porto Alegre",
        cor: { background: "#fff", color: "#000" }
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

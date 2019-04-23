import React, { useState } from "react";
//importar componentes aqui:
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Bio from "./Components/Bio/Bio";
import Timeline from "./Components/Timeline/Timeline";
import WorkIcon from "@material-ui/icons/Work";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import "./App.css";





const app = () => {
  const [eventoState, setEventoState] = useState({
    eventos: [
      { id: 1, icone: <WorkIcon />, ano:"2010 - 2011", titulo: "Teste1", texto: "Lorem ipsum1" },
      { id: 2, icone: <WorkIcon />, ano:"2011 - 2013", titulo: "Teste2", texto: "Lorem ipsum2" },
      { id: 3, icone: <WorkIcon />, ano:"2013 - Present", titulo: "Teste3", texto: "Lorem ipsum3" }
    ]
  });

  const [modalState, setModalState] = useState ({
    modalShow: false
  });

  const handlerModal = () => {
    setModalState({
      ...modalState,
      modalShow: !modalState.modalShow
    })
  }

  return (
    <div>
      <Header />
      <Navbar />
      <Bio />
            
      <Timeline eventos={eventoState.eventos} />
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export default app;

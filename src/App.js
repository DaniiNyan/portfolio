import React, { useState } from "react";
//importar componentes aqui:
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Bio from "./Components/Bio/Bio";
import Timeline from "./Components/Timeline/Timeline";
import WorkIcon from "@material-ui/icons/Work";
// import Projects from "./Components/Projects/Projects";
// import Contact from "./Components/Contact/Contact";
// import Footer from "./Components/Footer/Footer";
//import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const app = () => {
  const [eventoState, setEventoState] = useState({
    eventos: [
      { id: 1, icone: <WorkIcon />, ano:"2010 - 2011", titulo: "Teste", texto: "Lorem ipsum" },
      { id: 2, icone: <WorkIcon />, ano:"2011 - 2013", titulo: "Teste", texto: "Lorem ipsum" },
      { id: 3, icone: <WorkIcon />, ano:"2013 - Present", titulo: "Teste", texto: "Lorem ipsum" }
    ]
  });

  console.log(WorkIcon);
  const renderTimeline = () => {
    return (
      <div className="geral">
        {eventoState.eventos.map(evento => {
          return (
            <Timeline
              key={evento.id}
              ano={evento.ano}
              icon={evento.icone}
              titulo={evento.titulo}
              texto={evento.texto}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <Header />
      <Navbar />
      <Bio />
      {renderTimeline()}
      {/* <Projects></Projects> */}
      {/* <Contact></Contact> */}
      {/* <Footer></Footer> */}
    </div>
  );
};

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default app;

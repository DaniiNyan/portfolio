import React, { useState } from "react";
import FooterStyle from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const footer = props => {
    const [redesState, setRedesState] = useState({
        redes: [
        { icon: faGithub, url: "https://github.com/DaniiNyan" },
        { icon: faLinkedinIn, url: "https://github.com/DaniiNyan" },
        { icon: faFacebookF, url: "https://github.com/DaniiNyan" }
      ]
    });


  const renderRedes = () => (
      <div>
        {redesState.redes.map(redeSocial => (
            <a href={redeSocial.url} className={FooterStyle.icone}>
              <FontAwesomeIcon icon={redeSocial.icon} size="2x" color="white" />
            </a>
          )
        )}
      </div>
    );

  return (
    <div>
      <footer className={FooterStyle.rodape}>
        <div className={FooterStyle.listaIcones}>
        {renderRedes()}
        </div>
      </footer>
    </div>
  );
};

export default footer;

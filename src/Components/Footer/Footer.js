import React from "react";
import FooterStyle from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const footer = props => {

    return (
        <div>
            <footer className={FooterStyle.rodape}>
                <div>
                    <ul className={FooterStyle.listaIcones}>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </ul>
                </div>

                Desenvolvido por @daniinyan
            </footer>

        </div>
    )
}

export default footer;
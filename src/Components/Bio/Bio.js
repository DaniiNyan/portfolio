import React, { useState } from "react";
import BioStyle from "./Bio.module.css";
import foto from "./foto.jpg";
import Image from "react-bootstrap/Image";

import ModalContact from "./ModalContact/ModalContact";
import Button from "react-bootstrap/Button";
import ModalStyle from "./ModalContact/ModalContact.module.css"

const bio = props => {
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
    <div className={[BioStyle.Bio, "centralizaTexto"].join(" ")}>
      <h1>Biografia</h1>
      <div className={BioStyle.container}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          placerat, velit in suscipit accumsan, orci ante molestie arcu, a
          vehicula diam nisi sed magna. Nulla ac augue turpis. Phasellus rutrum,
          libero a rhoncus dignissim, enim odio suscipit ex, sed hendrerit nulla
          diam sed ex. Mauris sed maximus quam. Vestibulum congue lacus ac erat
          egestas, quis consectetur nisi tincidunt. Vestibulum volutpat faucibus
          orci at fermentum. Sed pulvinar nulla ornare posuere pulvinar.
          Maecenas luctus est ac lacinia dapibus.
        </p>
        <div className={BioStyle.centralizaImagem}>
          <Image
            src={foto}
            alt="Foto"
            className={BioStyle.minhaFoto}
            roundedCircle
          />
        </div>
        <ModalContact show={modalState.modalShow} onHide={handlerModal} />
        <Button onClick={handlerModal} className={ModalStyle.botaoContato}>
          Contato
        </Button>
      </div>
    </div>
  );
};

export default bio;

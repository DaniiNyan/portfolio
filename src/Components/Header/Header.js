import React from "react";
import HeaderStyle from "./Header.module.css";

const header = props => {
  return (
    <header className={HeaderStyle.Header}>
      <div className={HeaderStyle.layer}>
        <h1 className={HeaderStyle.titulo}>Daniela Araújo</h1>
      </div>
    </header>
  );
};

export default header;

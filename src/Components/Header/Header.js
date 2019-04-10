import React from 'react';
import HeaderStyle from './Header.module.css'

const header = props => {

    return (
        <header className={HeaderStyle.Header}>
            <h1 className={HeaderStyle.titulo}>Daniela Araújo</h1>
            <h2 className={HeaderStyle.subtitulo}>testando;</h2>
        </header>
    )
};

export default header;

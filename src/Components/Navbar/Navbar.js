import React from 'react';
import Nav from 'react-bootstrap/Nav'
import NavbarStyle from './Navbar.module.css'

const navbar = props => {

    return (
        <div className={NavbarStyle.navbar}>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/experiencia">EXPERIÊNCIA</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/projetos">PROJETOS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contato">CONTATO</Nav.Link>
                </Nav.Item>            
            </Nav>
        </div>
    )
}

export default navbar;
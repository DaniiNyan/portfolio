import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import NavbarStyle from "./Navbar.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const navbar = props => {
  const [menuState, setMenuState] = useState({
    menus: [
      { id: 1, nome: "BIOGRAFIA", anchor: "#bio" },
      { id: 2, nome: "TIMELINE", anchor: "#timeline" },
      { id: 3, nome: "PROJECTS", anchor: "#projects" }
    ]
  });

  const renderMenu = () =>
    menuState.menus.map(menu => (
      <Nav.Item>
        <Nav.Link>
          <AnchorLink href={menu.anchor}>{menu.nome}</AnchorLink>
        </Nav.Link>
      </Nav.Item>
    ));

  return (
    <div className={NavbarStyle.navbar}>
      <Nav className="justify-content-center" activeKey="/home">
        {renderMenu()}
      </Nav>
    </div>
  );
};

export default navbar;

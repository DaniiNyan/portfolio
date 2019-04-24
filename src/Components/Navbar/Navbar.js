import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import NavbarStyle from "./Navbar.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const navbar = props => {
  const [menuState, setMenuState] = useState({
    menus: [
      { id: 1, nome: "BIOGRAFIA", anchor: "#bio" },
      { id: 1, nome: "BIOGRAFIA", anchor: "#bio" }
    ]
  });

  const renderMenu = () => menuState.menus.map(menu => (
        <Nav.Link>
            <AnchorLink href={menu.anchor}>{menu.nome}</AnchorLink>
        </Nav.Link>
      )
    )

  return (
    <div className={NavbarStyle.navbar}>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          {renderMenu()}
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default navbar;

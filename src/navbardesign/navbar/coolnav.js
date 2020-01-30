import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { FaYoutube } from "react-icons/fa";

import styled from "styled-components";

const Styles = styled.div`
  /* HIDE AND SHOW NAV DISPLAY ON SIZE CHANGE */

  .hideburger {
    display: none; /* Hide on Desktop */
  }

  @media (max-width: 600px) {
    .hideburger {
      display: block; /* Show on Mobile */
    }
  }

  /*HIDE NAV LINKS ON MOBILE  */

  @media (max-width: 600px) {
    .hideLinks {
      display: none;
    }
  }

  /*NAV DESIGN */

  .navfont {
    font-family: "Alata", sans-serif;
  }

  .mr-auto {
    letter-spacing: 0.5em;
  }

  @media (max-width: 703px) {
    .mr-auto {
      letter-spacing: 0.2em;
    }
  }

  .navlinks {
    text-decoration: none;
  }
`;

const Coolnav = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Styles>
        <div className="navfont">
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">
              BEATS BY FRANKS
            </NavbarBrand>
            <div className="hideLinks">
              <div className="text-right">
                <Nav className="navlinks">
                  <NavLink
                    className="text-danger"
                    target="_blank"
                    href="https://www.youtube.com/channel/UCIqjyQTCGJ67GRxarEuRJIA?"
                  >
                    YouTube <FaYoutube />
                  </NavLink>
                </Nav>
              </div>
            </div>

            <div className="hideburger">
              <NavbarToggler onClick={toggleNavbar} className="mr-2" />
              <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink
                      className="text-danger"
                      target="_blank"
                      href="https://www.youtube.com/channel/UCIqjyQTCGJ67GRxarEuRJIA?"
                    >
                      YoutTube <FaYoutube />
                    </NavLink>{" "}
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </Navbar>
        </div>
      </Styles>
    </div>
  );
};

export default Coolnav;

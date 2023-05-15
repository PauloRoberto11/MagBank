import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormControl } from "react-bootstrap";

import "./Navigation.scss";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ handleCreateAccount, logged, auth }) => {
 const navigate = useNavigate();
  const handleClick = () => {
    auth.logout(navigate('/'));
  }

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            height={30}
            className="d-inline-block align-top"
            alt="MagBanck logo"
          />
        </Navbar.Brand>

        {logged && 
         <>
         <Form>
          <div className='navbar__search-group d-none d-lg-flex'>
            <FormControl type='text' placeholder='O que você Procura?' />
            <Button variant='link'>
              <FontAwesomeIcon icon={faSearch} color='#fff' />
            </Button>
          </div>
         </Form>

         <Button variant='outline-light' onClick={handleClick}> Sair </Button>
         </>
        }
        {!logged && (
          <>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScrol
              >
                <Nav.Link href="#action1">Cartão</Nav.Link>
                <Nav.Link href="#action2">Quem somos</Nav.Link>
                <Nav.Link href="#action3">FAQ</Nav.Link>
              </Nav>

              <ButtonGroup>
                <Button variant="outline-light">
                  <NavDropdown
                    title="Acessar minha conta"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item
                      className="dropDownColor"
                      as={Link}
                      to="/Login"
                    >
                      Pessoa Física
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropDownColor"
                      as={Link}
                      to="/Login"
                    >
                      Pessoa Jurídica
                    </NavDropdown.Item>
                  </NavDropdown>
                </Button>

                <Button
                  variant="outline-light"
                  onClick={() => handleCreateAccount()}
                >
                  Abra sua conta
                </Button>
              </ButtonGroup>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};
export default Navigation;

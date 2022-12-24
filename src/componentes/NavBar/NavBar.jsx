import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { CartWiget} from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Sobre Nosotros</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Alimentos</Nav.Link>
                            <Nav.Link href="#pricing">Juguetes</Nav.Link>
                            <NavDropdown title="Lista" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Gatos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Perros
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Otros</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Contactanos
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {/*<Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>*/}
                            <CartWiget />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           

        </>
    )
}
export default NavBar
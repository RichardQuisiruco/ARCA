import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { CartWiget } from "../CartWidget/CartWidget"
import { Contenedor } from "../Contenedor/Contenedor"
const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <NavLink to="/">Sobre Nosotros</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className={({ isActive }) => isActive ? 'btn-btn-success' : 'btn-btn-dark'} to="/categoria/alimentos">Alimentos</NavLink>
                            <NavLink to="/categoria/juguetes">Juguetes</NavLink>
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

                            <Link to='/card'>Ir al carrito</Link>

                            <CartWiget />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}
export default NavBar
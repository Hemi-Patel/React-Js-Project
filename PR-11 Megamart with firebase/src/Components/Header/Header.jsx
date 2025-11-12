import { Container, InputGroup, Nav, Navbar } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import './Header.css';
import { CiHeart, CiLocationOn, CiSearch, CiUser } from "react-icons/ci";
import { IoBagAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom"; // Use react-router-dom

const Header = () => {
    return (
        <>
            <Container>
                {/* Top Navbar */}
                <Navbar className="d-flex justify-content-between align-items-center py-2">
                    <div className="col-md-6">
                        <Navbar.Brand href="/">
                            <img src="/src/assets/images/logo.png" height={35} width={160} alt="logo" />
                        </Navbar.Brand>
                    </div>

                    <div className="col-md-6 d-flex justify-content-end align-items-center">

                        <div className="col-md-6">
                            <InputGroup className="d-flex justify-content-center align-items-center border border-1 rounded-5 border-black">
                                <Form.Control className="border-0 bg-transparent shadow-none" placeholder="Search:" />
                                <div className="Search_Icon fs-4">
                                    <CiSearch />
                                </div>
                            </InputGroup>
                        </div>


                        <div className="d-flex align-items-center gap-3 ms-3">
                            <CiLocationOn className="fs-4" />
                            <CiUser className="fs-4" />
                            <CiHeart className="fs-4" />
                            <IoBagAddOutline className="fs-4" />

                            <Link className="btn btn-danger" to="/add">Add</Link>
                        </div>
                    </div>
                </Navbar>

                {/* Main Menu */}

            </Container>
            <Navbar expand="lg" className="bg-body-tertiary mt-2">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="text-center">
                        <ul className="menu-bar d-flex gap-5">
                            <li >
                                <Link to="/menclothes">Men</Link>
                                <ul className="submenu">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex">
                                            <div className="top-wear">
                                                <li><Link to="" >T-shirt</Link></li>
                                                <li><Link to="">Shirts</Link></li>
                                                <li><Link to="">Jeans</Link></li>
                                                <li><Link to="">Jackets</Link></li>
                                                <li><Link to="">Accessories</Link></li>
                                            </div>
                                        </div>
                                        <div className="image">
                                            <img src="src/assets/images/men.jpg" alt="" height={300} />
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li><Link to="/womenclothes">Women</Link>
                                <ul className="submenu">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex">
                                            <div className="top-wear">
                                                <li><Link to="" >T-shirt</Link></li>
                                                <li><Link to="">Shirts</Link></li>
                                                <li><Link to="">Jeans</Link></li>
                                                <li><Link to="">Jackets</Link></li>
                                                <li><Link to="">Accessories</Link></li>
                                            </div>
                                        </div>
                                        <div className="image">
                                            <img src="src/assets/images/women.jpg" alt="" height={300} />
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li><Link to="">Kids</Link></li>
                            <li><Link to="">Footwear</Link></li>
                            <li><Link to="">Innerwear</Link></li>
                            <li><Link to="">Accessories</Link></li>
                            <li><Link to="">Brand</Link></li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;

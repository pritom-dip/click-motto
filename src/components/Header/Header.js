import { Link } from "react-router-dom";
import styles from './Header.module.css';
import siteLogo from '../../images/icons/Logo.svg'
import { useState } from "react";

const Header = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleShowHideMobileMenu = () => {
        setShowMobileMenu(props => !props);
    }

    return (
        <div className="mx-5">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid px-0">
                    <Link className="navbar-brand" to="/">
                        <img className="img-fluid" src={siteLogo} alt="logo" />
                        <span className=" px-2 uppercase">
                            <strong>Click Motto</strong>
                        </span>
                    </Link>

                    <button onClick={handleShowHideMobileMenu} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${showMobileMenu ? 'show' : ''}`} id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ justifyContent: 'flex-end', alignItems: 'center', 'width': '88%' }}>
                            <li className={`nav-item ${styles.nav_item}`}>
                                <Link to="/" className="nav-link ">Explore</Link>
                            </li>

                            <li className={`nav-item ${styles.nav_item}`}>
                                <Link to="/" className="nav-link">Discover</Link>
                            </li>

                            <li className={`nav-item ${styles.nav_item}`}>
                                <Link to="/" className="nav-link">For Professionals</Link>
                            </li>

                            <li className={`nav-item ${styles.nav_item}`}>
                                <Link to="/deals" className="nav-link">Submit photos</Link>
                            </li>

                        </ul>
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                            <li className={`nav-item ${styles.nav_item}`}>
                                <Link to="/" className="nav-link">Login</Link>
                            </li>

                            <li className={`nav-item ${styles.nav_item}`}>
                                <Link to="/" className="nav-link">Join Free</Link>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;
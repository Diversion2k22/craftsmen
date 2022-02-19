import { MenuOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import logo from '../assets/logo.png'
import {ThemeContext,themes} from '../Context/ThemeContext';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [darkMode, setDarkMode] = React.useState(true);
    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
                <Link className="navbar-brand" to={`/`}><img style={{width:'3rem'}} src={logo} alt="logo" /></Link>
                <button className="navbar-toggler bg-secondary shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <MenuOutlined />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item">
                            <ThemeContext.Consumer>
                            {({ changeTheme }) => (
                                <button
                                    className='btn shadow-none'
                                    color="link"
                                    onClick={() => {
                                    setDarkMode(!darkMode);
                                    changeTheme(darkMode ? themes.light : themes.dark);
                                    }}
                                >
                                    <i className={darkMode ? 'bi fa-2x bi-moon text-secondary' : 'bi fa-2x bi-sun text-warning'}></i>
                                </button>
                            )}
                            </ThemeContext.Consumer>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to={`/#`}><ShoppingCartOutlined /></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/register`}>REGISTER</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-nowrap" to={`/login`} aria-disabled="true">SIGN IN</Link>
                        </li>
                    </ul>
                    <form className='d-flex align-items-center'>
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <div className='mx-2'>
                        <div id="google_translate_element"></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

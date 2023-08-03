import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import withAuth from './withAuth';
import logo from '../logo.svg';
import DarkToggle from './DarkToggle/DarkToggle';
import { NavLink } from 'react-router-dom';

function Header({ loggedInUser, setLoggedInUser }) {
    const { theme } = useContext(ThemeContext);

    return (
        <nav className={
            theme === 'light'
                ? 'navbar navbar-light navbar-expand-lg bg-light'
                : 'navbar navbar-dark navbar-expand-lg bg-dark'}>
            <div className='container'>
                <a className='navbar-brand d-flex align-items-center' href='#/'>
                    <button className='navbar-toggler me-2' type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo02' aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <img src={logo} alt='Logo' width='80' className='d-none d-lg-block' />
                    <h4 className={theme === 'light'
                        ? 'header-title mb-0'
                        : 'header-title text-info me-5 mb-0'}
                    >MyApp</h4>
                </a>
                <div className='mx-5 d-flex align-items-center '>
                    <DarkToggle />
                </div>
                <div className='collapse navbar-collapse' id='navbarTogglerDemo02' >
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink
                                className='nav-link'
                                activeClassName='active'
                                to='/'>
                                Home
                            </NavLink >
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                className='nav-link'
                                activeClassName='active'
                                to='/star-game'>
                                Star Game
                            </NavLink >
                        </li>
                    </ul>
                    <div className={theme === 'light' ? '' : 'text-info'}>
                        {loggedInUser && loggedInUser.length > 0 ? (
                            <div>
                                <span>Logged in as {loggedInUser} </span>
                                <button
                                    className='btn btn-secondary ms-1'
                                    onClick={() => {
                                        setLoggedInUser('');
                                    }}
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <button
                                className='btn btn-secondary ms-5'
                                onClick={(e) => {
                                    e.preventDefault();
                                    const username = window.prompt('Enter Login name:', '');
                                    setLoggedInUser(username);
                                }}
                            >
                                login
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default withAuth(Header);
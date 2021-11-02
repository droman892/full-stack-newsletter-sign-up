import React, {useEffect} from 'react';
import './Nav.css';
import {Link} from "react-router-dom";

import M from "materialize-css/dist/js/materialize.min.js";

const Nav = () => {

    useEffect(() => {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }, []);

    return (
        <header>
            <nav>
                <div class="nav-wrapper">
                    <div className='container'>
                        <Link to='/' class="brand-logo">REI-DR, Inc.</Link>
                
                        <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        
                        <ul class="right hide-on-med-and-down">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/solutions'>Solutions</Link>
                            </li>
                            <li>
                                <Link to='/press'>Press</Link>
                            </li>
                            <li>
                                <Link to='/careers'>Careers</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <ul id="slide-out" class="sidenav mobile">
                <li>
                    <Link to='/'>
                        <span className='sidenav-text'>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        <span className='sidenav-text'>About</span>
                    </Link>
                </li>
                <li>
                    <Link to='/solutions'>
                        <span className='sidenav-text'>Solutions</span>
                    </Link>
                </li>
                <li>
                    <Link to='/press'>
                        <span className='sidenav-text'>Press</span>
                    </Link>
                </li>
                <li>
                    <Link to='/careers'>
                        <span className='sidenav-text'>Careers</span>
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        <span className='sidenav-text'>Contact</span>
                    </Link>
                </li>
            </ul>

        </header>
    )
}

export default Nav;
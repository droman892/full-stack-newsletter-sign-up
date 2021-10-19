import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {

    return (
        <div>
            <nav>
                <div class="nav-wrapper">
                    <Link to='/' class="brand-logo">REI-DR Enterprises</Link>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
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
            </nav>

            <ul class="sidenav" id="mobile-demo">
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
    )
}

export default Nav;
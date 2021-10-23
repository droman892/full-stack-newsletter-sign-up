import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    
    return (
        <nav>
            <div class="nav-wrapper purple darken-4">
                <div className='container'>
                    <Link to='/home' class="brand-logo">DR Enterprises</Link>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    
                    <ul class="right hide-on-med-and-down">
                        <li>
                            <Link to='/home'>Home</Link>
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
    )
}

export default Nav;
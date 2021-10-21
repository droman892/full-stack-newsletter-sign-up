import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import M from 'materialize-css/dist/js/materialize.min.js';

const Nav = () => {

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
      });
    });
    

    return (
        <header>
            <nav>
                <div class="nav-wrapper purple darken-4">
                    <div className='container'>
                        <Link to='/' class="brand-logo">DR Enterprises</Link>
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
        </header>
    )
}

export default Nav;
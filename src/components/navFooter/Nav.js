import React, {Component} from 'react';

const Nav = () => {

    return (
        <div>
            <nav>
                <div class="nav-wrapper">
                    <a href="#!" class="brand-logo">REI-DR Enterprises</a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="#!">About</a></li>
                        <li><a href="#!">Solutions</a></li>
                        <li><a href="#!">Press</a></li>
                        <li><a href="#!">Careers</a></li>
                        <li><a href="#!">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <ul class="sidenav" id="mobile-demo">
                <li><a href="#!">About</a></li>
                <li><a href="#!">Solutions</a></li>
                <li><a href="#!">Press</a></li>
                <li><a href="#!">Why REI-DR</a></li>
                <li><a href="#!">Contact</a></li>
            </ul>
        </div>
        )
}
export default Nav;
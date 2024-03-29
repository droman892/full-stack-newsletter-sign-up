import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";

const Footer = () => {

    return (
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">REI-DR, Inc.</h5>
                <p class="grey-text text-lighten-4">Driven by purpose to empower families.  Curious about technology innovation for all.  Relentless with great customer experiences.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                {/* <h5 class="white-text">Possible Header</h5> */}
                <ul>
                  <li className='link'>
                    <Link to='/' class='grey-text text-lighten-3'>Home</Link>
                  </li>
                  <li className='link'>
                    <Link to='/about' class='grey-text text-lighten-3'>About</Link>
                  </li>
                  <li className='link'>
                      <Link to='/solutions' class='grey-text text-lighten-3'>Solutions</Link>
                  </li>
                  <li className='link'>
                      <Link to='/press' class='grey-text text-lighten-3'>Press</Link>
                  </li>
                  <li className='link'>
                      <Link to='/careers' class='grey-text text-lighten-3'>Careers</Link>
                  </li>
                  <li className='link'>
                      <Link to='/contact' class='grey-text text-lighten-3'>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class='footer-copyright pad'>
            <div class='container'>
              © 2021 REI-DR, Inc.
              <Link to='/privacy' class='grey-text text-lighten-4 privacy'>Privacy Statement</Link>
            </div>
          </div>
        </footer>
    )
}

export default Footer;
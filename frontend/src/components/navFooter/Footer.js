import React from 'react';

const Footer = () => {

    return (
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">REI-DR Enterprises</h5>
                <p class="grey-text text-lighten-4">Driven by purpose to empower families.  Curious about technology innovation for all.  Relentless with great customer experiences.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                {/* <h5 class="white-text"></h5> */}
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">About</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Solutions</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Press</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Careers</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2021 REI-DR Enterprises, Inc. All Rights Reserved.
            <a class="grey-text text-lighten-4 right" href="#!">Privacy Statement</a>
            </div>
          </div>
        </footer>
        )
}

export default Footer;
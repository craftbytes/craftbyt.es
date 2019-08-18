import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const navLinks = [
  // { to: '/', text: 'Home' },
  { to: '/about', text: 'About Us' },
  { to: '/services', text: 'Services' },
  { to: '/team', text: 'Team' },
  { to: '/contact', text: 'Contact Us' }
]

const Header = ({ siteTitle }) => (
  <div>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to='/' className="navbar-item is-size-4">
            {/* <span className="icon">
              <i className="fab fa-github"></i>
            </span> */}
            <span id="title">{siteTitle}</span>
          </Link>


          <span className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            {navLinks.map(({ to, text }) => {
              return (
                <Link
                  key={text}
                  to={to}
                  className="navbar-item"
                >
                  {text}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

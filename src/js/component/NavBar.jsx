import React from "react";

const NavBar = () => {
    return(
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" style={{display: 'flex', flexDirection: 'row'}}>
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" style={{display: 'flex'}} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" style={{display:'flex', float:'inline-end'}}  id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-10">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
    
};

export default NavBar;
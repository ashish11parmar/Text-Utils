import React from 'react';
// import { Link } from 'react-router-dom';

const Navbar = (param) => {
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${param.Mode} bg-${param.Mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{param.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href='#'>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{param.about}</a>
        </li>
      </ul>
      <div className="form-check form-switch mx-3">
  <input className="form-check-input" onClick={param.Darkmode} type="checkbox" id="flexSwitchCheckChecked"/>
  <label className={`form-check-label text-${param.Mode ==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label>
</div>
      <div className="form-check form-switch mx-3">
  <input className="form-check-input" onClick={param.greenmode} type="checkbox" id="flexSwitchCheckChecked"/>
  <label className={`form-check-label text-${param.Mode ==='light'?'#066209':'light'}`} htmlFor="flexSwitchCheckChecked">Enable green Mode</label>
</div>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    );
}

export default Navbar;



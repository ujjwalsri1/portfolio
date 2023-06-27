import './App.css';
import { BrowserRouter } from "react-router-dom";
function Navbar() {
    return (

<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
<a className="navbar-brand">Ujjwal Srivastava</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>  
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
    <li className="nav-item">
    {/*<a className="nav-link active" aria-current="page" href="/">Home</a>*/}
    <BrowserRouter>
    <a exact className="nav-link " href="/" >
                            Home
                        </a>
    </BrowserRouter>
    </li>
    <li className="nav-item">
    <BrowserRouter>
    <a exact className="nav-link " href="/skills">
                            Skills
                        </a>
    </BrowserRouter>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Links
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="https://www.linkedin.com/in/ujjwal-srivastava-657525239/">LinkedIn</a></li>
        <li><a className="dropdown-item" href="https://github.com/ujjwalsri1">Github</a></li>
        <li><a className="dropdown-item" href="https://ujjwalsri1.github.io/React_game/">Mini Game</a></li>
        
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="/Contact">Contact Us</a></li>
      </ul>
    </li>
    
  </ul>
</div>
</div>
</nav>
</>
);
};
export default Navbar;
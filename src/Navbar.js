import './App.css';
import { BrowserRouter,Link } from "react-router-dom";
function Navbar() {
    return (

<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
<li>
<label className="switch">
  <input type="checkbox" role="switch" id="flexSwitchCheckChecked" checked onClick={"myFunction()"} />  
      
  <span className=" slider round ">
  </span>
</label>
</li>

<li>
<BrowserRouter>
<Link className="navbar-brand">Ujjwal Srivastava</Link>
</BrowserRouter>
</li>

</ul>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
    <li className="nav-item">
    {/*<a className="nav-link active" aria-current="page" href="/">Home</a>*/}
    <BrowserRouter>
    <Link exact className="nav-link " onClick={() => {this.forceUpdate()}} to="/">
      
                            Home
                        </Link>
    </BrowserRouter>
    </li>
    <li className="nav-item">
    <BrowserRouter>
    <Link exact className="nav-link " onClick={() => {this.forceUpdate()}} to="/skills">
                            Skills
                        </Link>
    </BrowserRouter>
    </li>
    <li className="nav-item dropdown">
    <BrowserRouter>
      <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Links
      </Link>
      </BrowserRouter>
      <ul className="dropdown-menu">
      <BrowserRouter>
        <li><Link className="dropdown-item" to="https://www.linkedin.com/in/ujjwal-srivastava-657525239/">LinkedIn</Link></li>
        <li><Link className="dropdown-item" to="https://github.com/ujjwalsri1">Github</Link></li>
        <li><Link className="dropdown-item" to="https://ujjwalsri1.github.io/React_game/">Mini Game</Link></li>
        
        <li><hr className="dropdown-divider"/></li>
        <li><Link className="dropdown-item" onClick={() => {this.forceUpdate()}} to="/Contact">Contact Us</Link></li>
        </BrowserRouter>
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
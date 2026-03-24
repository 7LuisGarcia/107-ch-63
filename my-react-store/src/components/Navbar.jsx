import { Link } from 'react-router-dom'
import { useContext } from 'react';
import GlobalContext from '../state/globalContext';
import { IconShoppingCart } from '@tabler/icons-react';
import { IconHome } from '@tabler/icons-react';
import "./Navbar.css";

function Navbar(){
  const user = useContext(GlobalContext).user
  const cart = useContext(GlobalContext).cart

  function getTotalItems() {
    let sum = 0
    for(let i=0; i < cart.length; i++){
      sum = sum + cart [i].quantity
    }
    return sum
  }

  
  return(
    <nav className="navbar navbar-expand-lg bg-primary py-8" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <IconHome stroke={2} />
          Online Cleats Store
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>   
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/catalog"}>
                Catalog
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to={"/admin"}>
                Admin
              </Link>
            </li>
          </ul>

          <div className='d-flex align-items-center gap-2'>
            <div className='text-white'>{user.name}</div>

            <Link to={"/cart"} className='btn btn-outline-light'> 
              <IconShoppingCart/> Cart {getTotalItems()}
            </Link>
          </div>

        </div>
      </div>
    </nav>
  )
};

export default Navbar;
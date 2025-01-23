import {CartWidget} from './CartWidget'
import { SearchBar } from './SearchBar'
import { Link, NavLink } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Logo from "../assets/images/logo.svg"
import LoginRegisterIcon from "../assets/images/login-register.svg"
import DropdownIcon from "../assets/images/dropdown-icon.svg"

export const Header = () => {
  return (
      <header className='header'>
        <div className='search-container'>
        <Link to='/NucleoTechnology/Ofertas'>
          <img src={Logo} alt="NUCLEO Technology" className='logo-icon'/>
        </Link>
        <SearchBar page="Nucleo Technology"/>
        <div className="widgets">
        <Link>
          <img src={LoginRegisterIcon} alt="Iniciar Sesión / Registrarse" className='login-icon'/>
        </Link>
        <Link >
        <FavoriteBorderIcon color="pink" sx={{width: '2rem', height:'2rem'}}/>
        </Link>
        <Link>
          <CartWidget />
        </Link>        
        </div>
        </div>
        <nav className="links-container">
        <NavLink to="/NucleoTechnology/Ofertas" className={({isActive})=> isActive? "nav-link active":"nav-link"} id="nav-ofertas">Ofertas</NavLink>
        <NavLink to="/NucleoTechnology/Celulares" className={({isActive})=> isActive? "nav-link active":"nav-link"} id="nav-celulares">Celulares</NavLink>
        <NavLink to="/NucleoTechnology/Cargadores" className={({isActive})=> isActive? "nav-link active":"nav-link"} id="nav-cargadores">Cargadores</NavLink>
        <NavLink to="/NucleoTechnology/Sonido" className={({isActive})=> isActive? "nav-link active":"nav-link"} id="nav-sonido">Sonido</NavLink>
        <NavLink to="/NucleoTechnology/Iluminacion" className={({isActive})=> isActive? "nav-link active":"nav-link"} id="nav-iluminacion">Iluminación</NavLink>
        <NavLink to="/NucleoTechnology/Servicios" className={({isActive})=> isActive? "nav-link active":"nav-link"} id="nav-servicio">Servicios</NavLink>
        <Link id="nav-todos" className="nav-link">Todos<img src={DropdownIcon} alt="dropdown" className='dropdown-icon'/></Link>
        </nav>
      </header>
  )
}

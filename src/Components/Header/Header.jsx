import React from 'react';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (

        <header className="header">
           <Link to="/" className="header__logo">Star-<span>Wars</span></Link>
           <nav>
               <ul>
                   <li><NavLink to='/'>Люди</NavLink></li>
                   <li><NavLink to='/'>Планеты</NavLink></li>
                   <li><NavLink to='/'>Корабли</NavLink></li>
               </ul>
           </nav>
        </header>
    )
}

export default Header;
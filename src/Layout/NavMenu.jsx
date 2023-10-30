import React from 'react';
import styles from './NavMenu.module.css';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
  return (
    <nav>
        <ul className={styles.navList}>
            <li> <NavLink to = '/'  >Home</NavLink> </li>
            <li> <NavLink to = '/counter'   >Counter</NavLink></li>
            <li> <NavLink to = '/stopwatch'   >Stopwatch</NavLink></li>
            <li> <NavLink to = '/bmiCalculator'  >BMI-Calculator</NavLink></li>
            <li> <NavLink to = '/tictactoe'  >Tic-Tac-Toe</NavLink></li>
        </ul>
    </nav>
  )
}

export default NavMenu


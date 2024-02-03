import React from 'react';
import styles from './NavMenu.module.css';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
  return (
    <nav>
        <ul className={styles.navList}>
            <li> <NavLink to = '/'  className={({ isActive }) =>  isActive ? "active" : ""}  >Home</NavLink> </li>
            <li> <NavLink to = 'counter' className={({ isActive }) => isActive ? "active" : ""}    >Counter</NavLink></li>
            <li> <NavLink to = 'stopwatch' className={({ isActive }) => isActive ? "active" : ""}    >Stopwatch</NavLink></li>
            <li> <NavLink to = 'bmiCalculator' className={({ isActive }) => isActive ? "active" : ""}  >BMI-Calculator</NavLink></li>
            <li> <NavLink to = 'tictactoe' className={({ isActive }) => isActive ? "active" : ""}   >Tic-Tac-Toe</NavLink></li>
            <li> <NavLink to = 'step' className={({ isActive }) => isActive ? "active" : ""}   >Step</NavLink></li>
        </ul>
    </nav>
  )
}

export default NavMenu






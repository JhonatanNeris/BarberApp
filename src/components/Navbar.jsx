import React from 'react'

//css
import styles from "./Navbar.module.css"

//Router
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <div><h2>Barbearia</h2></div>
        <ul>
            <li><NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink></li>
            <li><NavLink to="/login" className={({isActive}) => (isActive ? styles.active : "")}>Login</NavLink></li>
            <li><NavLink to="/register" className={({isActive}) => (isActive ? styles.active : "")}>Cadastrar</NavLink></li>
            <li><NavLink to="/perfil" className={({isActive}) => (isActive ? styles.active : "")}>Perfil</NavLink></li>
            
        </ul>
    </nav>
  )
}

export default Navbar
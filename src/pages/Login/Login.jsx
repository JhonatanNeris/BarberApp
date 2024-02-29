import React, { useState } from 'react'

//Import do CSS
import styles from "./Login.module.css"

//Router
import { Link, useNavigate } from "react-router-dom"

//Hooks
import useAuth from '../../hooks/useAuth'

const Login = () => {
    //Desestruturação do hook   
    const { signin } = useAuth();

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        //Verificar se os campos estão preechidos
        if (!email || !password) {
            setError("*Preencha todos os campos")
            return
        }

        console.log(email, password)

        const res = signin(email, password)

        if(res){
            setError(res)
            return
        }

        setEmail("")    
        setPassword("")
        setError("")

        navigate("/")
    }

    return (
        <div onSubmit={handleSubmit} className='flex center margin-top'>
            <form className={styles.form}>
                <label>
                    <span>Email</span>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Digite seu email..' />
                </label>
                <label>
                    <span>Senha</span>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Digite sua senha...' />
                </label>
                {error && (
                    <div className='error'>
                        <p>{error}</p>
                    </div>
                )}
                <input className="btn" type="submit" value="Logar" />
                <div className={styles.redirect}>
                    <p>Não possui conta?</p>
                    <b><Link to="/register">Registre-se</Link></b>
                    

                </div>


            </form>
        </div>
    )
}

export default Login
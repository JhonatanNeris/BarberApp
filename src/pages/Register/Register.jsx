import React, {useState} from 'react'

//CSS
import styles from "./Register.module.css"

//Import dos hooks
import useAuth from '../../hooks/useAuth'

import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error , setError] = useState("")

    const {signup} = useAuth()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        //Verificar se os campos estão preechidos
        if(!email || !password || !confirmPassword){
            setError("*Preencha todos os campos")
            return
        }

        //Verificar senha
        if(password != confirmPassword){
            setError("As senhas precisam ser iguais!")
            return
        }

        const res = signup(email, password)

        if(res){
            setError(res);
            return;
        }

        console.log(email, password)
        console.log("Usuário cadastrado com sucesso!")

        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setError("")

        navigate("/")
    }
    
  return (
    <div onSubmit={handleSubmit} className='flex center margin-top'>
        <form className={styles.form}>
            <label>
                <span>Email</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>                
            </label>
            <label>
                <span>Senha</span>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>                
            </label>
            <label>
                <span>Confirme a sua senha</span>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>                
            </label>
            {error && (
                <div className='error'>
                    <p>{error}</p>
                </div>
            )}
            <input className="btn" type="submit" value="Cadastrar" />
            
        </form>
    </div>
  )
}

export default Register
import React, {useState} from 'react'
import axios from 'axios'
//axios.defaults.withCredentials = true;


const Login = props => {
    const [user, setUser] = useState({username: '', password: ''})

    const handleSubmit = event => {
        event.preventDefault()
        axios.post('http://localhost:3300/api/auth/login', user)
        .then(res => {console.log(res)
            localStorage.setItem('token', res.data.token)
        props.history.push('/jokes')
        })
        .catch(err => console.log('error from post',err))

    }

    const handleChange = event => {
        setUser({
            ...user,
            [event.target.name]:event.target.value
        })
    }

    return (
       
        <form className='register' onSubmit ={event => handleSubmit(event)}>
            <h3>Login</h3>
            <label>Username</label>
            <input 
            name="username"
            type= 'text'
            className="input"
            value={user.username}
            onChange={event => handleChange(event)}
            />
            <label>Password</label>
            <input 
            name= 'password'
            type= 'text'
            className="input"
            value={user.password}
            onChange={event => handleChange(event)}
            />
            <button className='submit'type='submit'>Login</button>
        </form>)
       
}

export default Login;
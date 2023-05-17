import React from 'react'
import '../../index.css'


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        loginUserWithEmailAndPassword();
    }
    
    const onPress = () => {
        handleLogin();
    }

    return(
    <div className="login-form">
        <h2>Login</h2>
        <label>User</label>
        <input onInput={(addEventListener) => {setEmail(addEventListener.target.value)}} type='text'/>
        <label>Password</label>
        <input onInput={(addEventListener) => {setPassword(addEventListener.target.value)}} type='password'/>
        <button onClick={onPress()}>Submit</button>
    </div>)
}
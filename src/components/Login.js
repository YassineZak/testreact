import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import './../../public/styles/Login.css'

const Login = () => {

    const [loginValue, setValue] = useState("");
    const [logged, setStatus] = useState(false);

    const handleLogin = (event) => {
        setValue(event.target.value.split(' ').join(''));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const onlyNumbers = /^[0-9]+$/;
        if (loginValue === "" || loginValue === null || loginValue.length < 6 || loginValue.match(onlyNumbers) ){
            //eslint-disable-next-line
            window.location.reload()
            
        }else{
            localStorage.setItem('quizUser', loginValue);
            setStatus(true);
        }
    }

    if (logged){
        return <Redirect to='/quiz'/>
    }

    return (
        <div className="container">
            <div className="wrapper fadeInDown">
            <h1 className="d-flex justify-content-center align-self-center">Quiz ReactJs</h1>
                <div id="formContent">
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" value={loginValue} onChange={handleLogin}/>
                        <input type="submit" className="fadeIn fourth" value="Log In"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
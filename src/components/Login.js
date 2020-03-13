import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './../../public/styles/Login.css'

const Login = () => {

    const [loginValue, setValue] = useState("");
    const history = useHistory();

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
            history.push('/presentation')
        }
    }

    if (localStorage.getItem('quizUser')){
        history.push('/presentation')
    }

    return (
        
                <div id="formContent">
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" value={loginValue} onChange={handleLogin}/>
                        <input type="submit" className="fadeIn fourth" value="Log In"/>
                    </form>
                </div>
    );
};

export default Login;
import React from 'react';
import {Redirect} from 'react-router-dom';

const Quiz = () => {

    const user = localStorage.getItem('quizUser');

    const handleDisconnection = () => {
        if (user !== null) {
            localStorage.clear();
            window.location.reload()
        }
    }

    if(user === null){
        return <Redirect to='/'/>
    }

    return (
        <div>
            Bonjour {user}
            <div>
            <button className='btn btn-primary' onClick={handleDisconnection}>
                Se Déconnecter
            </button>
            </div>
        </div>
    );
};

export default Quiz;
import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import '../../public/styles/Presentation.css'

const Presentation = () => {

    const user = localStorage.getItem('quizUser');
    const history = useHistory();

    const handleDisconnection = () => {
        if (user !== null) {
            localStorage.clear();
            window.location.reload()
        }
    }

    const handleRedirection = () => {
        if( user !== null ){
            history.push('/quiz')
        }
    }

    if(user === null){
        history.push('/')
    }

    return (
        <Fragment>
            <div>
                <span className="user-name d-flex align-items-start">Hello  <span style={{paddingLeft:"2px", fontWeight: "bold"}}> {user}</span>, <br/></span>
                You are about to start ReactJs quiz.
                You have 10 seconds for every page and 25 seconds for the whole survey of 3 questions.
                Please click on 'Start Quiz' button when you are ready.
            </div>
            <div className="footer">
                <button className="btn btn-danger" onClick={handleDisconnection}>
                    Back
                </button>
                <button className="btn btn-primary" onClick={handleRedirection}>
                    Start
                </button>
            </div>
        </Fragment>
    );
};

export default Presentation;
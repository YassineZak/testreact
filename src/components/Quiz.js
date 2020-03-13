import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../public/styles/Quiz.css';
import questions from '../questions.json';


const Quiz = () => {

    const user = localStorage.getItem('quizUser');
    const [index, setIndex] = useState(0);
    const history = useHistory();  
    const [formValue, setValue] = useState('');
    const [score, setScore] = useState(0);

    const handleOptionChange = (changeEvent) => {
        setValue(changeEvent.target.value);
    }

    const calculateRate = (value) => {
        if(questions.questions[index].correctAnswer === value){
            setScore(score + 1);
        }else{
        }
    }

    const handleSubmit = (event) => {
        
        event.preventDefault();
        

        
        if(index < (questions.questions.length - 1)) {
            setIndex(index + 1 );
            calculateRate(formValue);
        }
        else if(index === (questions.questions.length - 1)){
            calculateRate(formValue);
            console.log("votre score est de :" + score);
        }
    }

    const handleDisconnection = () => {
        localStorage.clear();
        history.push('/');
    }


    if(user === null){
        history.push('/');
    }

    return (
			<form onSubmit={handleSubmit} style={{textAlign: "start"}}>
                <h2>{index + 1} - {questions.questions[index].name}</h2>
                {questions.questions[index].choices.map((choice, index) =>(
                <div key={index}  className="form-check">
                    <label>
                        <input  type="radio" name="check" value={choice} checked={formValue === choice} onChange={handleOptionChange}/> <span className="label-text">{choice}</span>
                    </label>
                </div>
                ))}
                <div className="footer">
                    <button className="btn btn-danger" onClick={handleDisconnection}>
                        Cancel
                    </button>
                    <button className="btn btn-primary" >
                        Next
                    </button>
                </div>
			</form>
    );
};

export default Quiz;
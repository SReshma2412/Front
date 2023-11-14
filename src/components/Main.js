import React, { useRef }  from "react";
import { Link } from "react-router-dom";
import '../styles/Main.css';
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/result_reducer";
export default function Main()
{
    const inpRef=useRef(null);
    const dispatch = useDispatch()

    function startQuiz()
    {
        if(inpRef.current?.value)
        {
            dispatch(setUserId(inpRef.current?.value))
        }
    }
    return(
        <div className="container">
            <h1 className="title text-light">Quiz Application</h1>
<ol>
    <li>5 questions will be asked</li>
    <li>10 points is awarded for the correct answer</li>
    <li>Each question has three options.You can choose only one option</li>
    <li>You can review and change answers before the quiz finish</li>
    <li>The result will be declared at the end of the quiz.</li>
</ol>

<form id="form">
    <input ref={inpRef} type="text" className="userid" placeholder="Username*" />
</form>

<div className="start">
    <Link className="btn" to={'quiz'} onClick={startQuiz }>Start Quiz</Link>
    
</div>

        </div>
    )
}
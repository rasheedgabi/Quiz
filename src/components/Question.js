import React, { useState, useEffect, useRef} from 'react';

const Question =({data, onAnswerUpdate, numberOfQuestions, activeQuestions, onSetActiveQuestions, onSetStep}) => {
    const [selected, setSelected] = useState (' ');
    const [error, setError] = useState (' ');
    const radiosWrapper = useRef();
    
    const changeHandler = (e) => {
        setSelected(e.target.value);
    }
    
    const nextClickHandler = (e) => {

    }
    
 return(
    <div className="card">
        <div className="card-content">
            <div className="content">
                <h2 className="mb-5">{data.question}</h2>
                <div className="control">
                {data.choices.map((choice, i ) => (
                    <label className="radio has-background-light" key={i}>
                        <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                       {choice}
                    </label>
                ))}

                </div>
              {error && <div className="has-text-danger">{error}</div>}
                <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next</button>
            </div>
        </div>
    </div>
 );

}

export default Question;

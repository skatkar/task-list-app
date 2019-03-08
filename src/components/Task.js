import React from 'react';

// Stateless based components - Use this only if there is only render method inside the class definition
// Otherwise go for class based component
const Task = (props) => (
    <div className="task">
        <p className="task__text">{props.count}. {props.taskText}</p>
       
        <button className="button button--link"
            onClick={(e) => {
            props.handleDeleteTask(props.taskText);
            }}
        >Remove
        </button>
    </div>
    
);
export default Task;

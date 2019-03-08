import React from 'react';
import Task from './Task';

// Stateless functional components
const Tasks = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header--title">Your Tasks</h3>
            <button className="button button--link"
                onClick={props.handleDeleteTasks}>
                Remove all
            </button>
        </div>
        
        
        {props.tasks.length === 0 && <p className="widget__message">Please add a task to get started!</p>}
        {
            props.tasks.map((task,index) => (
                <Task 
                    key={task} 
                    taskText={task}
                    count={index + 1}
                    handleDeleteTask={props.handleDeleteTask}
                />
            ))
        }
        
    </div>
);

export default Tasks;
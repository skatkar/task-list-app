import React from 'react';

export default class AddTasks extends React.Component {
    state = {
        error:undefined
    }
    
    //Setting the handleAddTask as as class property
    handleAddTask = (e) => {
        
        e.preventDefault();

        const task = e.target.elements.task.value.trim();
        const error = this.props.handleAddTask(task);

        this.setState(() => ({ error }));


        if(!error){
            e.target.elements.task.value = '';
        }


        // this.setState(()=>{
        //     return{
        //         error: error
        //     };
        // });
       
    }

    render(){
        return(
            <div>
                {this.state.error && <p className="add-task-error">{this.state.error}</p>}
                <form className="add-task" onSubmit={this.handleAddTask}>
                    <input className="add-task__input" type="text" name="task"></input>
                    <button className="button">Add task</button>
                </form>
            </div>
        );
    }
}
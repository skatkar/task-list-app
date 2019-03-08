import React from 'react';
import AddTasks from './AddTasks';
import Header from './Header';
import Action from './Action';
import Tasks from './Tasks';
import TaskModal from './TaskModal';

class TaskListApp extends React.Component {

    state = {
        tasks: [],
        selectedTask:undefined
    }

   
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.tasks.length);
        const task = this.state.tasks[randomNum];
        
        this.setState((prevState) => ({
            selectedTask: task
        }));
    }

    handleModalButton = () => {
        this.setState(() => ({ 
            selectedTask: undefined
        }));
    };

    handleAddTask = (task) => {
        
        if(!task){
            return 'Enter valid value to add item';
        }else if(this.state.tasks.indexOf(task) > -1){
            return 'This task already exists. Finish it first.';
        }

        this.setState((prevState) => ({
            tasks: prevState.tasks.concat(task)
        }));

        
    };

    handleDeleteTasks = () => {

        this.setState(() => ({ 
            tasks: []
        }));
        
    };

    handleDeleteTask = (taskToRemove) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => taskToRemove !== task)
        }));
    };

    //Life cycle method
    componentDidMount(){

        try{
            const json = localStorage.getItem('tasks');
            const tasks = JSON.parse(json);

            if(tasks)
                this.setState(() => ({tasks}));
        }catch(e){

        }
        
    }

    //Life cycle method
    componentDidUpdate(prevProps,prevState){
        if(prevState.tasks.length !== this.state.tasks.length){
            const json = JSON.stringify(this.state.tasks);
            localStorage.setItem('tasks',json);
        }
        
    }

    //Life cycle method
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    
    render(){

        const title = 'Task list App';
        const subtitle = 'List your tasks and remove them once done';
        return(
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <div className="container">
                    <Action hasTasks = {this.state.tasks.length > 0}
                    handlePick = {this.handlePick}/>

                    <div className="widget">
                        <Tasks tasks={this.state.tasks}
                        handleDeleteTasks = {this.handleDeleteTasks}
                        handleDeleteTask={this.handleDeleteTask}/>

                        <AddTasks handleAddTask = {this.handleAddTask}/>
                    </div>
                    
                </div>
                <TaskModal selectedTask={this.state.selectedTask} handleModalButton={this.handleModalButton}/>
            </div>
            
        );
    }
}

export default TaskListApp;
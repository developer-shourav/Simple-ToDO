import React from 'react';
import { ITask } from '../interfaces';

interface Props {
    task: ITask;
    compliteTask(taskNameToDelete: string): void; 

}
const ToDoTask = ({task, compliteTask}: Props) => {
    return (
        <div>
            <div className="task">
                <div className="content">
                    <span> {task.taskName} </span>
                    <span>{task.deadline}</span>
                </div>
                <button onClick={() => {compliteTask(task.taskName)}}>X</button>
            </div>
          
        </div>
    );
};

export default ToDoTask;
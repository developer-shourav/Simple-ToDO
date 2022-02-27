import React from 'react';
import { ITask } from '../interfaces';

interface Props {
    task: ITask;

}
const ToDoTask = ({task}: Props) => {
    return (
        <div>
            <div className="task">
                <div className="content">
                    <span> {task.taskName} </span>
                    <span>{task.deadline}</span>
                </div>
                <button>X</button>
            </div>
          
        </div>
    );
};

export default ToDoTask;
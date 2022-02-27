import React, { ChangeEvent, FC, useState } from 'react';
import "./App.css"
import { ITask } from './interfaces';

const App: FC =() =>  {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]) ;

  const handleChange = (event: ChangeEvent<HTMLInputElement> ): void => {
    if(event.target.name === "task"){
      setTask(event.target.value);
    }
    else{
      setDeadline(Number(event.target.value));
    }
   
  };

  const addTask = (): void => {
    const newTask = {taskName:task, deadline: deadline};
     setTodoList([...todoList, newTask]);
   
     
  }


  return (
    <div className='App'>
      <div className="header">
        <div className="inputContainer"> 
          <input type="text" name="task" id="" placeholder='Task..' onChange={handleChange} />
          <input type="number" name="deadline" id="" placeholder='Deadline (in Days)' onChange={handleChange} />
        </div>
        <button onClick={addTask}>ADD Task</button>
      </div>
      <div className="todoList"></div>

     
    </div>
  );
}

export default App;


import React, { FC } from 'react';
import "./App.css"

const App: FC =() =>  {

  return (
    <div className='App'>
      <div className="header">
        <div className="inputContainer">
          <input type="text" name="" id="Task.." />
          <input type="number" name="" id="Deadline (in Days)" />
        </div>
        <button>ADD Task</button>
      </div>
      <div className="todoList"></div>

     
    </div>
  );
}

export default App;


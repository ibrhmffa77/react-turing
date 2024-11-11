import { useRef, useState } from 'react'
import './App.css'
import RenderList from './components/RenderList'

function App() {
  const inputVal = useRef(null);

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setInput(e.target.value)
  }

  function addList(){
    if(input.trim()){
      setTodos([...todos, input]);
      setInput("");
      inputVal.current.value = "";
    }
  }
  function removeList(index){
    setTodos(todos.filter((item, i)=> i!==index))
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addList();
    }
  }

  return (
    <div className="container">
      <div className="todo-list">
        <div className="todo-list-item">
          <h1>To-Do List</h1>
          <div className="inputItem">
            <input type="text"
             placeholder='Type something...' 
             onChange={handleChange} 
             ref={inputVal} 
             onKeyPress={handleKeyPress}/>
            <button className='addBtn' onClick={addList}>Add</button>
          </div>
        </div>
        <RenderList data={todos}  removeList={removeList}/>
      </div>

    </div>
  )
}

export default App

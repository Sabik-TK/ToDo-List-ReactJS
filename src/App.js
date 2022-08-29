import './App.css';
import {useState} from 'react'
function App() {

  const [toDo,setTodo] = useState('')
  const [toDos,setTodos] = useState([])
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); 
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  return (
       <div className="app">
      <div className="mainHeading">
        <h1>To Do List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2 >{date}</h2>
        <h2 >{weekday[today.getDay()]}</h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id: Date.now() ,text:toDo, status :false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { toDos.map((obj)=> {
          return(
           
            <div className="todo">
          <div className="left">
            <input onChange={(e)=>{ 
              setTodos(toDos.filter(current_obj=>{
                if(current_obj.id === obj.id){
                  current_obj.status = e.target.checked
                }
                return current_obj
              }))
              console.log(e.target.checked)
              console.log(obj) 
            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i onClick={(e)=>{ 
              setTodos(toDos.filter(new_obj=>{   
                return new_obj != obj
              }))
              console.log(obj.id, 'deleted') 
            }} className="fas fa-times"></i>
          </div>
        </div>
          ) } 
          )}
         
      </div>
            <br />
          <h1>Compleated</h1>
          <div className="todos">
        { toDos.map((obj)=> {
          if(obj.status === true){
          return(
            <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              setTodos(toDos.filter(current_obj=>{
                if(current_obj.id === obj.id){
                  current_obj.status = e.target.checked
                }
                return current_obj
              }))
              console.log(e.target.checked)
              console.log(obj) 
            }} value={obj.status} defaultChecked type="checkbox"  name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
          <i onClick={()=>{ 
              setTodos(toDos.filter(new_obj=>{   
                return new_obj != obj
              }))
              console.log(obj.id, 'deleted') 
            }} className="fas fa-times"></i>
          </div>
        </div>
          ) }} 
          )}
         
      </div>

    </div>
  );
}

export default App;

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from "react"
function App() {
  const[showAddTask,setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
    {
    id:1,
    text:'FAFL',
    day:'Monday at 9:00am',
    reminder:true,
},
{
    id:2,
    text:'SE',
    day:'Monday at 10:00am',
    reminder:false,
},
{
    id:3,
    text:'IPR',
    day:'Monday at 11:00am',
    reminder:true,
},
])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=> task.id !==id))
  }

  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) => task.id ===id ? {...task,reminder: !task.reminder} : task))
  }
  return (
    <div className="container">
     <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length > 0 ?<Tasks tasks = {tasks} onDelete ={deleteTask}  onToggle={toggleReminder}/> : 'No Tasks to Show'}
    </div>
  );
}

Header.defaultProps = {
  title: 'Task Tracker',
}



export default App;

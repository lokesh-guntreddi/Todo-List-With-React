// import React, { useState } from 'react'
// let next=2
// export const  Todo=()=> {
//     const[task,setTask] = useState('')
//    const [taskList,setTaskList] = useState([
//         {
//             id:1,
//             job:'sleeping'

//         }
//     ])
    
//     const addTask = () =>{
//         if(task == ''){
//         alert('enter some task')
//         }
//         else{
//         let newtodo =[
//             ...taskList,
//             {
//                 id:next++,
//                 job:task
//             }

//         ]
//         setTaskList(newtodo);
//         setTask('')
//         }
//     }
//     const deleteTodo= (id) => {
//               let updatetasklist =  taskList.filter((tasks)=>{
//                     return tasks.id !== id
//                 })
//              setTaskList(updatetasklist)
//     }
//       return (
//     <div style={{justifyContent:'center',alignItems:'center'}}>
//         <h1 style={{justifyContent:'center',alignItems:'center'}}>Todo List</h1>
      
//         <input type="text" placeholder="Enter your task" 
//          onChange={(e)=>{
//            let tasks =  e.target.value
//             setTask(tasks)
            
//         }}
//         value={task}
//         />
       
//         <button onClick={()=>{
//             addTask()
//         }}>Add</button>
//         <ul>
//             {
//                 taskList.map(
//                     (task,index)=>{
//                         return(

//                        <div key={index} style={{justifyItems:'flex-start'}}>
//                          <h1>{task.job} </h1>
//                          <button onClick={()=>{
//                                   deleteTodo(task.id)
//                          }}
//                          >remove</button>
//                        </div>
//                         )
//                     }
//                 )
//             }
//         </ul>

      
//     </div>
//   )
// }
// export default TodoList;
















// import React, { useState } from 'react'
// import { toast, ToastContainer } from 'react-toastify'
// import { Customhook } from './Customhook'
// import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
// import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
// let next=2
// let subnext=1
// export const  Todo = ()=> {
//     const [count,setcount]=useState(0)
//     const [task , setTask]= useState('')
//     const [ tasklist , setTasklist]=useState([
//         {
//             id:1 ,
//             tasks:"Master the MERN stack to build dynamic, full-stack web applications "
//         }
//     ])
//     const [subtask,setsubtask]=useState('')
//  const [subtasklist,setsubtasklist]=useState([
//     {
//         id:subnext++,
//         subtasks:subtask
//     }
//  ]
//  )
//     const addTaskItem = ()=>{
//         if(task==''){
//             toast("enter your task")
//         }
//         else{
//               let updatedtasks = [
//                  ...tasklist,
//                  {
//                 id : next++,
//                 tasks:task,
//                 completed : false 
//             }
//         ]
//         setTasklist(updatedtasks);
//         setTask('');
//         setcount(Math.floor(Math.random() * 46) + 1)
//     }
// }
//     const addsubTaskItem = ()=>{
//         if(task==''){
//             toast("enter your task")
//         }
//         else{
//               let updatedtasks = [
//                  ...subtasklist,
//                  {
//                 id : next++,
//                 tasks:task,
//                 completed : false 
//             }
//         ]
//         setsubtasklist(updatedtasks);
//         setsubtask('');
//     }
// }
//     const addTaskItems = ()=> {
//         addTaskItem();
        
//     }
//     console.log(count)
// const deleteTodo = (id)=>{
//            let updatetodolist = tasklist.filter((tasks)=>{
//             return tasks.id !== id 
//            })
//            setTasklist(updatetodolist)
// }
// const updatetodo = (id) =>{
//     setTasklist(
//         tasklist.map((task) =>
//             task.id === id ? { ...task, completed: !task.completed } : task
//         )
//     );
// };


//   return (
//     <div className="todo-container">
//     <h1 className="todo-header">Todo List with React</h1>

//     <div className="input-container">
//       <input
//         type='text'
//         placeholder='Enter your task'
//         onChange={(e) => setTask(e.target.value)}
//         value={task}
//         className="input-field"
//       />
//       <button
//         onClick={addTaskItem}
//         className="add-btn"
//       >
//         <AddCircleOutlineRoundedIcon />
//       </button>
//     </div>

//     <div className="quotation-section">
//       <h1 className="text-xl font-semibold">Quotation:</h1>
//       <Customhook value={count} />
//     </div>

//     {tasklist.map((taskitem) => (
//       <div key={taskitem.id} className="task-item">
//         <div className="flex items-center space-x-3">
//           <input
//             type='checkbox'
//             checked={taskitem.completed}
//             onChange={() => updatetodo(taskitem.id)}
//             className="checkbox"
//           />
//           {taskitem.completed ? (
//             <h1 className="completed-task">{taskitem.tasks}</h1>
//           ) : (
//             <h1 className="task-text">{taskitem.tasks}</h1>
//           )}
//         </div>
//         <DeleteRoundedIcon
//           onClick={() => deleteTodo(taskitem.id)}
//           className="delete-btn"
//         />
//       </div>
//     ))}

//     <ToastContainer />
//   </div>
//   )
// }



import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Customhook } from './Customhook';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

let next = 2;
let subnext = 1;

export const Todo = () => {
    const [count, setcount] = useState(21);
    const [task, setTask] = useState('');
    const [tasklist, setTasklist] = useState([
        {
            id: 1,
            tasks: "Master the MERN stack to build dynamic, full-stack web applications "
        }
    ]);

    const addTaskItem = () => {
        if (task === '') {
            toast(" Add your task");
        } else {
            let updatedtasks = [
                ...tasklist,
                {
                    id: next++,
                    tasks: task,
                    completed: false
                }
            ];
            setTasklist(updatedtasks);
            setTask('');
            setcount(Math.floor(Math.random() * 46) + 1);
        }
    };

    const deleteTodo = (id) => {
        let updatetodolist = tasklist.filter((tasks) => {
            return tasks.id !== id;
        });
        setTasklist(updatetodolist);
    };

    const updatetodo = (id) => {
        setTasklist(
            tasklist.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addTaskItem();
        }
    };

    useEffect(() => {
        // Adding event listener for the "Enter" key globally
        window.addEventListener('keydown', handleKeyPress);

        // Cleanup event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div style={{ padding: '40px', maxWidth: '600px',margin:'100px auto', backgroundColor: '#F7FAFC', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px', color: '#1A73E8' }}>Todo List with React</h1>

            <div style={{ display: 'flex', marginBottom: '20px', alignItems: 'center' }}>
                <input
                    type='text'
                    placeholder='Enter your task'
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                    style={{
                        flex: 1,
                        padding: '12px 15px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '16px',
                        marginRight: '10px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        outline: 'none',
                        backgroundColor:"#F7FAFC"
                    }}
                />
                <button
                    onClick={addTaskItem}
                    style={{
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '12px 15px',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'background-color 0.3s'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
                >
                    <AddCircleOutlineRoundedIcon />
                </button>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>This quote may help boost your task:</h2>
                <Customhook value={count} />
            </div>

            <div>
                {tasklist.map((taskitem) => (
                    <div
                        key={taskitem.id}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '15px',
                            padding: '12px',
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s',
                            backgroundColor:"#E3F2FD"
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                            <input
                                type='checkbox'
                                
                                checked={taskitem.completed}
                                onChange={() => updatetodo(taskitem.id)}
                                style={{
                                  marginRight: '15px',
                                  transform: 'scale(1.5)',  // Increase the size of the checkbox
                                  cursor: 'pointer'
                                }}
                            />
                            <h1 style={{ textDecoration: taskitem.completed ? 'line-through' : 'none', color: taskitem.completed ? '#1A73E8' : '#333', transition: 'color 0.3s' }}>
                                {taskitem.tasks}
                            </h1>
                        </div>
                        <DeleteRoundedIcon
                            onClick={() => deleteTodo(taskitem.id)}
                            style={{
                                color: '#e74c3c',
                                cursor: 'pointer',
                                fontSize: '24px',
                                transition: 'color 0.3s'
                            }}
                            onMouseOver={(e) => e.target.style.color = '#c0392b'}
                            onMouseOut={(e) => e.target.style.color = '#e74c3c'}
                        />
                    </div>
                ))}
            </div>

            <ToastContainer />
        </div>
    );
};

import React from 'react';
import './TodoApp.css';
export default function Todos (props){
    return(
        <ul>
        {props.todos.map((todo, index)=>{

            return <div key={index} className='todo-li'>
                        <li className={`${props.urgency}`}>{props.todos[index]}</li>
                        <button type='button' onClick={props.removeTodo.bind(this, index)}>Remove Todo</button>
                        <button type='button' onClick={props.editTodo.bind(this, todo)}>Edit</button>
                    </div>
        })}
    </ul>
    )
}



// import React from 'react'

// function TodoItem(props) {
//     return (
//         <div>
//             {this.state.todos.map((todo, index) => {
//                 <li key={index}> {this.state.todos[index]} </li>
//             })
//         }
//         </div>
//     )
// }

// export default TodoItem

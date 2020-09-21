import React from 'react';
import './TodoApp.css'
import Todos from '../TodoApp/TodoItem'
import SubmitButtons from '../Button/SubmitButtons'

class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // isClicked: false,
            text: '',
            todos: [],
            urgencyState: [{buttonText: 'very urgent', color: 'tomato'}, 'somewhat urgent', 'not very urgent'],
            urgency: 'goldenrod'
        }
        // this.handleClick = this.handleClick.bind(this);
        // this.textUpdate = this.textUpdate.bind(this);
    }

    textUpdate = (event) =>{
        this.setState({
            text: event.target.value
        })
    }
    handleClick = (event) =>{
        // find the button text that pressed that matches urgencyState
        // set urgency to the the found match
        // pass usrgeny to Todo
        event.preventDefault()
        this.setState({
            // isClicked: !this.state.isClicked,
            todos: [...this.state.todos, this.state.text],

            text: ''
        })
    }
    removeTodo = (index) =>{
        const list = this.state.todos.splice(index, 1);
        this.setState({
            list
        })
    }
    editTodo = (index) =>{
        // event.preventDefault()
        this.setState({
            todos: [...this.state.todos, this.state.text],
            text: this.state.todos[index]
        })
    }
    // handleDelete(event, todo) {
    //     const filteredTodos = this.state.todos.filter((t) => t.id !== todo.id);
    
    //     this.setState({
    //       todos: filteredTodos,
    //     });
    //   }
        
    render() {
        return(
        <form onSubmit={this.handleClick}>
            <div className='input-area'>
                <input className='todo-input' value={this.state.text} onChange={this.textUpdate}></input>
                <SubmitButtons handleClick={this.handleClick} />
            </div>
            <Todos urgency={this.state.urgency} todos={this.state.todos} removeTodo={this.removeTodo} editTodo={this.editTodo} />
        </form>
        )
    }
}

export default TodoApp














// import React from 'react';
// // import TodoItem from './TodoItem';
// import SubmitButtons from '../Button/SubmitButtons';
// import TodoItem from '../TodoApp/TodoItem';

// class TodoApp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isClicked: false,
//             text: '',
//             todos: []
//         };
        
//         this.handleClick = this.handleClick.bind(this)
//         this.textUpdate = this.textUpdate.bind(this)
//     }

//     // formSubmit = event => {
//     //     event.preventDefault()
//     //     console.log("This is State***", this.state.todos)
//     //     this.setState({
//     //     todos : [...this.state.todos, this.state.text],
//     //     text: ''
//     //     })
//     // }

//     handleClick(event) {
//         event.preventDefault()
//         this.setState({
//             isClicked: !this.state.isClicked,
//             text: '',
//             todos : [...this.state.todos, this.state.text],
//         })
//     }

//     textUpdate(event) {
//         this.setState({
//             text: event.target.value
//         })
//     }

//     clearItem = (index) => {
//         const list = this.state.todos.splice(index, 1);
//         this.setState({
//             list
//         })
        
//     }

//     render() {
//         return (
            
//                 <div>
//                     {/* <button onClick={this.handleClick}>Click Me</button> */}
//                     <input value={this.state.text} onChange={this.textUpdate} ></input>
//                     <SubmitButtons handleClick={this.handleClick} onClick={this.handleClick}/>
//                     {/* <ul>
//                         {this.state.todos.map((todo, index) => {
                            
//                             return <li key={index}>{this.state.todos[index]} <button onClick={this.clearItem.bind(this, index)}>Clear</button></li>
//                         })}
//                     </ul> */}
//                     <ul>
//                     <TodoItem todos={this.state.todos} clearItem={this.clearItem} />
//                     </ul>


//                 </div>
            
//         )
//     }
// }

// export default TodoApp;
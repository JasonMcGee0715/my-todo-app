import React from 'react';

class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isClicked: false,
            text: '',
            todos: []
        };
        
        this.handleClick = this.handleClick.bind(this)
        this.textUpdate = this.textUpdate.bind(this)
    }

    // formSubmit = event => {
    //     event.preventDefault()
    //     console.log("This is State***", this.state.todos)
    //     this.setState({
    //     todos : [...this.state.todos, this.state.text],
    //     text: ''
    //     })
    // }

    handleClick() {
        this.setState({
            isClicked: true,
            text: '',
            todos : [...this.state.todos, this.state.text],
        })
    }

    textUpdate(event) {
        this.setState({
            text: event.target.value
        })
    }

    clearItem = (index) => {
        const list = this.state.todos.splice(index, 1);
        this.setState({
            list
        })
        
    }

    render() {
        return (
            
                <div>
                    <button onClick={this.handleClick}>Click Me</button>
                    <input value={this.state.text} onChange={this.textUpdate}></input>
                    <ul>
                        {this.state.todos.map((todo, index) => {
                            
                            return <li key={index}>{this.state.todos[index]} <button onClick={this.clearItem.bind(this, index)}>Clear</button></li>
                        })}
                    </ul>


                </div>
            
        )
    }
}

export default TodoApp;
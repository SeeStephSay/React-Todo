import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import '../src/components/TodoComponents/Todo.css';

const todos = [
	{
		item      : 'Clean out car',
		id        : 1,
		completed : false,
	},
	{
		item      : 'Organize paperwork',
		id        : 2,
		completed : false,
	},
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			todos : todos,
			item  : '',
		};
	}

	addItem = (newTodoText) => {
		const newItem = {
			item      : newTodoText,
			id        : Date.now(),
			completed : false,
		};
		this.setState({
			todos : [ ...this.state.todos, newItem ],
		});
	};

	toggleCompleted = (id) => {
		this.setState({
			todos : this.state.todos.map((item) => {
				if (item.id === id) {
					return {
						...item,
						completed : !item.completed,
					};
				} else {
					return item;
				}
			}),
		});
	};

	deleteTask = (e) => {
		this.setState({
			todos : this.state.todos.filter((item) => {
				return !item.completed;
			}),
		});
	};

	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
				<TodoForm value={this.state.item} handleChange={this.handleChanges} addItem={this.addItem} />
				<TodoList toggleCompleted={this.toggleCompleted} todos={this.state.todos} deleteTask={this.deleteTask} />
				<button className='delete-btn' onClick={this.deleteTask}>
					Clear Completed
				</button>
			</div>
		);
	}
}

export default App;

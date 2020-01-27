import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

const todoData = [
	{
		task      : 'Organize Garage',
		id        : 1528817077286,
		completed : false,
	},
	{
		task      : 'Bake Cookies',
		id        : 1528817084358,
		completed : false,
	},
];

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			todoData : todoData,
			list     : '',
		};
	}
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	toggleList = (id) => {
		this.setState({
			todoData : this.state.todoData.map((item) => {
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
  
  
	render() {
		return (
			<div className='container'>
				<h2>Welcome to your To-Do App!</h2>
				<TodoList todos={this.state.todoData} toggleList={this.toggleList} />
				<TodoForm
					addItem={this.addItem}
					clearCompleted={this.clearCompleted}
					submitTodo={this.submitTodo}
					handleChanges={this.handleChanges}
				/>
			</div>
		);
	}
}

export default App;

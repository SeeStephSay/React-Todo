import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const exampleTodos = [
	{
		name      : 'Go to class',
		id        : 1,
		completed : false,
	},
	{
		name      : 'Learn Class Components',
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
			todos : exampleTodos,
		};
	}

	// Class methods to update state

	render() {
		return (
			<div className='paper'>
				<div className='pattern'>
					<div className='content'>
						<div className='header'>
							<h2>To-Dos</h2>
							<TodoForm />
						</div>
						<TodoList />
					</div>
				</div>
			</div>
		);
	}
}

export default App;

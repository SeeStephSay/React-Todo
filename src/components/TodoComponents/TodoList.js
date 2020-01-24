// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items : [],
		};

		this.addItem = this.addItem.bind(this);
	}

	addItem(e) {
		if (this._inputElement.value !== '') {
			var newItem = {
				text : this._inputElement.value,
				key  : Date.now(),
			};

			this.setState((prevState) => {
				return {
					items : prevState.items.concat(newItem),
				};
			});

			this._inputElement.value = '';
		}
		console.log(this.state.items);

		e.preventDefault();
	}

	render() {
		return (
			<div className='todoListMain'>
				<div className='header'>
					<form onSubmit={this.addItem}>
						{
							//Adds inputted item to array.
						}
						<input ref={(a) => (this._inputElement = a)} placeholder='Enter task here' />
						<button type='submit'>Add</button>
					</form>
				</div>
				<Todo entries={this.state.items} delete={this.deleteItem} />
			</div>
		);
	}
}

// const TodoList = (props) => {
// 	return (
// 		<div className='list'>
// 			<div className='header'>
// 			{props.todos.map((task) => {
// 				return <Todo key={task.id} item={task} toggleCompleted={props.toggleCompleted} />;
// 			})}
// 			<button className='check-btn' onClick={props.todos}>
// 				Mark Completed
// 			</button>
// 			</div>
// 		</div>
// 	);
// };

export default TodoList;

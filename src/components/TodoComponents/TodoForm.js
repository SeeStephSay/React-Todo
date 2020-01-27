import React from 'react';

export default function TodoForm(props) {
	return (
		<form onSubmit={props.submitTodo}>
			<input type='text' value={props.list} name='list' onChange={props.handleChanges} />
			<button>Add</button>
			<button className='clear-btn' onClick={props.clearCompleted}>
				Clear Completed
			</button>
		</form>
	);
}

// class TodoForm extends React.Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			newItem   : '',
// 			id        : Date.now(),
// 			completed : false,
// 		};
// 	}

// handleChanges = (e) => {
// 	this.setState({ newItem: e.target.value });
// };

// handleChanges = (e) => {
// 	this.setState({ [e.target.name]: e.target.value });
// };

// submitTodo = (e) => {
// 	e.preventDefault();
// 	this.addItem(this.state.list);
// };
// submitTodo = (e) => {
// 	e.preventDefault();
// 	this.props.addItem(this.state.newItem);
// 	this.setState({
// 		newItem : '',
// 	});
// };

// 	render() {
// 		return (
// 			<form onSubmit={this.submitTodo}>
// 				<input value={this.state.newItem} onChange={this.handleChanges} type='text' task='item' />
// 				<button className='submit-btn'>Add</button>
// 			</form>
// 		);
// 	}
// }

// export default function TodoForm(props) {
// 	return (
// 		<form onSubmit={props.submitTodo}>
// 			<input type='text' value={props.list} name='list' onChange={props.handleChanges} placeholder='Enter task here' />
// 			<button className='submit-btn'>Add</button>
// 			<button className='clear-btn' onClick={props.clearCompleted}>
// 				Clear Completed
// 			</button>
// 		</form>
// 	);
// }
// export default TodoForm;

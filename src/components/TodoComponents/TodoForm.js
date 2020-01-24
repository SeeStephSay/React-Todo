import React from 'react';

class TodoForm extends React.Component {
	//constructor function with state
	constructor() {
		super();
		this.state = {
			newItem   : '',
			id        : Date.now(),
			completed : false,
		};
	}

	handleChanges = (e) => {
		//update state with each character entered
		this.setState({ newItem: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addItem(this.state.newItem);
		this.setState({
			newItem : '',
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input onChange={this.handleChanges} value={this.state.newItem} type='text' task='item' />
				<button className='submit-btn'>Add Task</button>
			</form>
		);
	}
}

export default TodoForm;

import React from 'react';

class TodoForm extends React.Component {
	//constructor function with state
	constructor() {
		super();
		this.state = {
			newItem : '',
		};
	}

	handleChanges = (e) => {
		//update state with each character entered
		this.setState({ ...this.state, newItem: e.target.value });
	};

	render() {
		return (
			<form>
				<input onChange={this.handleChanges} value={this.state.newItem} type='text' name='item' />
				<button>Add to List</button>
			</form>
		);
	}
}

export default TodoForm;

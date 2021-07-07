import React from 'react';

/*
- In TodoForm, add a constructor and state with a state property called itemName
- On the input, add a value attribute and pass in new state property
- Build handleChanges function to update state with each keystroke
- Don't forget onChange on the input
*/

class TodoForm extends React.Component {
	// constructor with state
	constructor(props) {
		super(props);
		this.state = {
			itemName : '',
		};
	}

	// handleChanges = ({ target: { name, value } }) => {
	handleChanges = (e) => {
		// update state with each keystroke
		this.setState({ itemName: e.target.value });
	};

	// class property to submit form
	handleAddItem = (e) => {
		e.preventDefault();
		this.props.addItem(this.state.itemName);
	};

	render() {
		return (
			<form onSubmit={this.handleAddItem}>
				{/* This is an uncontrolled component. We want it to be controlled by state. */}
				<input type='text' name='item' value={this.state.itemName} onChange={this.handleChanges} />
				<button>Add</button>
			</form>
		);
	}
}

export default TodoForm;

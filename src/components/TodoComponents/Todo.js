import React, { Component } from 'react';

class Todo extends Component {
	constructor(props) {
		super(props);

		this.createTasks = this.createTasks.bind(this);
	}

	delete(key) {
		this.props.delete(key);
	}

	createTasks(item) {
		return (
			<li onClick={() => this.delete(item.key)} key={item.key}>
				{item.text}
			</li>
		);
	}

	render() {
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);

		return <ul className='theList'>{listItems}</ul>;
	}
}

// const Todo = (props) => {
// 	return (
// 		<main
// 			className={`task${props.item.completed ? ' completed' : ''}`}
// 			onClick={() => props.toggleCompleted(props.item.id)}>
// 			<p>{props.item.task}</p>
// 		</main>
// 	);
// };

export default Todo;

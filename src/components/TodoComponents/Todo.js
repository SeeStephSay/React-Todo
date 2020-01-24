import React from 'react';

const Todo = (props) => {
	return (
		<main
			className={`task${props.item.completed ? ' completed' : ''}`}
			onClick={() => props.toggleCompleted(props.item.id)}>
			<p>{props.item.task}</p>
		</main>
	);
};

export default Todo;

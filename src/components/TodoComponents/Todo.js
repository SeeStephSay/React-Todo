import React from 'react';

const Todo = (props) => {
	return (
		<main
			className={`item${props.item.completed ? ' completed' : ''}`}
			onClick={() => props.toggleCompleted(props.item.id)}>
			<p>{props.item.item}</p>
		</main>
	);
};

export default Todo;

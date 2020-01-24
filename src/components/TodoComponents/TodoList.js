// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
	return (
		<div className='list'>
			{props.todos.map((task) => {
				return <Todo key={task.id} item={task} toggleCompleted={props.toggleCompleted} />;
			})}
			<button className='check-btn' onClick={props.todos}>
				Mark Completed
			</button>
		</div>
	);
};

export default TodoList;

import React from 'react';

export default function TodoForm(props) {
	return (
		<form onSubmit={props.submitTodo}>
			<input type='text' value={props.list} name='list' onChange={props.handleChanges} placeholder='Enter task here' />
			<button className='submit-btn'>Add</button>
			<button className='clear-btn' onClick={props.clearCompleted}>
				Clear Completed
			</button>
		</form>
	);
}

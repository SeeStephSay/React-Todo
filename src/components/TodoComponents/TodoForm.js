import React from 'react';

export default function TodoForm(props) {
	return (
		<form onSumbit={props.submitTodo}>
			<input type='text' value={props.list} name='list' onChange={props.handleChanges} />
			<button>Add</button>
			<button className='clear-btn' onClick={props.clearCompleted}>
				Clear clearCompleted
			</button>
		</form>
	);
}

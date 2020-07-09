import React from 'react';

const todos = [
	{
		item     : 'Go to grocery store',
		id       : Math.floor(Math.random() * 100),
		finished : false,
	},
	{
		item     : 'Go to work',
		id       : Math.floor(Math.random() * 100),
		finished : false,
	},
	{
		item     : "Don't suck at JavaScript",
		id       : Math.floor(Math.random() * 100),
		finished : false,
	},
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			todos,
		};
	}

	render() {
		return (
			<div>
				<h2>Welcome to your Todo App!</h2>
			</div>
		);
	}
}

export default App;

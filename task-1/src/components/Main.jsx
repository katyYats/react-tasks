import React from 'react';

const message = React.createElement('p', null, 'Hello React!');

class Main extends React.Component {
	render() {
		return <div>{message}</div>;
	}
}

export default Main;

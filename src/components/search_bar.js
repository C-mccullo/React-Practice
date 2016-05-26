import React, { Component } from "react";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		// to manually change the state use this.state
		this.state = { term: '' };
	}

	render() {
		// we "set" state with the new value of the input each time there is a change and out component is rendered
		// console.log(this.state.term);
		return (
			<div>
				<input value={ this.state.term } onChange={ event => this.setState({term: event.target.value}) } />
				
			</div>
		);
	}
}

export default SearchBar;

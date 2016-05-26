// react understands how to render the components into HTML but we need to include a library that knows how to render those elements to the DOM
import React, { Component } from 'react';
// ReactDOM knows how to render the components to the DOM
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const Api_Key = 'AIzaSyBlceOCerEMzouasuDtjslQKvo8itJdB_Q';

// App is the "top level" component.
// App needs to be a class based component instead of a functional based component so App can keep 
// track of the youtube api through its state.

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = { videos: [] };

		YTSearch({ key: Api_Key, term: 'surfing'}, (data) => {
			this.setState({ videos: data });
		});
	}
	// videos on VideoList is a "prop"
	render() {
		return (
			<div>
				<SearchBar/>
				<VideoDetail videos={this.state.videos[0]}/>
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// Take this component's generated HTML and put it on the page (in the DOM)
// To make an instance (instantiate) to a React component, wrap the component in jsx tags (<""/>);
ReactDOM.render(<App/>, document.querySelector('.container'));
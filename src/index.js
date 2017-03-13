import _ from 'lodash';
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
	// Setting the Initial State
	constructor(props){
		super(props);
		this.state = { 
			videos: [],
			selectedVideo: null
		};
		// The Initial Search on Load of App
		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		// function is within the constructor so that the search results happen immediately
		YTSearch({ key: Api_Key, term: term}, (data) => {
			// these are the youtube API initializers
			this.setState({ 
				videos: data,
				// on initial load, the first video in the videos list will be named selectedVideo
				selectedVideo: data[0]
			});
		});
	}

	// videos on VideoList is a "prop"
	render() {
		// debounce is used to "throttle" a function, it will take the inner function and return a "new" function that will only be called once every 300 milliseconds. 
		const videoSearch =_.debounce((term) => {this.videoSearch(term) },500);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
			{/* passing property of onVideoSelect to VideoList*/}
				<VideoList 
					videos={this.state.videos} 
					onVideoSelect={ (selectedVideo) => this.setState({ selectedVideo }) } 
				/>
			</div>
		);
	}
}

// Take this component's generated HTML and put it on the page (in the DOM)
// To make an instance (instantiate) to a React component, wrap the component in jsx tags (<""/>);
ReactDOM.render(<App/>, document.querySelector('.container'));
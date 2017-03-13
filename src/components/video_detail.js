import React from 'react';
// ES6: equal to props.video
const VideoDetail = ({video}) => {
	// if state for condition when video object is empty and waiting for API response
	if (!video) {
		// app loads up and when video array is empty this div will be rendered.
		return (

			<div className="notThereYet"> 
				<h2>Loading...</h2> 
			</div>
		);
	}

	const videoId = video.id.videoId;
	// String inTerpilation
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				{/*  */}
				<div> <h3>{video.snippet.title}</h3> </div>
				<div> <p> {video.snippet.description} </p> </div>
			</div>
		</div>
	);

};

export default VideoDetail;
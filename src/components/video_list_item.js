import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	// ES6: const {video} = props.video;
	// ES6: const {onVideoSelect} = props.onVideoSelect
	const imageUrl = video.snippet.thumbnails.default.url;
	return (
		// THIS IS A CALLBACK FUNCTION --- the function onVideoSelect was passed from App component to this callback function
		<li onClick = { () => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src = {imageUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading">
						{video.snippet.title}
					</div>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;
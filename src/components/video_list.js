 // This VideoList component has no need for state so will not need ReactDOM
import React from 'react';
import VideoListItem from './video_list_item';
const VideoList = (props) => {

	const videoItems = props.videos.map((video) => {
		return (
			// passing onVideoSelect function down to VideoList Item
			<VideoListItem 
				onVideoSelect={props.onVideoSelect} 
				key={video.etag} 
				video={ video } 
			/>
		);
	});

	return (
		<ul className="col-md-4 list-group">
			{ videoItems }
		</ul>
	); 
}

export default VideoList
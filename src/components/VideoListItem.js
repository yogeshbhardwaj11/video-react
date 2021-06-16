import '../css/VideoListItem.css'
import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	return(
		<div className='item video-list-item' onClick={() => onVideoSelect(video)}>
			<img className='ui image' src= {video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
			<div className='content'>
				<div className='header'>
					{video.snippet.title}
				</div>
			</div>
		</div>
	);
}

export default VideoListItem;
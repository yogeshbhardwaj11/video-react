import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({videos, onVideoSelect}) => {
	const renderedList = videos.map(video => {
		return <VideoListItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>;
	});
	return <div className='ui relaxed divided list'>{renderedList}</div>;
}

export default VideoList;
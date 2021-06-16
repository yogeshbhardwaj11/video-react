import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
	state = {videos: [], selecedVideo: null};
	
	componentDidMount(){
		this.onSearchSubmit('buildings');	
	}

	onSearchSubmit = async (term) => {
		const KEY = 'AIzaSyACK7wW4SrjDetrjHnZdexGCNMjx-Fzq7E';
		const response = await youtube.get('search',{
			params:{
				part: 'snippet',
				type: 'video',
				maxResult: 5,
				q: term,
				key: KEY
			}
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	}

	onVideoSelect =(video)=> {
		this.setState({selectedVideo: video});
	}

	render(){
		return(
			<div className = 'ui container'>
				<SearchBar onSubmit = {this.onSearchSubmit}/>
				<div className = 'ui grid'>
					<div className = 'ui row'>
						<div className = 'eleven wide column'>
							<VideoDetail video = {this.state.selectedVideo} />
						</div>
						<div className = 'five wide column'>
							<VideoList videos = {this.state.videos} onVideoSelect= {this.onVideoSelect}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
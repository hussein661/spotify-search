import React, { Component } from 'react';
import AlbumCard from '../../components/AlbumCard';
import Axios from 'axios';

class Albums extends Component {
	state = {
		albums: [],
        access_token: '',
        err:''
	};
	componentDidMount() {
		this.displayAlbums();
	}

	displayAlbums = () => {
		const { artist_id } = this.props.match.params;
		Axios.get(`https://api.spotify.com/v1/artists/${artist_id}/albums`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('access_token')}`,
			},
			params: {
				market: 'US',
				limit: 10,
				offset: 5,
			},
		})
			.then(r => {

                const albums = r.data.items;

				this.setState({ albums, name: albums[0].artists[0].name });
			})
			.catch(e => {
					if (e.response) {
						localStorage.clear();
						alert('unAuthorized access');
						this.props.history.push('/login');
					}
				})
			
	};

	render() {
		return (
			<div className="artists-page">
				<div className="albums-title">
					<h4>Albums</h4>
					<p>{this.state.name}</p>
				</div>
				<div className="artists-container">
					{this.state.albums.map(album => (
						<AlbumCard key={album.id} album={album} />
					))}
				</div>
				{!this.state.albums.length ? <h1>no record found</h1> : ''}
			</div>
		);
	}
}

export default Albums;

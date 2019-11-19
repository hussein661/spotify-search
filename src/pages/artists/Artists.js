import React, { Component } from 'react';
import ArtistCard from '../../components/ArtistCard';
import Axios from 'axios';

class Artists extends Component {
	state = {
		searchField: '',
		artists: [],
		access_token: '',
	};

	componentDidMount() {
		const access_token = localStorage.getItem('access_token');
		if (!access_token) {
			return this.props.history.push('/login');
		}
		return this.setState({ access_token });
	}

	searchForArtists = (query) => {
        this.setState({err:'',artists:[]})

		Axios.get('https://api.spotify.com/v1/search', {
			headers: {
				Authorization:
					`Bearer ${localStorage.getItem('access_token')}`,
			},
			params: {
				q: query || this.state.searchField,
				type: 'artist',
				market: 'US',
				limit: 10,
				offset: 5,
			},
		})
			.then(r => {
				const artists = r.data.artists.items;
                if(!artists.length){
                    return this.setState({err:'no artists found'})
                }
			return	this.setState({ artists });
			})
			.catch(e => {
                if(e.response.data.message === 'Invalid access token'){
                    localStorage.clear()
                    alert('unAuthorized access')
                    this.props.history.push('/login')
                }
            });
	};


	//this is for search on pressing enter
	onSubmit = e => {
		e.preventDefault();
		this.searchForArtists();
	};

	//this is for searching as we typing
	handleSearchChange = e =>{
		 this.setState({ searchField: e.target.value })
		 this.searchForArtists(e.target.value)
	}

	render() {
		return (
			<div className="artists-page">
				<div className="input-container">
					<form onSubmit={this.onSubmit}>
						<input
							type="text"
							className="search-input"
							placeholder="Search for an artist…"
							onChange={this.handleSearchChange}
						/>
					</form>
				</div>
				<div className="artists-container">
					{this.state.artists.map(artist => (
						<ArtistCard key={artist.id}  history={this.props.history} artist={artist} />
					))}
				</div>
                {this.state.err ? <h1 style={{textAlign:'center'}}>no artists found</h1> : ''}
			</div>
		);
	}
}

export default Artists;

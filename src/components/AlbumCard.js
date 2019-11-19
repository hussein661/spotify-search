import React, { Component } from 'react';

class AlbumCard extends Component {
	render() {
		let { name, release_date, artists, external_urls, images, total_tracks } = this.props.album;
		if (images.length === 0) {
			images.push({
				url: 'https://upload.wikimedia.org/wikipedia/en/2/21/%3F_XXXTENTACION_Cover.png',
			});
		}
		let artist_name = artists[0].name;
		return (
			<div className="artist-card">
				<div className="artist-image">
					<img width="100%" height="100%" src={images[0].url} alt="img" />
				</div>
				<div className="artist-content">
					<div className="artist-content-header">
						<h4>{name}</h4>
						<p>{artist_name}</p>
					</div>
					<div className="artist-content-footer">
						<p>{release_date}</p>
						<p>{total_tracks} tracks</p>
					</div>
				</div>
				<div className="spotify-link" style={{ textAlign: 'center' }}>
					<a href={external_urls.spotify} target="_blank" rel="noopener noreferrer">
						preview on spotify
					</a>
				</div>
			</div>
		);
	}
}

export default AlbumCard;

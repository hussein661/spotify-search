import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
class ArtistCard extends Component {
	render() {
		let { name, followers, popularity, id, images } = this.props.artist;
		if (images.length === 0) {
			images.push({
				url: 'http://www.thurcroftinfant.co.uk/wp-content/uploads/2013/10/no-user-300x300.jpg',
			});
		}
		return (
			<div className="artist-card" onClick={_ => this.props.history.push(`/artist/${id}`)}>
				<div className="artist-image">
					<img width="100%" height="100%" src={images[0].url} alt="img" />
				</div>
				<div className="artist-content">
					<div className="artist-content-header">
						<h4>{name}</h4>
						<p>{followers.total} followers</p>
					</div>

					<div className="artist-content-footer">
						<Box component="fieldset" mb={3} borderColor="transparent">
							<div style={{ marginTop: '30px' }}>
								<Rating name="read-only" value={(popularity * 5) / 100} precision={0.5} readOnly />
							</div>
						</Box>
					</div>
				</div>
			</div>
		);
	}
}

export default ArtistCard;

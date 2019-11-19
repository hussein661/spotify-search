import React, { Component } from 'react';
import Axios from 'axios';

class Login extends Component {
	login = () => {
        let client_id = '98fbb2264f4240429b6c01d83a2dc4ca'
		Axios.get('https://accounts.spotify.com/authorize', {
			params: {
				client_id,
				redirect_uri: 'http://localhost:3000',
				response_type: 'token',
				client_secret: 'bc4fc93b06a149eaad482da48375b70c',
			},
			headers: { 'Access-Control-Allow-Origin': '*' },
		})
			.then(r => console.log(r))
			.catch(e => {
                window.open(`https://accounts.spotify.com/en/authorize?client_id=${client_id}&redirect_uri=http:%2F%2Flocalhost:3000%2Fcallback%2F&response_type=token`)

            });
	};

	render() {
		return (
			<div className="login-page">
				<button className="login-button" onClick={this.login}>
					Login <i className="fa fa-spotify"></i>
				</button>
			</div>
		);
	}
}

export default Login;

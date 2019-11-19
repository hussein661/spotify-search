import React, { Component } from 'react';

class CallBack extends Component {


    componentDidMount() {
        const hash =  this.props.location.hash
        const start = hash.indexOf('token=')
        const end = hash.indexOf('&token')
        const access_token = hash.slice(start + 6,end)
        localStorage.setItem("access_token",access_token)
        this.props.history.push('/')
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default CallBack;
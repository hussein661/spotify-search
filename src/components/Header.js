import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class Header extends Component {

    logout = ()=>{
        localStorage.clear()
        this.props.history.push('/login')
    }

    render() {
        return (
            <div className='header-title' style={{display:'flex',justifyContent:'space-between'}}>
               <h2>
                    ARTIST SEARCH
                </h2>
                    <button  style={{height:'30px',marginTop:'15px',display:window.location.pathname === '/login' ? 'none' : ''}} onClick={this.logout}>logout</button>
            </div>
        );
    }
}

export default withRouter(Header)
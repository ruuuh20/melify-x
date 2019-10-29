import React, { Component } from "react";

import hash from "./hash";
import "./App.css";
import "./NewReleases.css";
import NewSlider from './NewSlider'

class NewReleases extends Component {
    constructor() {
        super();
        this.state = {
            token: null,
            
           albums: [],
            type: ""
        };
        this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    }
    componentDidMount() {
        // Set token
        let _token = hash.access_token;

        if (_token) {
            // Set token
            this.setState({
                token: _token
            });
            this.getCurrentlyPlaying(_token);
        }
    }

    getCurrentlyPlaying(token) {
        fetch("https://api.spotify.com/v1/browse/new-releases?limit=18", {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                albums: data.albums.items,
                     type: data.type
            })
        })
    }

    render() {

        const albums = this.state.albums;
        console.log(albums[1]);
        let renderInfo;

        if (this.state.albums[1]) {
            renderInfo = (
                <div>
                
                <div className="promotions-content">
                    This week: New {this.state.albums[1].album_type}<br/>
                    {this.state.albums[1].artists.map(n => n.name )}<br/>
                    {this.state.albums[1].name}
                </div>
                </div>
            )
        } else {
            renderInfo = null
        }

        return (
            <div className="first-row">
                {this.state.token &&
                <h4>New Releases</h4> }

                <div className="new-releases-container">
                    <NewSlider> {this.state.albums.map(a => (
                        <div className="albums-grid">
                            <img src={a.images[1].url} alt="new-album-image"></img>
                            <span>{a.artists[0].name}</span>
                        </div>
                    )
                    )}
                    </NewSlider>
                </div>

                <div className="promotion-container">
                    <div className="image-top">
                            {this.state.albums[1] ? <img src={this.state.albums[1].images[1].url} alt="promotion image"></img> : null }
                    </div>
                    <div className="content-bottom">
                            {renderInfo}
                    </div>
                 </div>
                 <div className="third-column">
                    {this.state.token &&
                    <span>You are logged in.</span>}
                 </div>
              

            </div>
        );
    }
}

export default NewReleases;


import React, { Component } from "react";
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash";
import Player from "./Player";
import logo from "./logo.svg";
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

    // getCurrentlyPlaying(token) {
    //     // Make a call using the token
    //     $.ajax({
    //         url: "https://api.spotify.com/v1/browse/new-releases?limit=18",
    //         type: "GET",
    //         beforeSend: (xhr) => {
    //             xhr.setRequestHeader("Authorization", "Bearer " + token);
    //         },
    //         success: (data) => {
    //             console.log("data", data);
    //             this.setState({
                    
    //                 albums: data.albums.items,
    //                 type: data.type,
    //             });
    //         }
    //     });
    // }

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
                <div className="promotions-content">
                New {this.state.albums[1].album_type}<br/>
                {this.state.albums[1].artists.map(n => n.name )}<br/>
                {this.state.albums[1].name}
                </div>
            )
        } else {
            renderInfo = 'no'
        }

        return (
            <div className="first-row">

                <div className="new-releases-container">
                    <NewSlider>      {this.state.albums.map(a => (
                        <div className="albums-grid">
                            <img src={a.images[1].url}></img>

                            <span>{a.name}</span>


                        </div>
                    )
                    )}
                    </NewSlider>
                </div>
                <div className="promotion-container">
                <div className="image-top">
                        {this.state.albums[1] ? <img src={this.state.albums[1].images[1].url}></img> : 'no' }
                    
                </div>
                <div className="content-bottom">
                        {renderInfo}
                 
                    
                    
                </div>
            </div>
              

            </div>
        );
    }
}

export default NewReleases;


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

    getCurrentlyPlaying(token) {
        // Make a call using the token
        $.ajax({
            url: "https://api.spotify.com/v1/browse/new-releases?limit=18",
            type: "GET",
            beforeSend: (xhr) => {
                xhr.setRequestHeader("Authorization", "Bearer " + token);
            },
            success: (data) => {
                console.log("data", data);
                this.setState({
                    
                    albums: data.albums.items,
                    type: data.type,
                });
            }
        });
    }

    render() {

        return (
            <div className="new-releases-container">
                <NewSlider>      {this.state.albums.map(a => (
                    <div className="albums-grid">
                        <img src={a.images[1].url}></img>

                        <span>{a.name}</span>


                    </div>
                )
                )}</NewSlider>
                
            </div>
        );
    }
}

export default NewReleases;

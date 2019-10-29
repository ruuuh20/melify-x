import React, { Component } from "react";

import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash";
import Player from "./Player";
import logo from "./logo.svg";
import "./App.css";
import NewSlider from './NewSlider';
import NewReleases from "./NewReleases";
import Featured from './Featured';
import Chart from './Chart';
import Nav from './Nav'

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms:0,
      },
      is_playing: "Paused",
      progress_ms: 0,
      featured: [],
      chart: []
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
      this.getTopTracks(_token)
    }
  }

  // getCurrentlyPlaying(token) {
  //   // Make a call using the token
  //   $.ajax({
  //     url: "https://api.spotify.com/v1/me/player",
  //     type: "GET",
  //     beforeSend: (xhr) => {
  //       xhr.setRequestHeader("Authorization", "Bearer " + token);
  //     },
  //     success: (data) => {
  //       console.log("data", data);
  //       this.setState({
  //         item: data.item,
  //         is_playing: data.is_playing,
  //         progress_ms: data.progress_ms,
  //       });
  //     }
  //   });
  // }
  // getCurrentlyPlaying(token) {
  //   fetch("https://api.spotify.com/v1/me/player", {
  //     headers: {
  //       'Authorization': 'Bearer ' + token
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({
  //       item: data.item,
  //         is_playing: data.is_playing,
  //         progress_ms: data.progress_ms,
  //     })
  //   })
  // }

  getTopTracks(token) {
    fetch("https://api.spotify.com/v1/playlists/37i9dQZEVXbLRQDuF5jeBp/tracks?limit=10", {
        headers: {
          'authorization': 'Bearer ' + token
        }
      })
      .then((response => response.json()))
      .then(data => {
        console.log(data)
        this.setState({
          chart: data.items
        })
      })

  }



  // getCurrentlyPlaying(token) {
  //   Promise.all([
      
  //      fetch("https://api.spotify.com/v1/browse/featured-playlists?limit=6", {
  //        headers: {
  //          'authorization': 'Bearer ' + token
  //        }
  //      }),
  //     fetch("https://api.spotify.com/v1/playlists/37i9dQZEVXbLRQDuF5jeBp/tracks?limit=10", {
  //       headers: {
  //         'authorization': 'Bearer ' + token
  //       }
  //     })
  //       // .then(values => Promise.all(values.map(value => value.json()))) 
  //       // should be an array
  //       // .then(([fetchOne, fetchTwo]) => {
  //       //   let dataMap = {}
  //       //   let collection = [...fetchOne, ...fetchTwo]
  //       //   console.log(collection)
  //       // })
  //     // .then(function(values) {
  //     //   return values.json()
  //     // })
  //       .then((responses1, responses2) => {
  //         // all responses are resolved successfully
  //         for (let response of responses1) {
  //           console.log(`${response.url}: ${response.status}`); // shows 200 for every url
  //         }

  //         return responses1;
  //       })
  //       // map array of responses into array of response.json() to read their content
  //       .then(responses => Promise.all(responses.map(r => r.json())))
      
  //       // .then(data => {
  //       //   data[0].json()
  //       //   data[1].json()
     
  //       // })
  //       .then((responseText) => {
  //         console.log(responseText);

  //       }).catch((err) => {
  //         console.log(err);
  //       })


  //   ])
  // }

  getCurrentlyPlaying(token) {
    fetch("https://api.spotify.com/v1/browse/featured-playlists?limit=6", {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        featured: data.playlists.items
      })
    })
  }
 
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data.playlists.items)
  //   this.setState({
  //     featured: data.playlists.items
  //   })
  // })
  // }

  render() {

    return (
      <div className="main-wrapper">
        <header className="App-header">
          <Nav />
       
          {!this.state.token && (
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}
       
        </header>
        <div className="container">
          <NewReleases />
          <div className="second-row">
          <Featured 
            featured={this.state.featured} 
            />
            <Chart chart={this.state.chart} />
          </div>

       
     
        </div>
      </div>
    );
  }
}

export default App;


// {
//   this.state.item && (
//     <Player
//       item={this.state.item}
//       is_playing={this.state.is_playing}
//       progress_ms={this.progress_ms}
//     />
//   )
// }
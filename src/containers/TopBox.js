import React, { Component } from 'react';
import SongList from '../components/SongList'
import './TopBox.css'

class TopBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      topSongs: []
    };
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({topSongs: data.feed.entry}))
  }

  render(){
    return(
      <div className="top-box">
        <h1>UK Top 20</h1>
        <SongList songslist={this.state.topSongs}/>
      </div>
    );
  }
}

export default TopBox

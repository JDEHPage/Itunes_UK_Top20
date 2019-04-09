import React from 'react';
import Song from './Song';
import './SongList.css';

const SongList = (props) => {

  const allSongs = props.songslist.map((song, index) => {
    return(
      <Song key={index} position={index} song={song}></Song>
    );
  })

  return (
    <div className="song-list">
      {allSongs}
    </div>
  );
}

export default SongList;

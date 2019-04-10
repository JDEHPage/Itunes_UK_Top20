import React from 'react';
import './Song.css';

const Song = (props) => {
  return(

    <div className="songs">
      <h2>No.{ props.position+1 }</h2>
      <img src={ props.song["im:image"][2].label } alt="blank"/>
      <p>Title: { props.song["im:name"].label }</p>
      <p>Artist: { props.song["im:artist"].label }</p>
      <audio controls="controls" src={ props.song.link[1].attributes.href }/>
    </div>
  )
}

export default Song;

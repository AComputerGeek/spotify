// @author: Amir Armion
// @version: V.01

import React from 'react';
import albums from './data';
import play from '../images/play.png';

function TrackList({currentAlbumId}) 
{
  return (
    <ol>
      {(albums[currentAlbumId].tracks.map((track) => 
        (<li key={track}>{track}<img className="playIcon" src={play}/></li>)
      ))}
    </ol>
  );
}

export default TrackList;

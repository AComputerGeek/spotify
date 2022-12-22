// @author: Amir Armion
// @version: V.01

import React from 'react';
import albums from './data';
import TrackList from './TrackList';

function AlbumViewer({currentAlbumId}) 
{
  return (
    <div className='albumViewer'>
      <h2>Selected Album:</h2>
      <div className='albumViewerContent'>
        <img  className='albumViewerPic' 
              src={albums[currentAlbumId].coverImg} 
              alt={albums[currentAlbumId].name} 
        />
        <div className='selectedAlbumContent'>
          <h3>Album Name: <span className='albumTitle'>&ldquo;{albums[currentAlbumId].name}&rdquo;</span></h3>
          <h3>Tracks:</h3>
          <TrackList currentAlbumId={currentAlbumId}/>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default AlbumViewer;

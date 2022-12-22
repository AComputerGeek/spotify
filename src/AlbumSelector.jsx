// @author: Amir Armion
// @version: V.01

import React from 'react';
import AlbumList from './AlbumList';

function AlbumSelector({handleState}) 
{
  return (
    <div className='albumSelector'>
      <h2>Select an album:</h2>
      <AlbumList handleState={handleState}/>
    </div>
  );
}

export default AlbumSelector;

// @author: Amir Armion
// @version: V.01

import React from 'react';

function Album({album, handleState}) 
{
  const selected = () => (handleState(album.id));
  // OR
  // function selected()
  // {
  //   return handleState(album.id);
  // }

  return (
    <div className='albumContainer'>
      <img  onClick={selected}
            className='albumCover' 
            src={album.coverImg} 
            alt={album.name}
      />
      <p className='albumName'>{album.name}</p>
    </div>
  )
}

export default Album;

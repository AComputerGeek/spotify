// @author: Amir Armion
// @version: V.01

import React from 'react';
import Album from './Album';
import albums from './data';

function AlbumList({handleState}) 
{
  return (
    <div>
      {albums.map((album) => (<Album key={album.id} album={album} handleState={handleState}/>))}
    </div>
  );
}

export default AlbumList;

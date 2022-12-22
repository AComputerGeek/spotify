// @author: Amir Armion
// @version: V.01

import { useState } from 'react';
import AlbumViewer from './AlbumViewer';
import AlbumSelector from './AlbumSelector';
import './App.css';

function App() 
{
  const [currentAlbumId, setCurrentAlbumId] = useState(0);

  const handleState = (albumId) => (setCurrentAlbumId(albumId));
  // OR
  // function handleState(albumId)
  // {
  //   return setCurrentAlbumId(albumId);
  // }

  return (
    <div className="App">
      <AlbumViewer currentAlbumId={currentAlbumId}/>
      <AlbumSelector handleState={handleState}/>
    </div>
  );
}

export default App;

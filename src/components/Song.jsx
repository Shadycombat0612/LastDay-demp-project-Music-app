import { useState } from "react";  // Import the useState hook for managing state.

// Functional component for rendering a single song.
// 20. Render the song artwork.
// 23. Render the artist and track name.

/// It receives individual song data as props and displays the song's artwork, artist name, and track name.

export const Song = ({ fn, song }) => {
  console.log(song);
  const [playerFlag, setPlayerFlag] = useState(false);  // Initialize state for player visibility.

  const showPlayer = () => {
    fn(true, song);  // Call the provided function to show the player with the current song.
  };

  return (
    <div className="row">
      <div className="col-4">
        <img src={song.artworkUrl100} alt="Song Artwork" />  
      </div>
      <div className="col-4">
        {song.artistName} - {song.trackName}  
      </div>
      <div className="col-4">
        <button onClick={showPlayer} className="btn btn-warning">
          Play now
        </button>
      </div>
    </div>
  );
};

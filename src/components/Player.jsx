// Functional component for the player.
//20. Render the song artwork.
//22. Render the artist name.
//23. Render the track name.
 //28. Render the audio player with the song's preview URL.
//////This file defines a component responsible for rendering an audio player when a song is selected for playback.

export const Player = ({ fn, song }) => {
  return (
    <div className="player-container">
      <button
        onClick={() => {
          fn(false, null);  // Call the provided function to hide the player.
        }}
        className="btn btn-danger"
      >
        Back
      </button>
      <p className="song-details">
        <img src={song.artworkUrl100} alt="Song Artwork" />  
        <br />
        <span className="artist-name">{song?.artistName}</span>  
        <span className="track-name">{song?.trackName}</span>  
      </p>
      <br />
      <br />
      <audio controls>
        <source src={song?.previewUrl} type="audio/mp4" /> 
        doesn't support
      </audio>
    </div>
  );
};

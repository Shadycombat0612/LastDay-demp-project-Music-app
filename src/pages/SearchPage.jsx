import { useEffect, useState } from "react"; 
import Navbar from "../components/Navbar";  // Import React hooks for state and side effects.
import { Search } from "../components/Search";  // Import the Search component.
import { Songs } from "../components/Songs";  // Import the Songs component.
import { getSongs } from "../services/api-client";  // Import the function to fetch songs.
import { Player } from "../components/Player";  // Import the Player component.

export const SearchPage = () => {
  const [allSongs, setSongs] = useState([]);  // Initialize state for storing songs.

  const [flag, setFlag] = useState(false);  // Initialize state for player visibility.
  const [song, setPlayerSong] = useState(null);  // Initialize state for the currently playing song.

  const loadSongs = async () => {
    setSongs(await getSongs('latest songs'));  // Load songs using the getSongs function.
  };
  
  useEffect(() => {
    loadSongs();  // Load songs when the component mounts.
  }, []);

  const togglePlayer = (flag, songarg) => {
    setPlayerSong(songarg);  // Set the song for the player.
    setFlag(flag);  // Toggle the player's visibility.
  };

  const getArtistName = async (artistName) => {
    console.log('rec artist name', artistName);
    setSongs(await getSongs(artistName));  // Load songs based on artist name.
  };
// 45.Render the Player component or the Search and Songs components.
 //36. Render the Search component with a callback
// 37.Render the Songs component with a callback and song data.
// 43.Render the app title.
  const jsx = (
    <>
    
      <Search fn={getArtistName} />  
      <Songs fn={togglePlayer} allsongs={allSongs} />  
    </>
  );

  return (
    <div>
    <Navbar />
    <div className="container">
      <h1 className="alert alert-danger text-center title">THE MUSIC BANGER</h1>  

      {flag ? <Player fn={togglePlayer} song={song} /> : jsx}  
    </div>
    </div>
  );
};

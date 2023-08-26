//The purpose of this component is to display the search results in a user-friendly way.

import { Song } from "./Song";  // Import the Song component.

// Functional component for rendering a list of songs.
export const Songs = ({ fn, allsongs }) => {
  console.log('*All songs', allsongs);
  return (
    <>
     <div className="row"></div>
      {allsongs.map((currentSong, index) => (
        <Song fn={fn} key={index} song={currentSong} />  // Render each song using the Song component.
      ))}
    </>
  );
};

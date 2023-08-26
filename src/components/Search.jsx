
//This file defines a component responsible for rendering a search bar. Users can input an artist's name and initiate a search.

import { useRef } from "react";  // Import the useRef hook for creating a ref.

// Functional component for the search bar.
export const Search = ({ fn }) => {
  const artist = useRef();  // Create a ref for the artist input field.
  
  return (
    <>
      <label className="songname">Song Name</label>
      <input
        ref={artist}
        type="text"
        className="form-control"
        placeholder="Search by artist name"
      />
      <button
        className="btn btn-danger"
        onClick={() => {
          fn(artist.current.value);  // Call the provided function with the input value.
        }}
      >
        Search
      </button>
    </>
  );
};

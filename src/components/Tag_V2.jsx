import React, { useState } from "react";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("dog");
  const { gif, fetchGif } = useGif(tag);

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img width="500" src={gif} alt="RandomGif" />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGif(tag)}>Generate a GIF</button>
    </div>
  );
};

export default Tag;

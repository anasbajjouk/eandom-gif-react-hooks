import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState("dogs");
  const [gif, setGif] = useState("");

  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;

    setGif(imageSrc);
  };

  const handleClick = () => {
    fetchGif(tag);
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img width="500" src={gif} alt="RandomGif" />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>Generate a random GIF</button>
    </div>
  );
};

export default Tag;

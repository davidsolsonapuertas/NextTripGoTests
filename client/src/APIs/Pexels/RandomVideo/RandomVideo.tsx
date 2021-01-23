import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../pexels.css';
import { PexelKey } from '../../../config';

function RandomVideo() {
  const [videos, setVideos]: any[] = useState([]);

  const getVideos = async () => {
    try {
      const data = await axios.get(
        'https://api.pexels.com/videos/search?query=travel&size=small&per_page=30',
        {
          headers: {
            Authorization: `${PexelKey}`,
          },
        }
      );
      // console.log('videodata', data?.data?.videos);
      setVideos(data?.data?.videos);
    } catch (e) {
      console.log(e);
    }
  };

  function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(29));
  }

  useEffect(() => {
    getVideos();
  }, []);

  console.log(videos)
  console.log(videos?.length > 0)
  return (
    <div data-testid='random-video'>
      {videos?.length > 0 && (
        <video data-testid='velement'
          src={videos[getRandomInt()].video_files[0].link}
          autoPlay
          loop
          muted
        ></video>
      )}
    </div>
  );
}

export default RandomVideo;

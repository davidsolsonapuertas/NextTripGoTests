import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import RandomVideo from './RandomVideo.tsx';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import axios from 'axios';

jest.mock('axios');

describe('RandomVideo', () => {
  it('should render a random from the pexels API', async () => {


    axios.get.mockResolvedValue({
      data:{ "videos": [
        {
          "id": 1448735,
          "width": 4096,
          "height": 2160,
          "url": "https://www.pexels.com/video/video-of-forest-1448735/",
          "image": "https://images.pexels.com/videos/1448735/free-video-1448735.jpg?fit=crop&w=1200&h=630&auto=compress&cs=tinysrgb",
          "duration": 32,
          "user": {
            "id": 574687,
            "name": "Ruvim Miksanskiy",
            "url": "https://www.pexels.com/@digitech"
          },
          "video_files": [
            {
              "id": 58649,
              "quality": "sd",
              "file_type": "video/mp4",
              "width": 640,
              "height": 338,
              "link": "https://player.vimeo.com/external/291648067.sd.mp4?s=7f9ee1f8ec1e5376027e4a6d1d05d5738b2fbb29&profile_id=164&oauth2_token_id=57447761"
            },
            {
              "id": 58650,
              "quality": "hd",
              "file_type": "video/mp4",
              "width": 2048,
              "height": 1080,
              "link": "https://player.vimeo.com/external/291648067.hd.mp4?s=94998971682c6a3267e4cbd19d16a7b6c720f345&profile_id=175&oauth2_token_id=57447761"
            },
          ],
        }
      ]
    }
  })

  render(<RandomVideo />)
  const element = await waitFor(() => screen.getByTestId('velement'));
  expect(element).toBeInTheDocument();




  // const { container } = render(<RandomVideo />);

  // // await waitFor(() => expect(screen.getByTestId('video-element')).toBeInTheDocument())
  // await waitFor(expect(screen.getByTestId('random-video')).toBeInTheDocument());
  // expect(container.firstChild)
  // const video = await RandomVideo();
  // expect().toEqual(1448735);
  })
});


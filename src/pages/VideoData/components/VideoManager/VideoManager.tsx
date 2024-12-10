import React, { useState } from "react";
import VideoList from "./VideoList";
import AddVideo from "./AddVideo";
import { Container, Grid, Box } from "@mui/material";

interface Video {
  id: string;
  url: string;
  title: string;
  opponent: string;
  team: string;
}

const VideoManager: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([
    {
      id: "1",
      url: "https://www.youtube.com/embed/jFHc9BimQ8c?si=EP41n9d2ruzBfHUk", // Użyj poprawnego URL do osadzenia
      title: "Liga",
      opponent: "Sparta Katowice",
      team: "Raków II",
    },
  ]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const addVideo = ({
    url,
    title,
    opponent,
    team,
  }: {
    url: string;
    title: string;
    opponent: string;
    team: string;
  }) => {
    const newVideo: Video = {
      id: Date.now().toString(),
      url,
      title,
      opponent,
      team,
    };
    setVideos((prevVideos) => [...prevVideos, newVideo]);
  };

  const handleSelectVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  return (
    <Container>
      <Box mb={2}>
        <AddVideo onAddVideo={addVideo} />
      </Box>
      <Grid container spacing={1} alignItems="flex-start">
        <Grid item xs={12} sm={6}>
          <VideoList videos={videos} onSelectVideo={handleSelectVideo} />
        </Grid>
      </Grid>
      {selectedVideo && (
        <Box mt={2}>
          <iframe
            width="560"
            height="315"
            src={selectedVideo.url} // Użyj bezpośredniego URL do osadzenia
            title={selectedVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </Box>
      )}
    </Container>
  );
};

export default VideoManager;

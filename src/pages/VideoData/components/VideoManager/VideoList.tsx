import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

interface Video {
  id: string;
  title: string;
  url: string;
  opponent: string;
  team: string;
}

interface VideoListProps {
  videos: Video[];
  onSelectVideo: (video: Video) => void;
}

const VideoList: React.FC<VideoListProps> = ({ videos, onSelectVideo }) => {
  return (
    <List dense>
      {videos.map((video) => (
        <ListItem button key={video.id} onClick={() => onSelectVideo(video)}>
          <ListItemText
            primary={`${video.title} - Zespół: ${video.team} - Przeciwnik: ${video.opponent}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default VideoList;

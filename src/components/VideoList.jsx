import { useContext } from "react";
import Video from "./Video";
import PlayButton from "./playButton";
import useVideos from "../hooks/VideosHooks";
function VideoList({deleteVideo,editvideo}){
    const videos = useVideos();
    return(
        <>
        {videos.map((video) => (
            <Video
              key={video.id}
              title={video.title}
              views={video.views}
              time={video.time}
              channel={video.channel}
              verified={video.verified}
              id={video.id}
              deleteVideo = {deleteVideo}
              editvideo = {editvideo}
            >
              <PlayButton
                onPlay={() => console.log('Playing..',video.title)}
                onPause={() => console.log('Paused..',video.title)}
              >
                {video.title}
              </PlayButton>
            </Video>
          ))}
          </>
    )
}

export default VideoList;
import './App.css'
import AddVideo from './components/addVideo.jsx';
import Counter from './components/Counter.jsx';
import PlayButton from './components/playButton.jsx';
import Video from './components/Video.jsx'
import VideoList from './components/VideoList.jsx';
import videoDB from './data/data.jsx'
import ThemeContext from './context/ThemeContext.jsx';
import { useContext, useReducer, useState } from 'react';
import VideosContext from './context/VideosContext.jsx';

// function App() {     //parent Component, App er first latter uppercase hote hobe always 
//   let obj = {
//     title:"MongoDB Tutorial",
//     views:"300k" ,
//     time:"3 year ago",
//     verified: true
//   }
//   return (
//     <div className='App'>
//     <p>Videos</p>
//     <Video title="React JS Tutorial" views="100k" time="1 year ago" verified={false}></Video>
//     <Video title="Node JS Tutorial" views="200k" time="2 year ago" verified={false}></Video>  
//     <Video {...obj}></Video> 
//     </div>

//   )

// }


function App() {     //parent Component, App er first latter uppercase hote hobe always 
  console.log("App Render");
  const [editableVideo, setEditableVideo] = useState(null);

  function videoReducer(videos,action){
    switch(action.type){
      case 'ADD':
        return [...videos,{ ...action.payload,id:videos.length+1}]
      
      case 'DELETE':
        return videos.filter(video=>video.id!==action.payload)

      case 'UPDATE':{
        const index = videos.findIndex(v=>v.id===action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index,1,action.payload);
        setEditableVideo(null);
        return newVideos;
      }
        
      default:
        return videos

    }
  }

  const[videos,dispatch] = useReducer(videoReducer,videoDB);
  // const [videos, setVideos] = useState(videoDB);

  const themeContext = useContext(ThemeContext);

  console.log({themeContext});

  function addVideos(video){
    dispatch({type:'ADD',payload:video});
    // setVideos([...videos,{ ...video,id:videos.length+1}]);
  }
  function deleteVideo(id){
    dispatch({type:'DELETE',payload:id});
    // setVideos(videos.filter(video=>video.id!==id));
  }
  function editVideo(id){
    setEditableVideo(videos.find(video=>video.id===id));
  }
  function updateVideo(video){
    dispatch({type:'UPDATE',payload:video});
    // const index = videos.findIndex(v=>v.id===video.id);
    // const newVideos = [...videos];
    // newVideos.splice(index,1,video);
    // setVideos(newVideos);
  }
  return (
    <VideosContext.Provider value={videos}>
    <div className='App' onClick={()=>console.log("App")}>
    <Counter></Counter>
    {/* <button  onClick={()=>{
      setVideos([...videos,{ id:3,
        title: 'Vue JS tutorial',
        views: '400k',
        time: '4 year ago',
        channel: 'Coder Dost',
        verified: false
      }]);
    }}>Add New Video</button> */}
    <AddVideo addVideos={addVideos} updateVideo = {updateVideo} editableVideo = {editableVideo}></AddVideo>
    <VideoList deleteVideo={deleteVideo} editvideo={editVideo}></VideoList>
    </div>
    </VideosContext.Provider>


  );

}


export default App;

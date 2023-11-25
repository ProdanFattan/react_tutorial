import './addVideo.css' 

import { useEffect, useRef, useState } from 'react';
function AddVideo({addVideos,updateVideo,editableVideo}){
    const[video,setVideo] = useState({
        time: '4 year ago',
        channel: 'Coder Dost',
        verified: false,
        title:'',
        views:''
    });
    const inputRef = useRef(null);
    function handleSubmit(e){
        e.stopPropagation();
        e.preventDefault();
        if(editableVideo){
            updateVideo(video);
        }
        else{
            addVideos(video);
        }
        setVideo({
            time: '4 year ago',
            channel: 'Coder Dost',
            verified: false,
            title:'',
            views:''
        });
        // console.log(video);
    }
    function handleChange(e){
        e.stopPropagation();
        //console.log(e.target.name,e.target.value);
        setVideo({...video,
            [e.target.name] : e.target.value,

        })

    }

    useEffect(()=>{
        if(editableVideo){
            setVideo(editableVideo);
        }
        // inputRef.current.value = "demo";
        // inputRef.current.focus();
        // inputRef.current.placeholder = "";
        // "type here".split('').forEach((char)=>{
        //     setTimeout(()=>{
        //         inputRef.current.placeholder = inputRef.current.placeholder + char;
        //     })
        // },100)
    },[editableVideo])

    return(
        <form action="">
            <input ref = {inputRef} type="text" name = "title" placeholder='title' onChange={handleChange} value={video.title}/>
            <input type="text" name = "views" placeholder='views' onChange={handleChange} value={video.views}/>
            <button
                onClick={handleSubmit}
            >{editableVideo ? 'Edit' : 'Submit'}</button>
        </form>
    )
}

export default AddVideo;
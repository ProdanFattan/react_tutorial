import './playButton.css';
import { useState } from 'react';
function PlayButton({message,children, onPlay, onPause}){
    console.log("PlayButton Render");
    const [playing, setPlaying] = useState(false);
    function handleClick(e){
        console.log(e);
        e.stopPropagation();
        console.log(message);
        if(playing){
            onPause();
        }
        else {
            onPlay();
        }
        setPlaying(playing=>!playing); 

    }
    return(
        // <button onClick={()=>console.log('Play')}>Play</button>
        <button onClick={handleClick}>{children} : {playing ? '>': '||'}</button>
    )
}

export default PlayButton;
import './Video.css'

function Video({title="No title",id,views="0 Views",time="0 second ago",verified,children,deleteVideo,editvideo}){
    console.log("Video Render");
    let channel = "Code Fest"
    return (
    <>
        <div className='container'>
        <button className='close' onClick={()=>deleteVideo(id)}>X</button>
        <button className='edit' onClick={()=>editvideo(id)}>...</button>
        <div className='pic'>
        <img src={`https://picsum.photos/id/${id}/160/90`} alt="image-holder" />
        </div>
        <div className='title'>{title}</div>
        <div className='channel'>{channel} {verified ? '✅' : null}</div>
        <div className='views'>
            {views} views <span>|</span> {time}
        </div>
        <div>
            {children}
        </div>
        </div>
    </>
    );
}

export default Video ;
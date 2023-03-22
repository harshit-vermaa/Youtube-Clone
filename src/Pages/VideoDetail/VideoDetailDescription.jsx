import React from 'react'
import Style from '../VideoDetail/VideoDetailDescription.module.css'
import ChannelDetail from '../ChannelDetais/ChannelDetail'


const VideoDetailDescription = ({ videoTitle, channelTitle, videoViewCount, videoLikeCount }) => {
    return (
        <>
            <div className={Style.videoDeatil_videoDescription}>
                <h1>{videoTitle}</h1>
                <div className={Style.videoDetail_videoDescription_profile}>
                    <button className={Style.videoDetail_videoDescription_profile_channelName} onClick={<ChannelDetail />} >{channelTitle}</button>
                    <div className={Style.videoDetail_videoDescription_profile_detail}>
                        <p>Total views : {videoViewCount}</p>
                        <p>Total likes : {videoLikeCount}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoDetailDescription
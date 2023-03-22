import React from 'react'
import { Link } from 'react-router-dom'
import Style from "./VideoCard.module.css"
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../../../Utilities/Constants'



const VideoCard = ({ video: { id: { videoId }, snippet } }) => {



    return (
        <div className={Style.videoCard}>
            <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl} >
                <img src={snippet.thumbnails.high.url} alt={snippet.title} className={Style.videoCard_thumbnail} />
            </Link>
            <div className={Style.videoCard_content}>
                <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl} >
                    <p className={Style.videoCard_content_title}>
                        {snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </p>
                </Link>
                <Link to={snippet.channelId ? `/videos/${snippet.channelId}` : demoChannelUrl} >
                    <p className={Style.videoCard_content_channelName}>
                        {snippet.channelTitle || demoChannelTitle}
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default VideoCard
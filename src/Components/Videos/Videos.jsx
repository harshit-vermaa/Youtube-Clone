import React from 'react'
import Style from "./Videos.module.css"
import VideoCard from '../Cards/VideoCard/VideoCard'
import ChannelCard from '../Cards/ChannelCard/ChannelCard'

const Videos = ({ selectedCategorie, videos }) => {
    // console.log(videos)

    return (
        <>
            <div className={Style.videos}>
                <div className={Style.videos_fullCard}>
                    {
                        videos.map((data, idx) => (

                            <div key={idx}>
                                {data.id.videoId && <VideoCard video={data} />}
                                {data.id.channelId && <ChannelCard channelDetail={data} />}
                            </div>


                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Videos;
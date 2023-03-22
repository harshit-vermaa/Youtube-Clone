import React from 'react'
import { Link } from 'react-router-dom'
import Style from '../ChannelCard/ChannelCard.module.css'
import { demoChannelTitle } from '../../../Utilities/Constants'
import Loading from '../../../Pages/Loading'


const ChannelCard = ({ channelDetail }) => {

    if (!channelDetail) return <Loading />
    // const { snippet } = channelDetail;

    return (

        <Link to={`/channel/${channelDetail.snippet.channelId}`} >
            <div className={Style.channelCard} >
                <img className={Style.channelCard_thumbnail} src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.channelTitle} />
                <div className={Style.channelCard_content}>
                    <p className={Style.channelCard_content_channelName}>
                        {channelDetail.snippet.channelTitle || demoChannelTitle}
                    </p>
                </div>
            </div>
        </Link>

    )
}

export default ChannelCard

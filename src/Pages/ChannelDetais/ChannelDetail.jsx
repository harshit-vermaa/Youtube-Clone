import React, { useState, useEffect } from 'react'
import Style from '../ChannelDetais/ChannelDetails.module.css'
import { useParams } from 'react-router-dom'
import { FetchAPI } from '../../Utilities/FetchAPI'
import ChannelCard from '../../Components/Cards/ChannelCard/ChannelCard'
import Videos from "../../Components/Videos/Videos"

const ChannelDetail = () => {

    const [channelDetail, setchannelDetail] = useState(null);
    const [videos, setvideos] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        FetchAPI(`channels?part="snippet&id=${id}`).then((data) => setchannelDetail(data.items[0]));

        FetchAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setvideos(data.items))
    }, [id])

    return (
        <div className={Style.channelDetails}>
            <div className={Style.channelDetails_profile}>
                <ChannelCard channelDetail={channelDetail} />
            </div>
            <div className={Style.channelDetail_videos}>
                <Videos videos={videos} />
            </div>
        </div>
    )
}

export default ChannelDetail
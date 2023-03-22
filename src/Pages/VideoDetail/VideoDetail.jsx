import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Style from "../VideoDetail/VideoDetail.module.css"
import { FetchAPI } from '../../Utilities/FetchAPI';
import Videos from '../../Components/Videos/Videos';
import VideoDetailDescription from '../VideoDetail/VideoDetailDescription';
import Loading from '../Loading';

const VideoDetail = () => {

    const [videoDetail, setvideoDetail] = useState(null);
    const [videos, setvideos] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        FetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setvideoDetail(data.items[0]));

        FetchAPI(`search?part=snippet&relatedTovideoId=${id}&type=video`).then((data) => {
            setvideos(data.items)
        });

    }, [id])

    // console.log(videoDetail);
    // console.log(videos);

    {/* this is very common error in this we fetch the data from videoDetail and use it for other titles with snippet.title or etc this error occor bcz videoDetail shows us null the code can't recognize the videoDetail.snippet.title */ }
    {/* that's why we apply the condition that if videoDetail has some value then oly it show by && operator for condition applying */ }
    if (!videoDetail) return <Loading reason={`"videoDeatil" in VideoDetail`} />;
    if (!videos) return <Loading reason={`"videos" in VideoDetail`} />;

    return (
        <div className={Style.videoDetail}>
            <div className={Style.videoDeatil_video}>
                <ReactPlayer url={`https://youtube.com/watch?v=${id}`} className={Style.react_player} controls />
                <VideoDetailDescription videoTitle={videoDetail.snippet.title} channelTitle={videoDetail.snippet.channelTitle} videoViewCount={videoDetail.statistics.viewCount} videoLikeCount={videoDetail.statistics.likeCount} />
            </div>
            <div className={Style.videoDetail_videoSection}>
                <Videos videos={videos} />
            </div>
        </div>
    )
}

export default VideoDetail
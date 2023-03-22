import React, { useEffect, useState } from 'react'
import Style from "../Feed/Feed.module.css"
import { FetchAPI } from '../../Utilities/FetchAPI'
import Sidebar from "../../Components/Sidebar/Sidebar"
import Videos from '../../Components/Videos/Videos'

const Feed = () => {

    const [selectedCategorie, setselectedCategorie] = useState('New');
    const [videos, setvideos] = useState([]);

    useEffect(() => {
        FetchAPI(`search?part=snippet&q=${selectedCategorie}`).then((data) => setvideos(data.items))
    }, [selectedCategorie])

    return (
        <div className={Style.feed}>
            <div >
                <Sidebar selectedCategorie={selectedCategorie} setselectedCategorie={setselectedCategorie} />
            </div>
            <div >
                <h1 className={Style.feed_videos_heading}><span style={{ color: 'red' }}>{selectedCategorie}</span> Videos</h1>
                <Videos selectedCategorie={selectedCategorie} videos={videos} />
            </div>
        </div>
    )
}

export default Feed
import React, { useEffect, useState } from 'react'
import Style from "../SearchFeed/SearchFeed.module.css"
import { FetchAPI } from '../../Utilities/FetchAPI'
import Videos from '../../Components/Videos/Videos'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {

    const [videos, setvideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        FetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setvideos(data.items))
    }, [searchTerm])

    return (
        <div className={Style.searchFeed}>
            <h1 className={Style.searchFeed_videosHeading}><span style={{ color: 'red' }}>{searchTerm}</span> Videos</h1>
            <Videos selectedCategorie={searchTerm} videos={videos} />
        </div>
    )
}

export default SearchFeed
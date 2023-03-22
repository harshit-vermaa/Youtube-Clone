import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";
import Navbar from './Components/Navbar/Navbar'
import ChannelDetail from './Pages/ChannelDetais/ChannelDetail'
import Feed from './Pages/Feed/Feed'
import SearchFeed from './Pages/SearchFeed/SearchFeed'
import VideoDetail from './Pages/VideoDetail/VideoDetail'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
          <Route path='/videos/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' exact={true} element={<ChannelDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
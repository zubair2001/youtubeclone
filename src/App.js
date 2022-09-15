import React from 'react';
import './App.css';
import {Navbar,Feed,ChannelDetail,SearchFeed,VideoDetail} from './Components';
import {BrowserRouter as Router,
Route,
Routes} from 'react-router-dom';
import {Box} from '@mui/material';

function App() {
  return (
    <Router>
      <Box sx={{backgroundColor: '#000'}}>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Feed/>}/>
          <Route path="/video/:id" element={<ChannelDetail/>}/>
          <Route path="/channel/:id" element={<VideoDetail/>}/>
          <Route path="/search/:id" element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </Router>
  );
}

export default App;

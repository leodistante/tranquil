import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow.jsx";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function Sidebar() {
  return (
    <div className='sidebar'>
       <SidebarRow selected Icon={HomeIcon} title="Home"/> 
       <SidebarRow Icon={WhatshotIcon} title="Trending"/> 
       <SidebarRow Icon={SubscriptionsIcon} title="Subscribed"/>
       <hr className='hr' /> 
       <SidebarRow Icon={VideoLibraryIcon} title="Libary"/> 
       <SidebarRow Icon={HistoryIcon} title="History"/> 
       <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/> 
       <SidebarRow Icon={ThumbUpIcon} title="Liked videos"/> 
       <hr className='hr'/>
    </div>
  )
}

export default Sidebar
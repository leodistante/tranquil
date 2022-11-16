import React from 'react'
import "./Feed.css"
import VideoCard from "./VideoCard"
import Thumb1 from "./thumbnail.png"
import Thumb2 from "./thumbnail2.png"
import Thumb3 from "./thumbnail3.png"
import Thumb4 from "./thumbnail4.png"
import Thumb5 from "./thumbnail5.png"
import Chips from "./Chips"
import Avatar1 from "./ppic.png"
import Avatar2 from "./ppic 2.png"
import Avatar3 from "./ppic 3.png"
import Avatar4 from "./ppic 4.png"
import Avatar5 from "./ppic 5.png"

function Feed() {
  return (
    <div className='feed'>
      <Chips />
      <div className="feed__videos">
        <VideoCard 
          title="7 tips to start your day feeling great"
          views="1.3M Views"
          timestamp="3 days ago"
          channelImage={Avatar1}
          channel="Maria One"
          image={Thumb1}
        />
        <VideoCard 
          title="Relax with this nice bedtime story"
          views="64K Views"
          timestamp="6 days ago"
          channelImage={Avatar2}
          channel="John Two"
          image={Thumb2}
        />
        <VideoCard 
          title="Good habits to reduce your anxiety"
          views="2.3M Views"
          timestamp="3 months ago"
          channelImage={Avatar3}
          channel="Kate Three"
          image={Thumb3}
        />
        <VideoCard 
          title="Peaceful landscape by the river"
          views="23K Views"
          timestamp="3 days ago"
          channelImage={Avatar4}
          channel="Kim Four"
          image={Thumb4}
        />
        <VideoCard 
          title="The most quiet sounds of nature to relax at night"
          views="2M Views"
          timestamp="2 months ago"
          channelImage={Avatar5}
          channel="Peter Five"
          image={Thumb5}
        />
        <VideoCard 
          title="7 tips to start your day feeling great"
          views="1.3M Views"
          timestamp="3 days ago"
          channelImage={Avatar1}
          channel="Maria One"
          image={Thumb1}
        />
        <VideoCard 
          title="Relax with this nice bedtime story"
          views="64K Views"
          timestamp="6 days ago"
          channelImage={Avatar2}
          channel="John Two"
          image={Thumb2}
        />
        <VideoCard 
          title="Good habits to reduce your anxiety"
          views="2.3M Views"
          timestamp="3 months ago"
          channelImage={Avatar3}
          channel="Kate Three"
          image={Thumb3}
        />
        <VideoCard 
          title="Peaceful landscape by the river"
          views="23K Views"
          timestamp="3 days ago"
          channelImage={Avatar4}
          channel="Kim Four"
          image={Thumb4}
        />
        <VideoCard 
          title="The most quiet sounds of nature to relax at night"
          views="2M Views"
          timestamp="2 months ago"
          channelImage={Avatar5}
          channel="Peter Five"
          image={Thumb5}
        />
        <VideoCard 
          title="7 tips to start your day feeling great"
          views="1.3M Views"
          timestamp="3 days ago"
          channelImage={Avatar1}
          channel="Maria One"
          image={Thumb1}
        />
        <VideoCard 
          title="Relax with this nice bedtime story"
          views="64K Views"
          timestamp="6 days ago"
          channelImage={Avatar2}
          channel="John Two"
          image={Thumb2}
        />
        <VideoCard 
          title="Good habits to reduce your anxiety"
          views="2.3M Views"
          timestamp="3 months ago"
          channelImage={Avatar3}
          channel="Kate Three"
          image={Thumb3}
        />
        <VideoCard 
          title="Peaceful landscape by the river"
          views="23K Views"
          timestamp="3 days ago"
          channelImage={Avatar4}
          channel="Kim Four"
          image={Thumb4}
        />
        <VideoCard 
          title="The most quiet sounds of nature to relax at night"
          views="2M Views"
          timestamp="2 months ago"
          channelImage={Avatar5}
          channel="Peter Five"
          image={Thumb5}
        />
        <VideoCard 
          title="7 tips to start your day feeling great"
          views="1.3M Views"
          timestamp="3 days ago"
          channelImage={Avatar1}
          channel="Maria One"
          image={Thumb1}
        />
      </div>
    </div>
  )
}

export default Feed
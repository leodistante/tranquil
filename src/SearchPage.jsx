import React from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import "./SearchPage.css"
import VideoRow from "./VideoRow"
import SearchThumb1 from "./searchThumb1.png"
import SearchThumb2 from "./searchThumb2.png"
import SearchThumb3 from "./searchThumb3.png"

function SearchPage() {
  return (
    <div className="searchPage">
        <div className="searchPage__filter">
            <TuneIcon/>
            <h2>FILTER</h2>
        </div>
        <hr className='hr' />

        <VideoRow
            title="Quiet nature sounds for relaxing at night"
            channel="John Two"
            subs="12K"
            views="1.4M"
            timestamp="2 months ago"
            description="I invite you to relax tonight with these sounds coming directly from the mountains"
            image={SearchThumb1}
        />

        <VideoRow
            title="You're having a cup of tea in the middle of a forest"
            channel="Alicia Seven"
            subs="5K"
            views="25K"
            timestamp="5 months ago"
            description="Imagine yourself in the middle of the forest by autumn having a nice cup of tea"
            image={SearchThumb2}
        />

        <VideoRow
            title="Peaceful bamboo flute music in a calm bamboo garden"
            channel="Tom Eight"
            subs="63K"
            views="1M"
            timestamp="3 months ago"
            description="Bamboo music inside a bamboo place. Sounds of nature for relaxation."
            image={SearchThumb3}
        />

<VideoRow
            title="Quiet nature sounds for relaxing at night"
            channel="John Two"
            subs="12K"
            views="1.4M"
            timestamp="2 months ago"
            description="I invite you to relax tonight with these sounds coming directly from the mountains"
            image={SearchThumb1}
        />

        <VideoRow
            title="You're having a cup of tea in the middle of a forest"
            channel="Alicia Seven"
            subs="5K"
            views="25K"
            timestamp="5 months ago"
            description="Imagine yourself in the middle of the forest by autumn having a nice cup of tea"
            image={SearchThumb2}
        />

        <VideoRow
            title="Peaceful bamboo flute music in a calm bamboo garden"
            channel="Tom Eight"
            subs="63K"
            views="1M"
            timestamp="3 months ago"
            description="Bamboo music inside a bamboo place. Sounds of nature for relaxation."
            image={SearchThumb3}
        />
    </div>
  )
}

export default SearchPage
import React from 'react'
import ReactPlayer from 'react-player'
import './res-player.css'


const ResponsivePlayer = () => {
   return (
      <div className='player-wrapper'>
         <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='100%'
          height='100%'
          playing={true}
          controls={true}
         />
      </div>
   )
}

export default ResponsivePlayer
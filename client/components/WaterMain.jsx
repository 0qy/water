import React from 'react'
import Vimeo from '@u-wave/react-vimeo'

class WaterMain extends React.Component {
  componentDidMount () {
    // setTimeout(this.playAudioFromRandom, 10000)
    document.cookie = 'SameSite=none Secure'
  }

  playAudioFromRandom = () => {
    const audioElement = document.getElementById('audio')
    const startTime = Math.floor(Math.random() * 470)
    audioElement.currentTime = startTime
    audioElement.play()
  }

  render () {
    return (
      <div id="container">
        <div className="main">
          <div className="fullscreen">
            <Vimeo
              video="412164550"
              autoplay
              background
              loop
              width="100%"
              height="100%"/>
          </div>
        </div>
      </div>
    )
  }
}

export default WaterMain

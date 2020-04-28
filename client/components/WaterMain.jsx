import React from 'react'

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
            <iframe
              src="https://player.vimeo.com/video/412164550?background=1&muted=0&loop=1"
              frameBorder="0" allow="autoplay; fullscreen"
              allowFullScreen>
            </iframe>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
        </div>
      </div>
    )
  }
}

export default WaterMain

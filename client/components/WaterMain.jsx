import React from 'react'

class WaterMain extends React.Component {
  componentDidMount () {
    setTimeout(this.playAudioFromRandom, 10000)
  }

  playAudioFromRandom = () => {
    const audioElement = document.getElementById('audio')
    const startTime = Math.floor(Math.random() * 470)
    audioElement.currentTime = startTime
    audioElement.play()
  }

  errorHandler = () => {
    alert('video or voice failed to load, please refresh page.')
  }

  render () {
    return (
      <div id="container">
        <div className="main">
          <div className="fullscreen">
            <iframe id="iframe" src="https://player.vimeo.com/video/412164550?autoplay=1&loop=1&background=1&muted=0"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="The Return Of Water"
              data-ready="true"
              onError={this.errorHandler}></iframe>
            <audio id="audio" loop src="monologue.mp3" onError={this.errorHandler}/>
          </div>
        </div>
      </div>
    )
  }
}

export default WaterMain

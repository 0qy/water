import React from 'react'

class WaterMain extends React.Component {
  componentDidMount () {
    window.scrollTo({
      top: 1000,
      left: 4000,
      behavior: 'smooth'
    })
    setTimeout(this.playAudioFromRandom, 10000)
  }

  playAudioFromRandom = () => {
    const audioElement = document.getElementById('audio')
    const startTime = Math.floor(Math.random() * 470)
    audioElement.currentTime = startTime
    audioElement.play()
  }

  horizontalScroll = (e) => {
    e.preventDefault()
    var container = document.getElementById('container')
    var containerScrollPosition = document.getElementById('container').scrollLeft
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behaviour: 'smooth'
    })
  }

  render () {
    return (
      <div id="container">
        <div className="main">
          <iframe frameBorder="0" height="100%" width="100%"
            src="https://youtube.com/embed/nmccCzbznmk?autoplay=1&controls=0&showinfo=0&autohide=1">
          </iframe>
        </div>
      </div>
    )
  }
}

export default WaterMain

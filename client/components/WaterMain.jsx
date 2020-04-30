import React from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'

import { playAction } from '../actions/playAction'

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

  clickHandler = () => {
    this.props.dispatch(playAction())
  }

  render () {
    return (
      <div id="container">
        <div className="main">
          {this.props.playing
            ? <></>
            : <button onClick={this.clickHandler}>Go</button>
          }
          <div className="fullscreen">
            <ReactPlayer id="player" url='https://vimeo.com/412164550' playing={this.props.playing}/>
            <audio id="audio" loop src="monologue.mp3" onError={this.errorHandler}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    playing: state
  }
}

export default connect(mapStateToProps)(WaterMain)

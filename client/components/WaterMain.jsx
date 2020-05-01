import React from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'

import { playAction, leaveAction } from '../actions/playAction'
import { displayStart } from '../actions/startDisplayActions'

class WaterMain extends React.Component {
  componentDidMount () {
    setTimeout(this.playAudioFromRandom, 5000)
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

  leaveClickHandler = () => {
    this.props.dispatch(leaveAction())
    this.props.dispatch(displayStart())
  }

  render () {
    return (
      <div id="container">
        <div className="main">
          <div className="fullscreen">
            <ReactPlayer id="player" url='https://vimeo.com/412164550'
              playing={this.props.playing}
              loop
              width="100%"
              height="100%"/>
            <audio id="audio" loop src="monologue.mp3" onError={this.errorHandler}/>
          </div>
          {this.props.playing
            ? <button className="smallButton" onClick={this.leaveClickHandler}>leave</button>
            : <button id="go" onClick={this.clickHandler}>Go</button>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    playing: state.play
  }
}

export default connect(mapStateToProps)(WaterMain)

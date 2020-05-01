import React from 'react'
import { connect } from 'react-redux'

import WaterStart from './WaterStart'
import WaterMain from './WaterMain'
import { hideStart } from '../actions/startDisplayActions'

class Water extends React.Component {
  clickHandler = () => {
    this.props.dispatch(hideStart())
  }

  render () {
    return (
      <div>
        {this.props.startDisplay
          ? <WaterStart clickHandler={this.clickHandler}/>
          : <WaterMain />
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    startDisplay: state.startDisplay
  }
}

export default connect(mapStateToProps)(Water)

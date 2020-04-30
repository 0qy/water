import React from 'react'
 
import WaterStart from './WaterStart'
import WaterMain from './WaterMain'

class Water extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mainVisible: false
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler () {
    this.setState({
      mainVisible: true
    })
  }

  render () {
    return (
      <div>
        {this.state.mainVisible
          ? <WaterMain />
          : <WaterStart clickHandler={this.clickHandler}/>
        }
      </div>
    )
  }
}

export default Water

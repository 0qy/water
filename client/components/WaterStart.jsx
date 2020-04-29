import React from 'react'

const WaterStart = (props) => {
  return (
    <div className="start">
      <p>This site contains flashing images and autoplay audio.</p>
      <p className="smallText">(Please refresh if voice or video do not start playing.) </p>
      <br></br>
      <button onClick={props.clickHandler}>Enter</button>
    </div>
  )
}

export default WaterStart

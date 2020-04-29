import React from 'react'

const WaterStart = (props) => {
  return (
    <div className="start">
      <p>This site contains flashing images and autoplay audios.</p>
      <button onClick={props.clickHandler}>Enter</button>
    </div>
  )
}

export default WaterStart

import React from 'react'

const WaterStart = (props) => {
  return (
    <div className="start">
      <p>this site contains flashing images and autoplay audio</p>
      <p className="smallText">media might take a few seconds to load</p>
      <br></br>
      <button onClick={props.clickHandler}>Enter</button>
    </div>
  )
}

export default WaterStart

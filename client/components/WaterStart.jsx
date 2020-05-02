import React from 'react'

const WaterStart = (props) => {
  return (
    <div className="start">
      <p>This site contains flashing images and autoplay audio.</p>
      <p className="smallText">mobile viewers, please use safari, chrome or firefox apps to view this site</p>
      <p className="smallText">media might take a few seconds to load</p>
      <p className="smallText">refresh or change internet environment if video fails to start</p>
      <br></br>
      <button onClick={props.clickHandler}>Enter</button>
    </div>
  )
}

export default WaterStart

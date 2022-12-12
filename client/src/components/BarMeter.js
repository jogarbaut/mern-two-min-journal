import React from 'react'

const BarMeter = () => {
  return (
    <div className="bar-meter">
      <div className="bar-value">
        <div className="bar-indicator" style={{"left": "50%"}}></div>
      </div>
    </div>
  )
}

export default BarMeter
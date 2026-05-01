import React from 'react'
import '../Styles/Display.css'

const Display = ({ expression }) => (
  <div className="display">
    <span className="display__label">Expression</span>
    <input
      type="text"
      value={expression}
      placeholder="0"
      readOnly
    />
  </div>
)

export default Display
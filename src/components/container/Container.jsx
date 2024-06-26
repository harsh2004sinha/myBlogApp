import React from 'react'

function Container({child}) {
  return (
    <div className="w-full px-4 mx-auto max-w-7xl">{child}</div>
  )
}

export default Container
import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className='w-20 h-10'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGtnySl2jkYS7OeUmlgmf9N_l1odv92ari8Q&s" alt="My Blog" />
    </div>
  )
}

export default Logo
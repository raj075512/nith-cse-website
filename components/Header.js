import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <>
      <div className="header">
        <div className="overlay"></div>
        <video src="/bg.mp4" autoPlay loop muted/>
        <Navbar/>
        <div className="content">
            <h1>This is NITH</h1>
            <p>We continue to be recognized as a leading global management institution, expanding the frontiers of management research, leadership, and education.</p>
        </div>
      </div>
    </>
  )
}

export default Header

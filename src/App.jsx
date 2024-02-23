import React from 'react'
import image1 from "/Screenshot (220).png"
import './App.css'

function App() {
  return (
    <>

    <div class="image1">
      <img src={image1} alt="No image"/>
    </div>
    <div>
    <button type="button" class="btn btn-outline-success">GET STARTED</button>
    </div>
    <div class='box1'>
      <h1>All Rights Reserved</h1>
    </div>
    </>
  )
}

export default App
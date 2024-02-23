import React from 'react'
import './Home.css'
import main from "/mainimage.jpg"
import image2 from "/f2f9c091af7bcaeb0760ec0028faf264-removebg-preview.png"

function Home() {
  return (
    <>

    <div class='box2'>
            <h1>AGROFORECAST</h1>
    </div>
    <div class="image2">
        <img src={main} alt="no image" />
         <h1>"Farming Futures, Forecasted!" </h1> 
    </div>
    <div class='box3'>
        <div class='box4'>
        <img src={image2} alt="" />
        </div>
        <div class='box5'>
        <h1 style={{color:"white"}}>Your Current Address</h1>
        <h1>Pune, Maharashtra, India</h1>
        </div>
    </div>
    <div class='box6'>
        <div className="line1">
        <div class='box7'>
            <img src={main} alt="" />
            <h1>Current Weather</h1>
        </div>
        <div class='box7'>
            <img src={main} alt="" />
            <h1>Weather Predictor</h1>
        </div>
        </div>
        <div className="line2">
        <div class='box7'>
            <img src={main} alt="" />
            <h1>Date Wise Predictor</h1>
        </div>
        <div class='box7'>
            <img src={main} alt="" />
            <h1>Pick your location</h1>
        </div>
        </div>
        <div className="line3">
        <div class='box7'>
            <img src={main} alt="" />
            <h1>Crop Predictor</h1>
        </div>
        <div class='box7'>
           <img src={main} alt="" />
           <h1>Crop Advisory</h1> 
        </div>
        </div>
        <div className="line4">
        <div class='box7'>
           <img src={main} alt="" />
           <h1>Customer Support</h1> 
        </div>
        </div>
    </div>
    <div class='box8'>
      <h1>All Rights Reserved</h1>
    </div>

    </>
  )
}

export default Home
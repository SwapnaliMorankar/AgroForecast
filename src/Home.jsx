import React from 'react'
import './Home.css'
import main from "/mainimage.jpg"
import current from '/currentweather.png'
import future from '/futureweather-removebg-preview (1).png'
import city from '/citypicker-removebg-preview.png'
import crop from '/crop-removebg-preview.png'
import advise from '/fertilizers-removebg-preview.png'
import support from '/support-removebg-preview.png'
import crophealth from '/crophealth-removebg-preview.png'
import market from '/market.png'
import scheme from '/scheme.png'
import community from '/community.png'

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
    <div class='box6'>
        <div className="line1">
        <div class='box7'>
            <img src={current} alt="" />
            <h1>Current Weather</h1>
        </div>
        <div class='box7'>
            <img src={future} alt="" />
            <h1>Weather Predictor</h1>
        </div>
        </div>
        <div className="line2">
        <div class='box7'>
            <img src={city} alt="" />
            <h1>Pick your location</h1>
        </div>
        <div class='box7'>
            <img src={crop} alt="" />
            <h1>Crop Predictor</h1>
        </div>
        </div>
        <div className="line3">
        <div class='box7'>
            <img src={crophealth} alt="" />
            <h1>Crop Health</h1>
        </div>
        <div class='box7'>
           <img src={advise} alt="" />
           <h1>Crop Advisory</h1> 
        </div>
        </div>
        <div className="line4">
        <div class='box7'>
            <img src={market} alt="" />
            <h1>Market</h1>
        </div>
        <div class='box7'>
           <img src={community} alt="" />
           <h1>Community</h1> 
        </div>
        </div>
        <div className="line4">
        <div class='box7'>
            <img src={scheme} alt="" />
            <h1>Govt Schemes</h1>
        </div>
        <div class='box7'>
           <img src={support} alt="" />
           <h1>Helpline</h1> 
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
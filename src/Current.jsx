import React from 'react'
import './Current.css'
import sun from '/current_page_image1-removebg-preview.png'
import humidity from '/humidity.png'
import wind from '/windspeed.png'
import rain from '/rainfall-removebg-preview.png'
import pressure from '/pressure-removebg-preview.png'

function Current() {
  return (
    <>

    <div class='box9'>
            <h1>AGROFORECAST</h1>
    </div>
    <div class="image3">
      <img src={sun} alt="" />
    </div>
    <div>
      <h1 class="text1">30 C</h1>
      <h1 class="text2">Karvenagar</h1>
      <h1 class="text3">Sunny Day</h1>
      <div class="line5">
        <div className="line6">
          <div className="img1">
            <img src={humidity} alt="" />
            <h2>64% <br /> Humidity</h2>
          </div>
          <div className="img1">
            <img src={wind} alt="" />
            <h2>18km/hr <br /> Wind Speed </h2>
          </div>
          </div>
          <div className="line7">
          <div className="img1">
            <img src={rain} alt="" />
          <h2>30% <br /> Rainfall</h2>
          </div>
          <div className="img1">
            <img src={pressure} alt="" />
          <h2>1017 <br /> Pressure_mb </h2>
          </div>
          </div>
      </div>
      
    </div>
    <div class='box10'>
      <h1>All Rights Reserved</h1>
    </div>
    </>
  )
}

export default Current
import React from 'react'
import './Future.css'
import datepicker from '/datepicker.jpg'
import humidity from '/humidity.png'
import wind from '/windspeed.png'
import rain from '/rainfall-removebg-preview.png'
import pressure from '/pressure-removebg-preview.png'

function Future() {
  return (
    <>

    <div class='box13'>
            <h1>AGROFORECAST</h1>
    </div>
    <div>
        <h1 className='textnew'>Choose the Date Here</h1>
    </div>
    <div className='image6'>
        <img src={datepicker} alt="" />
    </div>
    <div>
      <h1 class="text7">30 C</h1>
      <h1 class="text8">Karvenagar</h1>
      <h1 class="text8">Sunny Day</h1>
      <div class="line11">
        <div className="line12">
          <div className="img3">
            <img src={humidity} alt="" />
            <h2>64% <br /> Humidity</h2>
          </div>
          <div className="img3">
            <img src={wind} alt="" />
            <h2>18km/hr <br /> Wind Speed </h2>
          </div>
          </div>
          <div className="line13">
          <div className="img3">
            <img src={rain} alt="" />
          <h2>30% <br /> Rainfall</h2>
          </div>
          <div className="img3">
            <img src={pressure} alt="" />
          <h2>1017 <br /> Pressure_mb </h2>
          </div>
          </div>
      </div>
      
    </div>
    <div class='box14'>
      <h1>All Rights Reserved</h1>
    </div>
    </>
  )
}

export default Future
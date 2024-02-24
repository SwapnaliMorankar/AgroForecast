import React from 'react'
import './location.css'
import sun from '/current_page_image1-removebg-preview.png'
import humidity from '/humidity.png'
import wind from '/windspeed.png'
import rain from '/rainfall-removebg-preview.png'
import pressure from '/pressure-removebg-preview.png'

function Location() {

    function city(){
      event.preventDefault();
      document.getElementsByClassName("maindiv2")[0].style.display="block";
    }

  return (
    <>

    <div class='box11'>
            <h1>AGROFORECAST</h1>
    </div>
    <div className='form1'>
        <form action="">
            <input type="text" placeholder='Enter City' onSubmit={city}/>
        </form>
    </div>
    <div class="image5">
      <img src={sun} alt="" />
    </div>


    <div className="maindiv2">
    <div>
      <h1 class="text4">30 C</h1>
      <h1 class="text5">Karvenagar</h1>
      <h1 class="text6">Sunny Day</h1>
      <div class="line8">
        <div className="line9">
          <div className="img2">
            <img src={humidity} alt="" />
            <h2>64% <br /> Humidity</h2>
          </div>
          <div className="img2">
            <img src={wind} alt="" />
            <h2>18km/hr <br /> Wind Speed </h2>
          </div>
          </div>
          <div className="line10">
          <div className="img2">
            <img src={rain} alt="" />
          <h2>30% <br /> Rainfall</h2>
          </div>
          <div className="img2">
            <img src={pressure} alt="" />
          <h2>1017 <br /> Pressure_mb </h2>
          </div>
          </div>
      </div>
      </div>
    </div>

    <div className="last1">
    </div>
    <div class='box12'>
      <h1>All Rights Reserved</h1>
    </div>
    </>
  )
}

export default Location
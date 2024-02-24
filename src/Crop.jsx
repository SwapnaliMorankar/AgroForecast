import React from 'react'
import './Crop.css'
import rice from '/crop images/rice.jpeg'
import jowar from '/crop images/jowar.jpg'
import bajra from '/crop images/bajra.jpg'
import barley from '/crop images/barley.jpg'
import sugarcane from '/crop images/sugarcane.jpg'
import cotton from '/crop images/cotton.jpg'
import soyabean from '/crop images/soyabean.jpg'
import apple from '/crop images/apple.jpg'
import grapes from '/crop images/grapes.jpg'
import kiwi from '/crop images/kiwi.jpg'
import fig from '/crop images/fig.jpg'
import custard from '/crop images/custard.jpg'
import guava from '/crop images/guava.jpg'
import strawberry from '/crop images/strawberry.jpg'
import mango from '/crop images/mango.jpg'



function Crop() {
    
    function place(){
        event.preventDefault();
        document.getElementsByClassName("mostimpdiv")[0].style.display="block";
    }

  return (
    <>
    <div class='box15'>
            <h1>AGROFORECAST</h1>
    </div>
    <div>
        <form action="" className='form2'>
            <input type="text" placeholder='Enter City Name' name="place" onSubmit={place}/>
            <h3>OR</h3>
            <button onClick={place}>Use Current Location</button>
        </form>
    </div>


        {/* for city one */}
    <div className="mostimpdiv">
    <div className='maindiv'>
        <h3>Most Recommended Crops</h3>
        <div className="outdiv">
        <div className='div1'>
            <div className="indiv1">
            <img src={bajra} alt="" /> 
            <p>Bajra</p>
            </div>
            <div className="indiv1">
            <img src={sugarcane} alt="" />
            <p>sugarcane</p></div>
            <div className="indiv1">
            <img src={cotton} alt="" />
            <p>cotton</p></div>
        </div>
        </div>
    </div>
    <div  className='maindiv1'>
        <h3>Other Crops</h3>
        <div className="outdiv">
        <div className='div1'>
            <div className="indiv">
            <img src={rice} alt="" /><p>rice</p></div>
            <div className="indiv">
            <img src={apple} alt="" /><p>apple</p></div>
            <div className="indiv">
            <img src={strawberry} alt="" /><p>strawberry</p></div>
        </div>
        <div className='div1'>
            <div className="indiv">
            <img src={grapes} alt="" /><p>grapes</p></div>
            <div className="indiv">
            <img src={jowar} alt="" /><p>jowar</p></div>
            <div className="indiv">
            <img src={kiwi} alt="" /><p>kiwi</p></div>
        </div>
        <div className='div1'>
            <div className="indiv">
            <img src={custard} alt="" /><p>custard</p></div>
            <div className="indiv">
            <img src={guava} alt="" /><p>guava</p></div>
            <div className="indiv">
            <img src={fig} alt="" /><p>fig</p></div>
        </div>
        <div className='div1'>
            <div className="indiv">
            <img src={soyabean} alt="" /><p>soyabean</p></div>
            <div className="indiv">
            <img src={barley} alt="" /><p>barley</p></div>
            <div className="indiv">
            <img src={mango} alt="" /><p>mango</p></div>
        </div>
        </div>
    </div>
    </div>
    {/* city one end */}


    <div className="last">
        
    </div>

    </>

  )
}

export default Crop
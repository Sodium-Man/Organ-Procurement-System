import React from 'react'
import './home.css'
import video from '../../Assets/video.mp4'
import {GrLocation} from 'react-icons/gr'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'


const Home = () => {
    
  return (
    <section className='home'>
        <div className="overlay"></div>
        <video src={video} muted autoPlay loop type='video/mp4'></video>

        <div className="homeContent container">
            <div className="textDiv">

                <span className="smallText">
                    Need an Organ?
                </span>

                <h1 className="homeTitle">
                    Relax we're here for you
                </h1>

            </div>
               <div className="cardDiv grid">
                <div classname='destinationInput'>
                    <label htmlFor='city'>Which city are you from:</label>
                    <div className="input flex">
                        <input type='text' placeholder='Enter name here...'/>
                        <GrLocation className='icon'/>
                    </div>
                </div>   
                
                 <div classname='dateInput'>
                    <label htmlFor='date'>Enter your Birthdate:</label>
                    <div className="input flex">
                        <input type='date'/>
                       
                    </div>
                </div>             
               </div>

               <div className="homeFooterIcons flex">
                <div className="rightIcons">
                    <FiFacebook className='icon'/>
                    <AiOutlineInstagram className='icon'/>
                    <AiOutlineTwitter className='icon'/>




                </div>
               </div>
        </div>


    </section>
  )
}

export default Home

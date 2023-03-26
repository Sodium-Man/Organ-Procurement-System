import React from 'react'
import './footer.css'
import video2 from '../../Assets/video2.mp4'
import {FiSend} from 'react-icons/fi'
import {GiInternalOrgan} from 'react-icons/gi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiFacebook} from 'react-icons/fi'
import {FiChevronRight} from 'react-icons/fi'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
        <div className='text'>
          <small>FOR ANY QUERIES</small>
          <h2> Touch with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type='text' placeholder='Enter Email Address' />
            <button classname='btn flex' type='submit'>
             SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <GiInternalOrgan className='icon'/>Transplant
              </a>
            </div>

            <div className="footerParagrph">
            The Organ Procurement System (OPS) is a unique public partnership that links all hospitals involved in the Indian donation and transplantation system. 
            </div>

            <div className="footerSocials flex">
              <AiOutlineTwitter className='icon'/>
              <AiOutlineInstagram classname='icon'/>
              <FiFacebook classsName='icon'/>
            </div>
          </div>
{/*GROUP ONE*/}
          <div className="footerLinks grid">
               <div className="linkGroup">
                <span className="groupTitle">
                  SITE MAP
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Home
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  About
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Transplant
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Contact
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Login
                </li>

               </div>
          </div>
          {/*GROUP TWO*/}
          <div className="footerLinks grid">
               <div className="linkGroup">
                <span className="groupTitle">
                  GET INVOLVED
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Research
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Careers
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Public 
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Ambassadors
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Research
                </li>

               </div>

               {/*GROUP OTHREE*/}
          <div className="footerLinks grid">
               <div className="linkGroup">
                <span className="groupTitle">
                  CITIES
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Mumbai
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Thane
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                 Pune
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Nagpur
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Nashik
                </li>

               </div>
          </div>
          </div>
          <div className="footerDiv flex">
            <small>ORGAN PROCUREMENT SYSTEM</small>
            <small>COPYRIGHTS RESERVED - OPS 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

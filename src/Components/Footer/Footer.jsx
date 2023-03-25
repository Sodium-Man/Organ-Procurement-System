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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At expedita dignissimos earum, sapiente, placeat vero corrupti quasi dolorum cumque minima maiores beatae minus repellat eaque ea. Fugiat doloribus vero repellendus!
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
                  OUR AGENCY
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Services
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Insurance
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Agency
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Tourism
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Payment
                </li>

               </div>
          </div>
          {/*GROUP TWO*/}
          <div className="footerLinks grid">
               <div className="linkGroup">
                <span className="groupTitle">
                  PARTNERS
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Booking
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  RentalCar
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  HostelWrold
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Trivago
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  TripAdvisor
                </li>

               </div>

               {/*GROUP OTHREE*/}
          <div className="footerLinks grid">
               <div className="linkGroup">
                <span className="groupTitle">
                  PARTNERS
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  London
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Califormnia
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                 Indonesia
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Europe
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon'/>
                  Ocenia
                </li>

               </div>
          </div>
          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - OPS 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

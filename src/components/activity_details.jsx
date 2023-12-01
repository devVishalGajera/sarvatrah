import { useState,useEffect,useRef } from "react";
import {HiShare} from 'react-icons/hi'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {PiArrowFatDownFill} from 'react-icons/pi'
import {IoLocationOutline} from 'react-icons/io5'
import '../assets/css/actd.css'
import {BsCalendarCheck} from 'react-icons/bs'
import {GrGroup} from 'react-icons/gr'
import {LiaCarSideSolid} from 'react-icons/lia'
import {FcCancel} from 'react-icons/fc'
import {FaTelegram} from 'react-icons/fa6'
import '../assets/css/hd.css'
import {BiSolidLeftArrow} from 'react-icons/bi'
import {BiSolidRightArrow} from 'react-icons/bi'
import { useParams } from 'react-router-dom';
import Cookies  from 'js-cookie';

const Activity_details=() =>{
    const containerRef = useRef(null);
    const {id} = useParams()
    const [apidata,setapidata] = useState(false)

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:3232/activities/${id}`);
          const result = await response.json();
          setapidata(result.data)
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
    if (apidata===false){
}
  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 500, // Adjust the scroll distance as needed
        behavior: 'smooth',
      });
    }
  };
  console.log(Cookies.get('room_guest'))

    const handlePrev = () => {
        if (containerRef.current) {
          containerRef.current.scrollBy({
            left: -500, // Adjust the scroll distance as needed
            behavior: 'smooth',
          });
        }
      };
    return(<div className="activity_details" >
            <div className="wrapper">
                <div className="img_container" ref={containerRef}>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://plus.unsplash.com/premium_photo-1695290756957-f15d77b83a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxNjI2Mw&ixlib=rb-4.0.3&q=80&w=1080"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                  <img src="https://images.unsplash.com/photo-1681311869180-72bc056afa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NjAxMjE4MA&ixlib=rb-4.0.3&q=80&w=2000"/>
                </div> 
            <button class="prev" onClick={handlePrev}>< BiSolidLeftArrow/></button>
            <button class="next" onClick={handleNext}><BiSolidRightArrow /></button>
            </div>
        <div className="activity_body">
            <div className="head_section">
                <h1 className="title">{apidata.packageName}<p><span style={{paddingRight:'5px'}}><IoLocationOutline /></span>{apidata.activityLocation}</p></h1>
                <div className="share-down">
                  <i><HiShare /></i>
                  <i><PiArrowFatDownFill /></i>
                </div>

            </div>
            <div className="activity_component">
                <div className="component_head">
                    <h3 className="titile">Tour Snapshot</h3>
                        <div className="tour_info">
                            <div className="icons">
                                
                                <h6> <span style={{paddingRight:'5px'}}><AiOutlineClockCircle/></span>Duration</h6>
                                <p>{apidata.packageDuration} hrs</p>
                            </div>
                            <div className="icons">
                                
                                <h6><span style={{paddingRight:'5px'}}><GrGroup/></span>Group size</h6>
                                <p>{apidata.groupSize} </p>
                            </div>
                            <div className="icons">
                                
                                <h6><span style={{paddingRight:'5px'}}><LiaCarSideSolid/></span>Public Transit</h6>
                                <p>11 </p>
                            </div>
                            <div className="icons">
                                
                                <h6><span style={{paddingRight:'5px'}}><FcCancel/></span>Cancellation</h6>
                                <p style={{color:"rgba(39, 137, 255, 1)"}}>Learn more </p>
                            </div>
                        </div>
                </div>
                <div className="overview">
                    <h3>Overview</h3>
                    <p>{apidata.overview} <span className="overview-more">More</span>
                    </p>
                </div>
                <div className="language">
                    <h3>Available Language</h3>
                    <p>{apidata.availableLanguage}</p>
                </div>
                <div className="cancellation">
                    <h3>Cancellation policy</h3>
                    <p>{apidata.cancellationPolicy}</p>
                </div>
                <div className="highlights">
                    <h3>Highlights</h3>
                    <p>{apidata.highlight}</p>
                </div>
                <div className="included">
                    <h3>What‘s Included</h3>
                    <p>Entry ticket to Harry Potter Warner Bros Studio Tour</p>
                    <p>Return transfers in air-conditioned coach</p>
               
                </div>
                <div className="excluded">
                <h3>What‘s Excluded</h3>
                
                     <p>Food and drinks</p>
                    <p>Gratuities</p>
               
                </div>
                <div className="location">
                <iframe src={apidata.mapLink} width="100%" height="400px" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                </div>
            </div>
            
            <div className="price-calc">
                <div className="dis-price">
                  <p className="discount-price">
                    ₹ <del>22,541</del>
                    </p>
                <h4 className="offer">
                    40% Off
                  </h4>
                </div>
                <div className="net-price">
                  <p><span>₹15,456</span> per person*</p>
                  <p>*Excluding applicable taxes</p>
                </div>
                <div className="hd-calendar">
                <div className="cal-date">
                  <span><BsCalendarCheck /></span>
                  <span>18 Aug - 21 Aug</span>
                </div>
                <h4 className="modify-cal">
                  MODIFY
                </h4>
                </div>
                <h4 className="booking-process">Proceed to Book Online</h4>
            </div>
            
            
        </div>
        <div className="footer-section">
              <div className="footer-box">
              <h1 className="footer-title"><span>Contact</span> Request Call Back or Email Inquiry</h1>
              <p className="footer-text">Need assistance? Request a call back or inquire via email for prompt support tailored to your requirements.</p>
              <div className="subscribe">
                <input type="text" name="" id="" placeholder='Enter phone or email'/>
                <i><FaTelegram /></i>

              </div>
              </div>
              
            </div>
    </div>)
}

export default Activity_details;
import React from 'react'
import './Destinations.css'
import { data } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { FaClipboardCheck } from "react-icons/fa";

export default function Destinations() {

  return (
    <div className='.destination-card-container'>
      {data.map((ele)=>{
        return (
          <div className="main-secContainer grid">
                  {data.map((ele)=>{
                    return (
                      <div data-aos="fade-up" className="main-singleDestination" key={ele.id}>
                          <div className="main-imageDiv">
                            <img src={ele.image} alt={ele.title} />
                          </div>
          
                          <div className="main-cardInfo">
                            <h4 className="main-desTitle">{ele.title}</h4>
                            <span className="main-continent flex">
                              <CiLocationOn className='main-icon icon' />
                              <span className='main-name'>{ele.location}</span>
                            </span>
          
                            <div className="main-fees flex">
                              <div className="main-grade">
                                <span>{ele.grade}<small>+1</small></span>
          
                              </div>
          
                              <div className="main-price">
                                <h5>{ele.fees}</h5>
                              </div>
          
                            </div>
                            <div className="main-desc">
                              <p>{ele.description}</p>
                            </div>
                            <button className='main-btn btn flex'>Deatails <FaClipboardCheck className='main-icon icon'/></button>
                          </div>
                      </div>
                    )
                  })}
                </div>
        )
      })}
    </div>
  )
}

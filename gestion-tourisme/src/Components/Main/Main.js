import React from 'react'
import './Main.css'
import { CiLocationOn } from "react-icons/ci";
import { FaClipboardCheck } from "react-icons/fa";


const data = [{ id:1 , image:"/images/kJmDQeaOZF.png",title :"fzfz" ,location:"frff",
   grade: "cd", fees:"200DH" , description:"effffffffffffffff" }]
export default function Main() {
  return (
    <section className="main container section">

      <div className="main-secTitle">
        <h3 className="main-title">
          most visited Destination
        </h3>
      </div>

      <div className="main-secContainer grid">
        {data.map((ele)=>{
          return (
            <div className="main-singleDestination" key={ele.id}>
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
    </section>
  )
}

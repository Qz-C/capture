import { FC } from 'react';

import { MdAccessAlarms } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import leaving from "../assets/images/leaving.jpg"



const ServiceSection: FC = () => {
    return (
        <div className="service-section">
           <div className="description">
               <h2>
                   High <span>quality</span> services
               </h2>
               <div className="cards">
                   <div className="card">
                       <div className="icon">
                           <MdAccessAlarms size={30}/>
                           <h3>Efficient</h3>
                       </div>
                       <p>Lorem ipsum dolor sit amet.</p>
                   </div>
                   <div className="card">
                       <div className="icon">
                           <RiTeamFill size={30}/>
                           <h3>Team work</h3>
                       </div>
                       <p>Lorem ipsum dolor sit amet.</p>
                   </div>
                   <div className="card">
                       <div className="icon">
                           <FaRegMoneyBillAlt size={30}/>
                           <h3>Affordable</h3>
                       </div>
                       <p>Lorem ipsum dolor sit amet.</p>
                   </div>
                   <div className="card">
                       <div className="icon">
                           <FaRegLightbulb size={30}/>
                           <h3>Creative</h3>
                       </div>
                       <p>Lorem ipsum dolor sit amet.</p>
                   </div>
               </div>
           </div>
           <div className="image">
               <img src={leaving} alt="leaving-the-jail"/>
           </div>
        </div>
    );
}

export default ServiceSection;

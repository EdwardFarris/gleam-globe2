import React from "react";
import "../../components/images/earthmonth.png";
import './wastereduction.css';
import wasteImg from '../../components/images/earthmonth.png';
import Navbar from "../../components/navbar/navbar";


export const Wastereduction = () => {
    return (
        <div className="overlay wasteImg" style={{ backgroundImage: `url(${wasteImg})` }}>
            <div className={`cardBackground`}>

                <div className="imagecard">
                    <Navbar />
                </div>

                <div className="bg-dark text-white ">
                    <div>

                        <img src={wasteImg} alt='tips' className="tips" />
                    </div>
                </div>
            </div>



        </div>
    )
};
export default Wastereduction;
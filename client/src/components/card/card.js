import React from 'react';
import "./card.css";
import Navbar from '../../components/navbar/navbar';
import Navbar from '../navbar/navbar';



export const Card = (props) => (

    <div className={`cardBackground ${props.cardImage}`}>

        <div className="imagecard">
            <Navbar />
        </div>


        <div className="bg-white text-black cardtext">
            <div>{props.title}</div>
        </div>

        <div>{props.children}</div>

        <div className="bg-dark text-white">
            <div>
                <div> {props.children}
                </div>

            </div>
        </div>

        <div className="bg-white text-black cardtext">
            <div>{props.title}</div>
        </div>

        <div>{props.children}</div>

    </div>

);
export default Card;

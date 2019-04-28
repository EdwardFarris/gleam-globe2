import React from 'react';
import "./card.css";
<<<<<<< HEAD
import Navbar from '../navbar/navbar';

=======
import Navbar from '../../components/navbar/navbar';
>>>>>>> 02d2e16a07eb9aca8edec8f913274641d925a3fb

export const Card = (props) => (

    <div className={`cardBackground ${props.cardImage}`}>

        <div className="imagecard">
            <Navbar />
        </div>

<<<<<<< HEAD
        <div className="bg-white text-black cardtext">
            <div>{props.title}</div>
        </div>

        <div>{props.children}</div>
=======
        <div className="bg-dark text-white">
            <div>
                <div> {props.children}
                </div>

            </div>
        </div>
>>>>>>> 02d2e16a07eb9aca8edec8f913274641d925a3fb
    </div>

);
export default Card;

import React from "react";
import {Link} from 'react-router-dom';
import "./styles.scss";

export default function Button({ type, link,onClick, title, btnClasses, chidLeft, childRight, children }) {
    let buttonClasses;
    switch (type) {
        case "primary":
            {
                buttonClasses = `primary-100-gradient-bg text-white ${btnClasses}`;
            }
            break;
        case "secondary":
            {
                buttonClasses = `secondary-button-gradient-bg text-white ${btnClasses}`;
            }
            break;
        default: {
            buttonClasses = `primary-100-gradient-bg text-white ${btnClasses}`;
        }
    }

    return link ? (
        <Link to={link}>
            <button className={` ${buttonClasses}`} onClick={onClick}>
                {chidLeft && children}
                {title}
                {childRight && children}
                
            </button>
        </Link>
    ) : (
        <button className={` ${buttonClasses}`} onClick={onClick}>
            {chidLeft && children}
            {title}
            {childRight && children}
        </button>
    );
}

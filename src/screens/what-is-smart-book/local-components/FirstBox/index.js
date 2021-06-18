import React from "react";
import "./first-box.scss"

export const FirstBox = ({wrapperClasses,titleClasses,paraClases,heading,paragraph, children}) => {
   
    return (
        <div className={wrapperClasses}>
            <h5 className={titleClasses}>
                {heading}
            </h5>
            <p className={paraClases}>
                {paragraph}
            </p>
            {children}
           
        </div>
    );
};

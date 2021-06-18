import React from "react";

export default function TextBox({
    title,
    titleClasses,
    paragraph,
    paragraph2,
    paraClasses,
    occupation,
    number,
    number2,
    link1,
    linkClasses
}) {
    return (
        <>
            <div className="text-box ">
                {title && <h3 className={titleClasses}>{title}</h3>}

                {paragraph ||
                    (occupation && (
                        <div className="my-0">
                            {paragraph && <p className={paraClasses}>{paragraph}</p>}

                            {occupation && <p className={paraClasses}>{occupation}</p>}
                        </div>
                    ))}
                        <div className="number-box">
                            {number && <p className={paraClasses}>{number}</p>}
                            {number2 && <p className={paraClasses}>{number2}</p>}
                        </div>
               
                {paragraph2 && <p className={paraClasses}>{paragraph2}</p>}
            </div>
            {link1 && (
                <div className="link-box-wrapper">
                    <div className="link-box">
                        <h6 className={linkClasses}>{link1}</h6>
                    </div>
                </div>
            )}
        </>
    );
}

import React from "react";
import "./styles.scss";

export default function CarouselItem({ feedback, signature }) {
    return (
        <div className="d-flex flex-column helper-feedback-box align-items-center ">
            <img
                src={"/assets/images/global/double-quotes.png"}
                alt="quoteIcon"
                className="quoteIcon"
            />

            <p>{feedback}</p>
            <div className="d-flex justify-content-end text-center signature-wapper">
                <h3>{signature}</h3>
            </div>
        </div>
    );
}

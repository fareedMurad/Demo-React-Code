import React from "react";
import { Container, Footer, Row, Col } from "react-bootstrap";
import "./styles.scss";

export default function QuotationBox({ image, quote,quoteClasses, quoteBold }) {
    let childElements;
    if (quote) {
        return childElements = (
            <div className="content-box text-center">
                <h4 className={`text-white ${quoteClasses}`}>{quote}</h4>
            </div>
        );
    } else if (quoteBold) {
        return childElements = (
            <div className="content-box text-center">
                <h4 className={"color-primary-dark"}>{quoteBold}</h4>
                <img src={image} alt="logo" className="quote-image" />
            </div>
        );
    }

    return <Container className="quotation-wrapper">{childElements}</Container>;
}

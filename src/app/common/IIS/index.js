import React from "react";
import { Container, Footer, Row, Col } from "react-bootstrap";
import HelperBox from "./helperBox";
import "./styles.scss";

export default function IIS({ image, image2, content, order2, headingClasses }) {
    const { list1, list2, heading } = content;

    const onMouseEnter = (e) => {
        document.querySelector("#vector2").setAttribute("style", "width:0% !important");
        document.querySelector("#vector3").setAttribute("style", "width:100% !important");
    };
    const onMouseLeave = (e) => {
        document.querySelector("#vector2").setAttribute("style", "width:100% !important");
        document.querySelector("#vector3").setAttribute("style", "width:0% !important");
    };

    return (
        <Container>
            <Row className="">
                <Col
                    xs={12}
                    md={6}
                    className={`IIS-images-wrapper ${order2 ? " order-1 order-md-2 " : ""}`}
                >
                    <img src={image} alt="logo" className="vector2" id="vector2" />
                    <img src={image2} alt="logo" className="vector2 w-0" id="vector3" />
                </Col>
                <Col xs={12} md={6} className={`${order2 ? "order-2 order-md-1 " : ""}`}>
                    {heading && (
                        <div className="heading-wrapper">
                            <h2 className={headingClasses}>{heading}</h2>
                        </div>
                    )}
                    <div className={` box box-1`}>
                        <HelperBox title={list1.title} list={list1.list} />
                    </div>
                    <div
                        className="box box-2"
                        id="box-2"
                        onMouseEnter={(e) => onMouseEnter(e)}
                        onMouseLeave={(e) => onMouseLeave(e)}
                    >
                        <HelperBox title={list2.title} list={list2.list} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

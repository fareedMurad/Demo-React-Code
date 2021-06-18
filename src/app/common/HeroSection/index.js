import React, { useContext, useEffect } from "react";
import { Container, Footer, Row, Col, Button } from "react-bootstrap";
import "./styles.scss";

const HeroSection = (props) => {
    const { image, imageMob, children, heading, paragraph, boldPara,equalColumns,textColLarger, headingClasses } = props;

    return (
        <div>
            <div className="hero-section d-flex">
                <Container>
                    {/* <div className="content-box"> */}
                        <Row noGutters={false} className="hero-section-row justify-content-around">
                            <Col xs={12} md={6} lg={!equalColumns ? 5 : textColLarger? 7: 6}>
                                <div className="hero-content-wrapper">
                                    <h1 className={`heroheading ${headingClasses}`}>{heading}</h1>
                                    {boldPara && <h5 className="bold-para">{boldPara}</h5>}
                                    {paragraph && <p className="para">{paragraph}</p>}
                                    {children}
                                </div>
                            </Col>
                            <Col xs={12} md={6} lg={!equalColumns ? 7: textColLarger? 5: 6} className="vector2-wrapper">
                                {imageMob ? (
                                    <>
                                        <img
                                            src={image}
                                            alt="logo"
                                            className="vector2 d-none d-md-block"
                                        />
                                        <img
                                            src={imageMob}
                                            alt="logo"
                                            className="vector2 d-block d-md-none"
                                        />
                                    </>
                                ) : (
                                    <img
                                        src={image}
                                        alt="logo"
                                        className="vector2"
                                    />
                                )}
                            </Col>
                        </Row>
                    {/* </div> */}
                </Container>
            </div>
        </div>
    );
};

export default HeroSection;

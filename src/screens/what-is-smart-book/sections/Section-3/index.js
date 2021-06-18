import React, { useContext, useEffect } from "react";
import { Container, Footer, Row, Col, Button } from "react-bootstrap";
import { FirstBox } from "../../local-components/FirstBox";
import { Arrows } from "../../local-components/Arrows";
import "./styles.scss";

const Section3 = (props) => {
    
    const {year2013}  = props?.content;
    return (
        <section className="section-3 position-relative">
            <Arrows
                image={"/assets/images/what-is-smart-book/year-2013-vector.png"}
                alt="arrow"
                wrapperClasses={
                    "d-none d-lg-flex primary-50-gradient-bg year-vector-box year-vector-left-box align-items-center"
                }
                imageClasses={"ml-auto"}
            />
            <Container className="pr-0 pl-0">
                <Row className="mx-auto align-items-end pr-1 pl-1">
                    <Col xs={12} lg={6}>
                        <img
                            src="/assets/images/what-is-smart-book/year-2013-vector2.png"
                            alt="logo"
                            className="w-100 w-md-auto grouped-vectors d-none d-lg-block"
                        />
                    </Col>
                    <Col xs={12} lg={6} className="d-flex flex-column content-wrapper">
                        <FirstBox
                            heading={year2013.activity1.title1}
                            paragraph={year2013.activity1.description1}
                            wrapperClasses="first-box wrapper3 pr-3 pl-3"
                            titleClasses="primary-dark-300"
                            paraClases="paragraph"
                        >
                            <p>
                            {year2013.activity1.description2}
                            </p>
                            <p>
                            {year2013.activity1.description3}
                            </p>
                        </FirstBox>
                        <img
                            src="/assets/images/what-is-smart-book/year-2013-vector2.png"
                            alt="logo"
                            className="w-100 w-md-auto grouped-vectors d-block d-lg-none"
                        />
                        <FirstBox
                           
                           heading={year2013.activity2.title1}
                           paragraph={year2013.activity2.description1}
                            wrapperClasses="first-box second-box wrapper4 pr-3 pl-3"
                            titleClasses="primary-dark-300"
                            
                        />
                
                    </Col>
                    <Col xs={12} lg={6} className="d-block d-lg-none pr-0 pl-0">
                        <img
                            src="/assets/images/what-is-smart-book/year-2014-vector2.png"
                            alt="logo"
                            className="w-100 w-md-auto grouped-vectors"
                        />
                    </Col>
                   
                </Row>
            </Container>
        </section>
    );
};
export default Section3;

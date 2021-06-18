import React, { useContext, useEffect } from "react";
import { Container, Footer, Row, Col, Button } from "react-bootstrap";
import { FirstBox } from "../../local-components/FirstBox";
import { Arrows } from "../../local-components/Arrows";
import "./styles.scss";

const Section4 = (props) => {
    
    const {year2014}  = props?.content;
    return (
        <section className="section-4 position-relative d-flex flex-column justify-content-start">
            <Container>
                <Row className="mx-auto align-items-center">
                
                    <Col xs={12} lg={6} className="d-flex flex-column content-wrapper">
                        <FirstBox
                            heading={year2014.activity1.title1}
                            paragraph={year2014.activity1.description1}
                            wrapperClasses="first-box wrapper3"
                            titleClasses="primary-dark-300"
                            
                        >
                            <p>
                                {year2014.activity1.description2}
                            </p>
                        </FirstBox>
                    </Col>
                    <Col xs={12} lg={6} className="d-none d-lg-block">
                        <img
                            src="/assets/images/what-is-smart-book/year-2014-vector2.png"
                            alt="logo"
                            className="w-100 w-md-auto grouped-vectors"
                        />
                    </Col>
                    <Col xs={12} lg={6} className="d-block d-lg-none">
                        <img
                            src="/assets/images/what-is-smart-book/year-2015-vector2.png"
                            alt="logo"
                            className="w-md-auto grouped-vectors"
                        />
                    </Col>
                </Row>
                <Arrows
                    image={"/assets/images/what-is-smart-book/year-2014-vector.png"}
                    alt="arrow"
                    wrapperClasses={
                        "d-none d-lg-flex year-vector-box year-vector-right-box primary-50-gradient-bg justify-content-center align-items-center justify-content-xl-start"
                    }
                    imageClasses={"d-none d-lg-block"}
                />
            </Container>
        </section>
    );
};
export default Section4;

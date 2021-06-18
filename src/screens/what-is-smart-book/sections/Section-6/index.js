import React, { useContext, useEffect } from "react";
import { Container, Footer, Row, Col, Button } from "react-bootstrap";
import { Arrows } from "../../local-components/Arrows";
import { FirstBox } from "../../local-components/FirstBox";

import "./styles.scss";

const Section6 = (props) => {
    
    const {year2016}  = props?.content;
    return (
        <section className="section-6 position-relative">
            <Arrows
                image={"/assets/images/what-is-smart-book/year-2016-vector.png"}
                alt="arrow"
                wrapperClasses={
                    "d-none d-lg-flex primary-50-gradient-bg year-vector-box year-vector-box-small year-vector-left-box align-items-center justify-content-center justify-content-xl-end ml-auto"
                }
            />
            <Container className="pr-0 pl-0">
                <Row className="mx-auto align-items-start">
                    <Col
                        xs={12}
                        lg={5}
                        className="d-flex flex-column content-wrapper justify-content-end pr-3 pl-3"
                    >
                        <FirstBox
                            heading={year2016.activity1.title1}
                            paragraph={year2016.activity1.description1}
                            wrapperClasses="first-box wrapper6"
                            titleClasses="primary-dark-300"
                        >
                            <p>
                            {year2016.activity1.description2}
                            </p>
                        </FirstBox>
                    </Col>
                    <Col xs={12} lg={7} className="d-none d-lg-block">
                        <img
                            src="/assets/images/what-is-smart-book/year-2016-vector2.png"
                            alt="logo"
                            className="w-100 w-md-auto grouped-vectors"
                        />
                    </Col>
                    <Col xs={12} lg={6} className="d-flex align-items-center d-md-flex d-lg-none">
                        <img
                            src="/assets/images/what-is-smart-book/mobile/year-2017-vector2.png"
                            alt="logo"
                            className="w-100 w-md-auto grouped-vectors"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default Section6;

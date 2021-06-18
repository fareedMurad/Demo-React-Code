import React, { useContext, useEffect } from "react";
import { Container, Footer, Row, Col, Button } from "react-bootstrap";
import { Arrows } from "../../local-components/Arrows";
import { FirstBox } from "../../local-components/FirstBox";
import "./styles.scss";

const Section5 = (props) => {
    
    const {year2015}  = props?.content;
    return (
        <section className="section-5 position-relative">
            <Arrows
                image={"/assets/images/what-is-smart-book/year-2015-vector.png"}
                alt="arrow"
                wrapperClasses={
                    "d-none d-lg-flex primary-50-gradient-bg year-vector-box year-vector-left-box align-items-center"
                }
                imageClasses={"ml-auto"}
            />
            <Container className="pr-0 pl-0">
                <Row className="mx-auto align-items-end">
                    <Col xs={12} lg={6} className="d-none d-lg-block">
                        <img
                            src="/assets/images/what-is-smart-book/year-2015-vector2.png"
                            alt="logo"
                            className="w-md-auto grouped-vectors"
                        />
                    </Col>
                    <Col
                        xs={12}
                        lg={6}
                        className="d-flex flex-column content-wrapper justify-content-center pr-3 pl-3"
                    >
                        <FirstBox
                            heading={year2015.activity1.title1}
                            paragraph={year2015.activity1.description1}
                            wrapperClasses="first-box wrapper4"
                            titleClasses="primary-dark-300"
                           
                        />
                 
                    </Col>
                    <Col xs={12} lg={7} className="d-block d-lg-none">
                        <img
                            src="/assets/images/what-is-smart-book/year-2016-vector2.png"
                            alt="logo"
                            className="w-100 w-md-auto grouped-vectors"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default Section5;

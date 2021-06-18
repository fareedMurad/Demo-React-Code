import React, { useContext, useEffect } from "react";
import { Container, Footer, Row, Col, Button } from "react-bootstrap";
import { Arrows } from "../../local-components/Arrows";
import { FirstBox } from "../../local-components/FirstBox";
import "./styles.scss";

const Section10 = (props) => {
    const {year2021}  = props?.content;
    return (
        <section className="section-10 position-relative d-flex flex-column align-items-end justify-content-end">
            <Container>
                <Row className="mx-auto">
                    <Col xs={12} lg={5}></Col>
                    <Col xs={12} lg={7} className="d-lg-flex content-wrapper align-items-center">
                        <FirstBox 
                        
                        heading={year2021.activity1.title1}
                        paragraph={year2021.activity1.description1}
                        wrapperClasses="first-box wrapper10"
                        titleClasses="primary-dark-300"
                        />
                        <div className="w-unset w-lg-50 d-flex d-lg-inline justify-content-center">
                            <img
                                src="/assets/images/what-is-smart-book/year-2021-vector2.png"
                                alt="logo"
                                className="grouped-vectors"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Arrows
                image={"/assets/images/what-is-smart-book/year-2021-vector.png"}
                alt="arrow"
                wrapperClasses={
                    "d-none d-md-none d-lg-flex year-vector-box year-vector-left-box year-vector-box-small primary-50-gradient-bg align-items-center justify-content-end"
                }
            />
        </section>
    );
};
export default Section10;

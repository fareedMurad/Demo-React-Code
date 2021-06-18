import React, { useContext, useEffect } from "react";
import { Container, Footer, Row, Col } from "react-bootstrap";
import {Button} from '../../../../app/common'
import { Arrows } from "../../local-components/Arrows";
import { FirstBox } from "../../local-components/FirstBox";
import "./styles.scss";

const Section9 = (props) => {
    const {year2020}  = props?.content;
    return (
        <section className="section-9 position-relative d-flex flex-column align-items-end ">
            <Container>
                <Row className="mx-auto">
                    <Col
                        xs={12}
                        lg={6}
                        className="d-flex flex-column content-wrapper justify-content-center"
                    >
                        <FirstBox
                            heading={year2020.activity1.title1}
                            paragraph={year2020.activity1.description1}
                            wrapperClasses="first-box wrapper9"
                            titleClasses="primary-dark-300"
                        >
                            <p>{year2020.activity1.description2}</p>
                            <p>{year2020.activity1.description3}</p>
                        </FirstBox>
                    </Col>
                    <Col xs={12} lg={6}></Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center vector-button-box-wrapper position-absolute">
                        <div className="vector-button-box text-center">
                            <img
                                src="/assets/images/what-is-smart-book/button-vector.png"
                                alt="logo"
                                className="d-block"
                            />
                            <Button type="primary" btnClasses={"d-block"} title={year2020.buttonText} />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Arrows
                image={"/assets/images/what-is-smart-book/year-2020-vector.png"}
                alt="arrow"
                wrapperClasses={
                    "d-none d-lg-flex year-vector-box year-vector-right-box year-vector-box-small primary-50-gradient-bg align-items-center justify-content-start"
                }
                imageClasses={"d-none d-lg-block"}
            />
             <Arrows
                image={"/assets/images/what-is-smart-book/mobile/year-2021-vector.png"}
                alt="arrow"
                wrapperClasses={
                    "d-none d-md-flex d-lg-none year-vector-box year-vector-left-box year-vector-box-small primary-50-gradient-bg align-items-center justify-content-center"
                }
            />
         
        </section>
    );
};
export default Section9;

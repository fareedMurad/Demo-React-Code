import React, { useContext, useEffect } from "react";
import { Container, Footer, Row, Col, Button } from "react-bootstrap";
import { FirstBox } from "../../local-components/FirstBox";
import { Arrows } from "../../local-components/Arrows";
import "./styles.scss";

const Section2 = (props) => {
    const {year2004, year2008}  = props?.content;
    return (
        <>
            <section className="section-2 position-relative d-flex flex-column align-items-end ">
                <Container className="pr-0 pl-0">
                    <Row className="mx-auto">
                        <Col className="d-flex flex-column content-wrapper">
                            <div >

                            <FirstBox
                                heading={year2004.activity1.title1}
                                paragraph={year2004.activity1.description1}
                                wrapperClasses="first-box wrapper2 pr-3 pl-3"
                                titleClasses="primary-dark-300"
                                paraClases="paragraph"
                            />
                            </div>
                            <div>
                                <div className="year-vector-box year-vector-right-box  primary-50-gradient-bg d-flex align-items-center d-block d-lg-none">
                                    <img
                                        src="/assets/images/what-is-smart-book/mobile/year-2008-vector.png"
                                        alt="logo"
                                        className="d-block d-lg-none"
                                    />
                                </div>
                                <FirstBox
                                heading={year2008.activity1.title1}
                                paragraph={year2008.activity1.description1}
                                    wrapperClasses="wrapper2 pr-3 pl-3 mt-3"
                                    boxParagraph="paragraph2"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="year-vector-box year-vector-right-box  primary-50-gradient-bg primary-50-gradient-bg-sm align-items-center d-none d-lg-flex">
                    <img
                        src="/assets/images/what-is-smart-book/year-2008-vector.png"
                        alt="logo"
                        className="d-none d-lg-block"
                    />
                    {/* <img
                        src="/assets/images/what-is-smart-book/mobile/year-2008-vector.png"
                        alt="logo"
                        className="d-block d-lg-none"
                    /> */}
                </div>
            </section>
        </>
    );
};

export default Section2;

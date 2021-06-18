import React, { useContext, useEffect } from "react";
import { Container, Footer, Row, Col, Button } from "react-bootstrap";
import { Arrows } from "../../local-components/Arrows";
import { FirstBox } from "../../local-components/FirstBox";
import "./styles.scss";

const Section7 = (props) => {
    const {year2017}  = props?.content;
    return (
        <section className="section-7 position-relative d-flex flex-column align-items-end ">
            <Container>
                <Row className="mx-auto justify-content-center">
                    <Col xs={12} lg={6} className="d-lg-flex align-items-center d-none">
                        <img
                            src="/assets/images/what-is-smart-book/year-2017-vector2.png"
                            alt="logo"
                            className="w-100 w-md-auto grouped-vectors ml-auto"
                        />
                    </Col>
                    <Col
                        xs={12}
                        lg={6}
                        className="d-flex flex-column content-wrapper justify-content-end"
                    >
                        <FirstBox
                            heading={year2017.activity1.title1}
                            paragraph={year2017.activity1.description1}
                            wrapperClasses="first-box pl-0 pl-lg-5 wrapper7"
                            titleClasses="primary-dark-300"
                        >
                            <p className="mt-2">{year2017.activity1.description2}</p>
                        </FirstBox>
                    </Col>
                </Row>
            </Container>

            <Arrows
                image={"/assets/images/what-is-smart-book/year-2017-vector.png"}
                alt="arrow"
                wrapperClasses={
                    "d-none d-lg-flex year-vector-box year-vector-right-box primary-50-gradient-bg align-items-center justify-content-center justify-content-xl-start"
                }
                imageClasses={"d-none d-lg-block"}
            />
              <Arrows
                image={"/assets/images/what-is-smart-book/mobile/year-2018-vector.png"}
                alt="arrow"
                wrapperClasses={
                    "d-none d-md-flex d-lg-none year-vector-box year-vector-left-box year-vector-box-small primary-50-gradient-bg align-items-center justify-content-center"
                }
                // imageClasses={"d-block d-lg-none"}
            />
        </section>
    );
};
export default Section7;

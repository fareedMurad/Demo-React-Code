import React, { useContext, useEffect } from "react";
import { Container, Footer, Row, Col, Button } from "react-bootstrap";
import { Arrows } from "../../local-components/Arrows";
import { FirstBox } from "../../local-components/FirstBox";
import "./styles.scss";

const Section8 = (props) => {
    const {year2018_2019}  = props?.content;
    return (
        <section className="section-8 position-relative d-flex flex-column align-items-end ">
            <Container>
                <Row className="mx-auto">
                    <Col xs={12} lg={5}></Col>
                    <Col
                        xs={12}
                        lg={7}
                        className="d-flex flex-column content-wrapper justify-content-center"
                    >
                        <FirstBox
                            heading={year2018_2019.activity1.title1}
                            paragraph={year2018_2019.activity1.description1}
                            wrapperClasses="first-box wrapper8"
                            titleClasses="primary-dark-300"
                        >
                           
                            
                        </FirstBox>
                    </Col>
                </Row>
            </Container>

            <Arrows
                image={"/assets/images/what-is-smart-book/year-2018-vector.png"}
                alt="arrow"
                wrapperClasses={
                    "d-none d-lg-flex year-vector-box year-vector-left-box year-vector-box-small primary-50-gradient-bg align-items-center justify-content-end"
                }
                // imageClasses={"d-block d-lg-none"}
            />
               <Arrows
                image={"/assets/images/what-is-smart-book/mobile/year-2020-vector.png"}
                alt="arrow"
                wrapperClasses={
                    "d-none d-md-flex d-lg-none year-vector-box year-vector-right-box year-vector-box-small primary-50-gradient-bg align-items-center justify-content-center"
                }
                // imageClasses={"d-none d-lg-block"}
            />
              
        </section>
    );
};
export default Section8;

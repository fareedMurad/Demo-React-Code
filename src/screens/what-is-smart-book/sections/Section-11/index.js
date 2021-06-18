import React, { useContext, useEffect } from "react";
import { Container, Footer, Row, Col } from "react-bootstrap";
import {Button} from '../../../../app/common'
import "./styles.scss";

const Section11 = (props) => {
    const { heading, paragraph, buttonText } = props.content;
    return (
        <section className="section-11">
            <Container className="d-flex justify-content-center">
                <div className="d-flex justify-content-center flex-column">
                    <div className="content-box text-center d-flex flex-column align-items-center wrapper11">
                        <h2 className="text-dark">{heading}</h2>

                        <br />
                        <p className="text-center">{paragraph}</p>
                        <br />
                        <br />
                        <Button type="primary"  title={buttonText} />
                    </div>
                </div>
            </Container>
        </section>
    );
};
export default Section11;

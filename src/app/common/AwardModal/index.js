import React from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import TextBox from "../TextBox";
import "./styles.scss";
export default function AwardModal({ show, onHide, content }) {
    const { heading, title, paragraph, rightImage, leftTextBox, rightTextBox } = content;
    return (
        <div>
            
            <Modal onHide={onHide} show={show} size="xl">
                <Modal.Header closeButton className="modal-head"></Modal.Header>
                <Modal.Body className="show-grid modal-wrapper">
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={5}>
                                <div className="modal-box-left">
                                    <div className="modal-heading mt-4 pr-1">
                                        <h2 className="color-primary light">{heading}</h2>
                                        <h3 className="color-primary-300 text-center dark">
                                            {title}
                                        </h3>
                                        {leftTextBox.map((item) => (
                                            <TextBox
                                                title={item.title}
                                                paragraph={item.paragraph}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={7}>
                                <div className="modal-box-right">
                                    <div className="modal-img">
                                        <img src={rightImage} alt="award-img" width="100%" />
                                    </div>
                                    {rightTextBox.map((item) => (
                                        <TextBox title={item.title} paragraph={item.paragraph} />
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    );
}

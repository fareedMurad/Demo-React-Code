import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HelperBox from "./helperBox";
import "./styles.scss";

export default function Curriculum({ content,selected,onSelectSubject }) {
    const { list, title, paragraph } = content;
    return (
        <Container>
            <Row className="">
                <Col xs={12}>
                    <div className="content-box text-center mx-auto">
                        <h2 className="dark-100">{title}</h2>
                        <p>{paragraph}</p>
                    </div>
                </Col>
            </Row>
            <div className="d-flex flex-wrap boxes-wrapper justify-content-between">
                {list.map((item) => (
                    <HelperBox {...item} selected={selected} item={item} onSelectSubject={onSelectSubject? onSelectSubject : () => {}} />
                ))}
            </div>
        </Container>
    );
}

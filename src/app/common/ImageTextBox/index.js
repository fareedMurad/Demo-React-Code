import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TextBox from "../TextBox";
import Button from "../Button";
import "./styles.scss";

export default function ImageTextBox({ classes, content, order2, colSizeChange }) {
    const {
        textList,
        extraHeading,
        extraImage,
        heading,
        image,
        buttonText,
        buttonWithImageText,
        extraBox
    } = content;

    return (
        <Container>
            <Row className="image-text-row">
                {heading && (
                    <Col xs={12}>
                        <div className="heading-wrapper text-center">
                            <h2 className={`${classes?.headingClasses}`}>{heading}</h2>
                        </div>
                    </Col>
                )}
                <Col
                    xs={12}
                    md={buttonWithImageText && !colSizeChange ? 6 : 7}
                    className={`image-text-box-wrapper ${order2 ? " order-1 order-md-2 " : ""}`}
                >
                    <img src={image} alt="logo" className="vector2" />
                    {extraBox && (
                        <div className="extra-box">
                            <TextBox {...extraBox} titleClasses={"text-left"} />
                        </div>
                    )}
                    {buttonWithImageText && (
                        <div className="image-text-box-btn-wrapper text-left">
                            <Button type="secondary" title={buttonWithImageText} />
                        </div>
                    )}
                </Col>
                <Col
                    xs={12}
                    md={buttonWithImageText && !colSizeChange ? 6 : 5}
                    className={`${order2 ? "order-2 order-md-1 " : ""}`}
                >
                    <div
                        className={`justify-content-between d-flex flex-column h-100 image-text-box image-text-box-1 image-text-boxes-wrpper`}
                    >
                        {extraHeading && (
                            <h2 className={`${classes?.extraHeadingClass}`}>{extraHeading}</h2>
                        )}
                        {textList.map((box) => (
                            <TextBox {...box} titleClasses={"text-md-left"} />
                        ))}
                        {extraImage && <img src={extraImage} alt="logo" className="vector2" />}
                        {buttonText && (
                            <div className="image-text-box-btn-wrapper text-center">
                                <Button type="secondary" title={buttonText} />
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

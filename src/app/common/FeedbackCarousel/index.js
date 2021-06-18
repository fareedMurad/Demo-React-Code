import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import CarouselItem from "./CarouselItem";
import "./styles.scss";

export default function FeedbackCarousel({ content }) {
    const { feedbackList, heading } = content;

    return (
        <Container>
            <div className="d-flex flex-wrap feedback-wrapper justify-content-between">
                <h2 className="dark-100 text-center w-100">{heading}</h2>

                <Carousel >
                    {feedbackList.map((item, i) => (
                        <Carousel.Item interval={4000} key={i}>
                            <CarouselItem {...item._IstFeedback} />
                                <CarouselItem {...item.__2ndFeedback} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </Container>
    );
}

import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { StoreContext } from "../../stores/root-store";
import "./styles.scss";

const AppFooter = () => {
    const store = useContext(StoreContext);
    const [footerLinks, setFooterLinks] = useState({});
    useEffect(() => {
        store.FooterContent.loadFooterLinks()
            .catch(() => {})
            .finally(() => {
                setFooterLinks(store.FooterContent.footerlinks);
            });
    }, []);
    const renderLinks = (request_obj) => {
        if (!request_obj) {
            return;
        }
        return (
            <div className="footer-category">
                <a className="bold text-gray-white d-block title" href="#">
                    {request_obj.title}
                </a>
                <div className="d-flex flex-column footer-category-wrapper">
                    {request_obj.links.map((link, index) => (
                        <Link
                            className="normal text-gray-white d-block"
                            key={index}
                            to={link.href}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            </div>
        );
    };
    return (
        <footer
            id="footer"
            className="bg-gray-800 footer-section-bg relative d-flex align-items-end"
            aria-labelledby="footerHeading"
        >
            <Container>
                <Row noGutters className="category-cols ">
                    <Col xs={6} md={3} className="text-center text-sm-left">
                        <div className="footer-img-box">
                            <img src="/assets/images/footer/footer-logo.png" alt="logo" />
                        </div>
                      
                        <div className="footer-logo-box my-2">
                            <a href="#">
                                <img src="/assets/images/footer/facebook.png" alt="logo" />
                            </a>
                            <a href="#">
                                <img src="/assets/images/footer/youtube.png" alt="logo" />
                            </a>
                            <a href="#">
                                <img src="/assets/images/footer/instagram.png" alt="logo" />
                            </a>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        {renderLinks(footerLinks.category1)}
                    </Col>
                    <Col xs={6} md={3}>
                        {renderLinks(footerLinks.category2)}
                    </Col>
                    <Col xs={6} md={3}>
                        {renderLinks(footerLinks.category3)}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default AppFooter;

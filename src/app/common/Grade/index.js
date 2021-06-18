import React, { useContext, useEffect } from "react";
import { Container, Footer, Row, Col, Button } from "react-bootstrap";
import "./styles.scss";

const Grade = ({ item,headingClasses, onSelectGrade }) => {
    // const { title,title1, headingClasses, list } = content;

    return (
        <div>
            <div className="grade-section-wrapper-component d-flex">
        
                    <div className={` grade-box`} onClick={onSelectGrade}>
                        <Row noGutters={false} className="grade-section-row">
                            <Col xs={10} md={8} lg={8}>
                                <div className={`grade-wrapper ${item.selected ? "active-grade" :""} `}>
                                    <h5 className={`mb-0 gradetags text-uppercase ${headingClasses}`}>{item.title}</h5>
                                </div>  
                            </Col>
                        </Row>
                    </div>
            
            </div>
        </div>
    );
};

export default Grade;

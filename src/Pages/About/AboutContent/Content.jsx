import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Content.css';

const Content = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                    <Col md={12} lg={8} lg={{ order: 2 }} className="text-center">
                        <div className="section-title">
                            <h1>Our goals</h1>
                        </div>
                        <p className="w-50 m-auto content-inner">We are proposing to design a blood donation webpage that connects potential donors to patients in need of blood. It makes approaching potential donors easy and encourages people to give voluntarily.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Content;
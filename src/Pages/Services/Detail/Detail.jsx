import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import serviceDetailImg from '../../../Images/service-details-promo1.png';
import './Detail.css';

const Detail = () => {
    return (
        <>
            <section className="healing p-5">
                <Container>
                    <Row className="align-items-center p-5">
                        <Col lg={6} sm={12} xs={12}>
                            <div className="expertDentist-txt mt-5 mt-lg-0">
                                <h2 className="fw-bold">Saving lives through bloody banks!</h2>
                                <p>We collect, test and manufacture blood and blood products, including red blood cells, platelets and plasma.</p>
                                <p>With our modern and top of the line equipment we try to provide every patient the best services possible.</p>
                            </div>
                        </Col>
                        <Col lg={6} sm={12} xs={12}>
                            <img src={serviceDetailImg} alt="expertDentist" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Detail;
import React from 'react';
import { Container, Col, Row, Card, CardBody, CardTitle } from 'reactstrap';
import { Button } from '../ui-components/Button';
 

const LayoutComponent = () => {
    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-apps mr-2"> </i>
            Update Community Resources_Korean
          </CardTitle>
                <CardBody className="">
                    <Container>
                        <Row className="mt-3">
                            <Col>
                                <div className="bg-light p-2 border">Type a Facility to Change information</div>
                            </Col>
                        </Row>
                        
                        <Row className="mt-3">
                            <Col>
                                <div className="bg-light p-2 border">Facility Name</div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <div className="bg-light p-2 border">Street</div>
                            </Col>
                            <Col>
                                <div className="bg-light p-2 border">Address</div>
                            </Col>
                            <Col>
                                <div className="bg-light p-2 border">City</div>
                            </Col>
                            <Col>
                                <div className="bg-light p-2 border">State</div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs="3">
                                <div className="bg-light p-2 border">Zip Code</div>
                            </Col>
                        
                            <Col xs="3">
                                <div className="bg-light p-2 border">Contact Phone</div>
                            </Col>

                            <Col xs="3">
                                <div className="bg-light p-2 border">Website URL</div>
                            </Col>

                            <Col xs="3">
                                <div className="bg-light p-2 border">Facility Type</div>
                            </Col>
                            
                        </Row>

                        <Row className="mt-5">
                        <Col xs="3"> 
                        <Button type="Submit" className='btns'buttonStyle='btn--dark' buttonSize='btn--large'>Submit</Button>
                        </Col>   
                        </Row>
                        
                    </Container>
                </CardBody>
            </Card>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}

            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
        </div>
    );
}



/* misc. code , do not delete.

<Row className="mt-3">
                            <Col xs="6">
                                <div className="bg-light p-2 border">.col-6</div>
                            </Col>
                            <Col xs="6">
                                <div className="bg-light p-2 border">.col-6</div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs="6" sm="4">
                                <div className="bg-light p-2 border">.col-6 .col-sm-4</div>
                            </Col>
                            <Col xs="6" sm="4">
                                <div className="bg-light p-2 border">.col-6 .col-sm-4</div>
                            </Col>
                            <Col sm="4">
                                <div className="bg-light p-2 border">.col-sm-4</div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col sm={{
                                'offset': 1,
                                'order': 2,
                                'size': 6
                            }}>
                                <div className="bg-light p-2 border">
                                    .col-sm-6 .col-sm-order-2 .col-sm-offset-2
                  </div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col sm="12" md={{
                                'offset': 2,
                                'size': 8
                            }}>
                                <div className="bg-light p-2 border">
                                    .col-sm-12 .col-md-6 .col-md-offset-3
                  </div>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col sm={{
                                'offset': 1,
                                'size': 'auto'
                            }}>
                                <div className="bg-light p-2 border">
                                    .col-sm .col-sm-offset-1
                  </div>
                            </Col>
                            <Col sm={{
                                'offset': 1,
                                'size': 'auto'
                            }}>
                                <div className="bg-light p-2 border">
                                    .col-sm .col-sm-offset-1
                  </div>
                            </Col>
                        </Row>
                        */
export default LayoutComponent;

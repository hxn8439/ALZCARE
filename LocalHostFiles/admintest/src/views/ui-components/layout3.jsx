import React from 'react';
import { Container, Col, Row, Card, CardBody, CardTitle } from 'reactstrap';
import { Button } from '../ui-components/Button';

const LayoutComponent1 = () => {
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
            Update Dementia Info_Korean
          </CardTitle>
                <CardBody className="">
                    <Container>
                        
                        <Row className="mt-3">
                            <Col>
                                <div className="bg-light p-2 border">Card 1 Image</div>
                            </Col>
                            <Col>
                                <div className="bg-light p-2 border">Card 2 Image</div>
                            </Col>
                            <Col>
                                <div className="bg-light p-2 border">Card 3 Image</div>
                            </Col>
                            
                        </Row>

                        <Row className="mt-3">
                            <Col>
                                <div className="bg-light p-2 border">Card 1 statement</div>
                            </Col>
                            <Col>
                                <div className="bg-light p-2 border">Card 2 statement</div>
                            </Col>
                            <Col>
                                <div className="bg-light p-2 border">Card 3 statement</div>
                            </Col>
                            
                        </Row>

                        <Row className="mt-3">
                        <Col xs="4"> 
                        <Button type="Submit" className='btns'buttonStyle='btn--dark' buttonSize='btn--large'>Submit</Button>
                        </Col>   

                        <Col xs="4"> 
                        <Button type="Submit" className='btns'buttonStyle='btn--dark' buttonSize='btn--large'>Submit</Button>
                        </Col>

                        <Col xs="1"> 
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

export default LayoutComponent1;

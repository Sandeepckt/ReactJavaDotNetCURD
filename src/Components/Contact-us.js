import React from 'react';
import DropDownDyan from './DropDownDyan';
import RadioButton from './RadioButton';
import RadioDyanmic from './RadioDyanmic';
import CheckboxDyanmic from './CheckboxDynamic';
import CheckboxDy from './CheckboxDy';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Memo } from './Memo';

//rfce

function Contact() {
    return (
        <>
            <h1>Welcome to Contact US page</h1>
            <Row className='m-auto justify-content-md-center'>
                <Col xs={4}>
                 <DropDownDyan />
                </Col>
                <Col xs={2}>
                    <RadioButton />
                </Col>
                
                <Col xs={2}>
                    <CheckboxDyanmic />
                </Col>
                <Col xs={2}>
                    <CheckboxDy />
                </Col>
                <Col xs={2}><RadioDyanmic /></Col>
            </Row>
            <Memo/>
        </>
    )

}
export default Contact;
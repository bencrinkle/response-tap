import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col, Glyphicon, Button } from 'react-bootstrap';

export default class BillingContact extends Component {
	render(){
		return(
			<Form className='formContent'>
				<Col sm={6} xs={12}>
					<FormGroup controlId="billingFirstname">
						<ControlLabel>First Name <Glyphicon glyph="asterisk" /></ControlLabel>
						<FormControl type="text" placeholder="First Name" />
					</FormGroup>
					<FormGroup controlId="billingLastName">
						<ControlLabel>Last Name <Glyphicon glyph="asterisk" /></ControlLabel>
						<FormControl type="text" placeholder="Last Name" />
					</FormGroup>
					<FormGroup controlId="billingEmail">
						<ControlLabel>Email <Glyphicon glyph="asterisk" /></ControlLabel>
						<FormControl type="text" placeholder="Email" />
					</FormGroup>
				</Col>
				<Col sm={3} smOffset={3} xs={12}>
					<Button bsStyle="primary" bsSize="large" block>Create Account</Button>
				</Col>	
			</Form>
		);
	}
}
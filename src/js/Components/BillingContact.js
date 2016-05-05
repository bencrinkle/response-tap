import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col, Panel } from 'react-bootstrap';

export default class BillingContact extends Component {
	render(){
		return(
			<Form className='formContent'>
				<Col sm={6} xs={12}>
					<FormGroup controlId="billingFirstname">
						<ControlLabel>First Name</ControlLabel>
						<FormControl type="text" placeholder="First Name" />
					</FormGroup>
					<FormGroup controlId="billingLastName">
						<ControlLabel>Last Name</ControlLabel>
						<FormControl type="text" placeholder="Last Name" />
					</FormGroup>
					<FormGroup controlId="billingEmail">
						<ControlLabel>Email</ControlLabel>
						<FormControl type="text" placeholder="Email" />
					</FormGroup>
				</Col>			
			</Form>
		);
	}
}
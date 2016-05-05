import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col, Glyphicon, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default class BillingContact extends Component {
	render(){
		const { billingContact, updateBillingContact } = this.props;

		const tooltip = (
	  		<Tooltip id="tooltip">This is a tooltip with some info on it.</Tooltip>
		);

		return(
			<Form className='formContent'>
				<Col sm={6} xs={12}>
					<FormGroup controlId="billingFirstname">
						<ControlLabel>
							<OverlayTrigger placement="right" overlay={tooltip}>
					      		<Glyphicon glyph="question-sign" />
						    </OverlayTrigger>
							First Name <span class="required">*</span></ControlLabel>
						<FormControl type="text"
							value={billingContact.firstName}
							onChange={(e) => updateBillingContact('firstName', e.target.value)} 
							placeholder="First Name" />
					</FormGroup>
					<FormGroup controlId="billingLastName">
						<ControlLabel>Last Name <span class="required">*</span></ControlLabel>
						<FormControl type="text"
							value={billingContact.lastName}
							onChange={(e) => updateBillingContact('lastName', e.target.value)} 
							placeholder="Last Name" />
					</FormGroup>
					<FormGroup controlId="billingEmail">
						<ControlLabel>Email <span class="required">*</span></ControlLabel>
						<FormControl type="text"
							value={billingContact.email}
							onChange={(e) => updateBillingContact('email', e.target.value)} 
							placeholder="Email" />
					</FormGroup>
				</Col>
				<Col class="burst hidden-xs" sm={6} xs={12}>
					<img src="../img/burst.png"/>		
				</Col>
				<Col sm={6} xs={12} >
					<Button bsStyle="danger" bsSize="large" block>Create Account</Button>	
				</Col>
			</Form>
		);
	}
}	
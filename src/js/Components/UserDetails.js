import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col, Glyphicon } from 'react-bootstrap';

export default class UserDetails extends Component {
	render(){
		return(
			<Form className='formContent'>
				<Col sm={6} xs={12}>
					<FormGroup controlId="username">
						<ControlLabel>Username <Glyphicon glyph="asterisk" /></ControlLabel>
						<FormControl type="text" placeholder="Username" />
					</FormGroup>
					<FormGroup controlId="password">
						<ControlLabel>Password <Glyphicon glyph="asterisk" /></ControlLabel>
						<FormControl type="password" placeholder="Password" />
					</FormGroup>
					<FormGroup controlId="passwordConfirmation">
						<ControlLabel>Password Confirmation <Glyphicon glyph="asterisk" /></ControlLabel>
						<FormControl type="text" placeholder="Password Confirmation" />
					</FormGroup>
				</Col>
				<Col sm={6} xs={12}>
					<FormGroup controlId="firstName">
						<ControlLabel>First Name <Glyphicon glyph="asterisk" /></ControlLabel>
						<FormControl type="text" placeholder="First Name" />
					</FormGroup>
					<FormGroup controlId="lastName">
						<ControlLabel>Last Name <Glyphicon glyph="asterisk" /></ControlLabel>
						<FormControl type="text" placeholder="Last Name"/>
					</FormGroup>
					<FormGroup controlId="email">
						<ControlLabel>Email <Glyphicon glyph="asterisk" /></ControlLabel>
						<FormControl type="email" placeholder="Email"/>
					</FormGroup>
				</Col>			
			</Form>
		);
	}
}
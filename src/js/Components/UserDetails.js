import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col, Panel } from 'react-bootstrap';

export default class UserDetails extends Component {
	render(){
		return(
			<Form className='formContent'>
				<Col sm={6} xs={12}>
					<FormGroup controlId="username">
						<ControlLabel>Username</ControlLabel>
						<FormControl type="text" placeholder="Username" />
					</FormGroup>
					<FormGroup controlId="password">
						<ControlLabel>Password</ControlLabel>
						<FormControl type="password" placeholder="Password" />
					</FormGroup>
					<FormGroup controlId="passwordConfirmation">
						<ControlLabel>Password Confirmation</ControlLabel>
						<FormControl type="text" placeholder="Password Confirmation" />
					</FormGroup>
				</Col>
				<Col sm={6} xs={12}>
					<FormGroup controlId="firstName">
						<ControlLabel>First Name</ControlLabel>
						<FormControl type="text" placeholder="First Name" />
					</FormGroup>
					<FormGroup controlId="lastName">
						<ControlLabel>Last Name</ControlLabel>
						<FormControl type="text" placeholder="Last Name"/>
					</FormGroup>
					<FormGroup controlId="email">
						<ControlLabel>Email</ControlLabel>
						<FormControl type="email" placeholder="Email"/>
					</FormGroup>
				</Col>			
			</Form>
		);
	}
}
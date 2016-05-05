import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col, Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default class UserDetails extends Component {
	render(){
		const { userDetails, updateUserDetails} = this.props;

		const tooltip = (
	  		<Tooltip id="tooltip">This is a tooltip with some info on it.</Tooltip>
		);

		return(
			<Form className='formContent'>
				<Col sm={6} xs={12}>
					<FormGroup controlId="username">
						<ControlLabel>Username <span class="required">*</span></ControlLabel>
						<FormControl type="text"
							value={userDetails.username}
							onChange={(e) => updateUserDetails('username', e.target.value)}
							placeholder="Username" 
						/>
					</FormGroup>
					<FormGroup controlId="password">
						<ControlLabel>Password <span class="required">*</span></ControlLabel>
						<FormControl type="password"
							value={userDetails.password}
							onChange={(e) => updateUserDetails('password', e.target.value)}
					 		placeholder="Password" 
					 	/>
					</FormGroup>
					<FormGroup controlId="passwordConfirmation">
						<ControlLabel>
							<OverlayTrigger placement="right" overlay={tooltip}>
					      		<Glyphicon glyph="question-sign" />
						    </OverlayTrigger>
							Password Confirmation <span class="required">*</span></ControlLabel>
						<FormControl type="text"
							value={userDetails.passwordConfirmation}
							onChange={(e) => updateUserDetails('passwordConfirmation', e.target.value)} 
							placeholder="Password Confirmation" 
						/>
					</FormGroup>
				</Col>
				<Col sm={6} xs={12}>
					<FormGroup controlId="firstName">
						<ControlLabel>First Name <span class="required">*</span></ControlLabel>
						<FormControl type="text"
							value={userDetails.firstName}
							onChange={(e) => updateUserDetails('firstName', e.target.value)} 
							placeholder="First Name" 
						/>
					</FormGroup>
					<FormGroup controlId="lastName">
						<ControlLabel>
							<OverlayTrigger placement="right" overlay={tooltip}>
					      		<Glyphicon glyph="question-sign" />
						    </OverlayTrigger>
							Last Name <span class="required">*</span></ControlLabel>
						<FormControl type="text"
							value={userDetails.lastName}
							onChange={(e) => updateUserDetails('lastName', e.target.value)} 
							placeholder="Last Name"
						/>
					</FormGroup>
					<FormGroup controlId="email">
						<ControlLabel>Email <span class="required">*</span></ControlLabel>
						<FormControl type="email"
							value={userDetails.email}
							onChange={(e) => updateUserDetails('email', e.target.value)} 
							placeholder="Email"
						/>
					</FormGroup>
				</Col>			
			</Form>
		);
	}
}
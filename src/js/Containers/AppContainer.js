import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import { Grid, Row, Col, Tabs, Tab, Button } from 'react-bootstrap';

import AccountDetails from '../Components/AccountDetails';
import UserDetails from '../Components/UserDetails';
import BillingContact from '../Components/BillingContact';

import { updateTab, updateAccountDetails, updateUserDetails, updateBillingContact } from '../Actions/AppActions';
import { validate } from '../Actions/Validate'

class AppContainer extends Component {
	render(){
		const { 
			accountDetails, 
			updateAccountDetails, 
			userDetails,
			updateUserDetails, 
			billingContact,
			updateBillingContact, 
			activeTab, 
			selectTab, 
			validateFunc } = this.props;
		return(
			<Grid fluid>
				<Row id="header">
					<img className="logo" src="./img/rt-logo.png"/>
					<div id="header-text">Account Signup</div>
				</Row>
				<Grid id="content">
					<Row>
						<Col md={12} xs={12}>
							<Tabs activeKey={this.props.activeTab} onSelect={this.props.selectTab} id="signup-form-tabs">
								<Tab eventKey={1} title="1. Account Details">
									<AccountDetails
										accountDetails={accountDetails} 
										updateAccountDetails={updateAccountDetails} 
										validate={validateFunc} />
								</Tab>
								<Tab eventKey={2} title="2. User Details">
									<UserDetails userDetails={userDetails}/>
								</Tab>
								<Tab eventKey={3} title="3. Billing Contact">
									<BillingContact billingContact={billingContact}/>
								</Tab>
							</Tabs>
						</Col>
					</Row>
				</Grid>
			</Grid>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		activeTab: state.ui.tab,
		accountDetails: state.accountDetails,
		userDetails: state.userDetails,
		billingContact: state.billingContact
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		selectTab: (tab) => {
			return dispatch(updateTab(tab));
		},
		updateAccountDetails: (key, value) => {
			return dispatch(updateAccountDetails(key, value));
		},
		updateUserDetails: (key, value) => {
			return dispatch(updateUserDetails(key, value));
		},
		updateBillingContact: (key, value) => {
			return dispatch(updateBillingContact(key, value));
		},
		validateFunc: (validationTypes, value) => {
			return dispatch(validate(validationTypes, value));
		}
	}
}

AppContainer.propTypes = {
	activeTab: PropTypes.number.isRequired,
	accountDetails: PropTypes.object.isRequired,
	userDetails: PropTypes.object.isRequired,
	billingContact: PropTypes.object.isRequired,
	selectTab: PropTypes.func.isRequired,
	updateAccountDetails: PropTypes.func.isRequired,
	updateUserDetails: PropTypes.func.isRequired,
	updateBillingContact: PropTypes.func.isRequired,
	validateFunc: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
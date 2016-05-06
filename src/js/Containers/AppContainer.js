import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import { Grid, Row, Col, Tabs, Tab, Button } from 'react-bootstrap';

import AccountDetails from '../Components/AccountDetails';
import UserDetails from '../Components/UserDetails';
import BillingContact from '../Components/BillingContact';

import { updateTab, updateAccountDetails, updateUserDetails, updateBillingContact, getAddresses } from '../Actions/AppActions';

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
			postcodeLookup } = this.props;

		const next = activeTab < 3 ? <Button bsStyle="primary" onClick={selectTab} block>Next</Button> : null;

		return(
			<Grid fluid>
				<Row id="header">
					<img className="logo" src="./img/rt-logo.png"/>
					<div id="header-text">Account Signup</div>
				</Row>
				<Grid id="content">
					<Row class="wrapper">
						<Col md={12} xs={12}>
							<Tabs activeKey={this.props.activeTab} onSelect={this.props.selectTab} id="signup-form-tabs">
								<Tab eventKey={1} title="1. Account Details" disabled>
									<AccountDetails
										accountDetails={accountDetails} 
										updateAccountDetails={updateAccountDetails}
										postcodeLookup={postcodeLookup}/>
								</Tab>
								<Tab eventKey={2} title="2. User Details" disabled>
									<UserDetails 
										userDetails={userDetails}
										updateUserDetails={updateUserDetails}/>
								</Tab>
								<Tab eventKey={3} title="3. Billing Contact" disabled>
									<BillingContact 
										billingContact={billingContact}
										updateBillingContact={updateBillingContact}/>
								</Tab>
							</Tabs>
						</Col>
						<Col md={12} xs={12}>
							<div class="footer-left">
								<span class="required">*</span> Required Field
							</div>
							<div class="footer-right">
								{next}
							</div>
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
		selectTab: () => {
			return dispatch(updateTab());
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
		postcodeLookup: (postcode) => {
			return dispatch(getAddresses(postcode));
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
	postcodeLookup: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
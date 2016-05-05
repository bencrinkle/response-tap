import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col, Glyphicon, OverlayTrigger, Tooltip, InputGroup, Button } from 'react-bootstrap';

export default class AccountDetails extends Component {
	render(){
		const { accountDetails, updateAccountDetails } = this.props;

		const tooltip = (
	  		<Tooltip id="tooltip">This is a tooltip with some info on it.</Tooltip>
		);

		return(
			<Form className='formContent'>
				<Col sm={6} xs={12}>
					<FormGroup controlId="accountName">
						<ControlLabel>
							<OverlayTrigger placement="right" overlay={tooltip}>
					      		<Glyphicon glyph="question-sign" />
						    </OverlayTrigger>
							Account Name <span class="required">*</span>
						</ControlLabel>
						<FormControl type="text"
							value={accountDetails.accountName}
							onChange={(e) => updateAccountDetails('accountName', e.target.value)}
							placeholder="Account Name" 
						/>
					</FormGroup>
					<FormGroup controlId="businessName">
						<ControlLabel>Business Name <span class="required">*</span></ControlLabel>
						<FormControl type="text"
							value={accountDetails.businessName}
							onChange={(e) => updateAccountDetails('businessName', e.target.value)} 
							placeholder="Business Name" 
						/>
					</FormGroup>
					<FormGroup controlId="companyNumber">
						<ControlLabel>Company Number <span class="required">*</span></ControlLabel>
						<FormControl type="text"
							value={accountDetails.companyNumber}
							onChange={(e) => updateAccountDetails('companyNumber', e.target.value)} 
							placeholder="Company Number" 
						/>
					</FormGroup>
					<FormGroup controlId="telephone">
						<ControlLabel>Telephone <span class="required">*</span></ControlLabel>
							<FormControl type="text"
								value={accountDetails.telephone}
								onChange={(e) => updateAccountDetails('telephone', e.target.value)}
								placeholder="Telephone"
							/>
					</FormGroup>
				</Col>
				<Col sm={6} xs={12}>
					<FormGroup controlId="postcode">
						<ControlLabel>Postcode <span class="required">*</span></ControlLabel>
						<InputGroup>
							<FormControl type="text"
								value={accountDetails.postcode}
								onChange={(e) => updateAccountDetails('postcode', e.target.value)}
								placeholder="Postcode" 
							/>
							<InputGroup.Button>
								<Button><Glyphicon glyph="search"/> Find Address</Button>
							</InputGroup.Button>
						</InputGroup>	
					</FormGroup>
					<FormGroup controlId="timezone">
						<ControlLabel>
							<OverlayTrigger placement="left" overlay={tooltip}>
					      		<Glyphicon glyph="question-sign" />
						    </OverlayTrigger>
							Timezone <span class="required">*</span>
						</ControlLabel>
						<FormControl 
							componentClass="select"
							value={accountDetails.timezone}
							onChange={(e) => updateAccountDetails('timezone', e.target.value)}>
							<option value="select">Please Select....</option>
							<option value="-12">(GMT-12:00) International Date Line West</option>
							<option value="-11">(GMT-11:00) Midway Island, Samoa</option>
							<option value="-10">(GMT-10:00) Hawaii</option>
							<option value="-9">(GMT-09:00) Alaska</option>
							<option value="-8">(GMT-08:00) Pacific Time (US & Canada)</option>
							<option value="-8">(GMT-08:00) Tijuana, Baja California</option>
							<option value="-7">(GMT-07:00) Arizona</option>
							<option value="-7">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
							<option value="-7">(GMT-07:00) Mountain Time (US & Canada)</option>
							<option value="-6">(GMT-06:00) Central America</option>
							<option value="-6">(GMT-06:00) Central Time (US & Canada)</option>
							<option value="-6">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
							<option value="-6">(GMT-06:00) Saskatchewan</option>
							<option value="-5">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
							<option value="-5">(GMT-05:00) Eastern Time (US & Canada)</option>
							<option value="-5">(GMT-05:00) Indiana (East)</option>
							<option value="-4">(GMT-04:00) Atlantic Time (Canada)</option>
							<option value="-4">(GMT-04:00) Caracas, La Paz</option>
							<option value="-4">(GMT-04:00) Manaus</option>
							<option value="-4">(GMT-04:00) Santiago</option>
							<option value="-3.5">(GMT-03:30) Newfoundland</option>
							<option value="-3">(GMT-03:00) Brasilia</option>
							<option value="-3">(GMT-03:00) Buenos Aires, Georgetown</option>
							<option value="-3">(GMT-03:00) Greenland</option>
							<option value="-3">(GMT-03:00) Montevideo</option>
							<option value="-2">(GMT-02:00) Mid-Atlantic</option>
							<option value="-1">(GMT-01:00) Cape Verde Is.</option>
							<option value="-1">(GMT-01:00) Azores</option>
							<option value="0">(GMT+00:00) Casablanca, Monrovia, Reykjavik</option>
							<option value="0">(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London</option>
							<option value="1">(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
							<option value="1">(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
							<option value="1">(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option>
							<option value="1">(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
							<option value="1">(GMT+01:00) West Central Africa</option>
							<option value="2">(GMT+02:00) Amman</option>
							<option value="2">(GMT+02:00) Athens, Bucharest, Istanbul</option>
							<option value="2">(GMT+02:00) Beirut</option>
							<option value="2">(GMT+02:00) Cairo</option>
							<option value="2">(GMT+02:00) Harare, Pretoria</option>
							<option value="2">(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
							<option value="2">(GMT+02:00) Jerusalem</option>
							<option value="2">(GMT+02:00) Minsk</option>
							<option value="2">(GMT+02:00) Windhoek</option>
							<option value="3">(GMT+03:00) Kuwait, Riyadh, Baghdad</option>
							<option value="3">(GMT+03:00) Moscow, St. Petersburg, Volgograd</option>
							<option value="3">(GMT+03:00) Nairobi</option>
							<option value="3">(GMT+03:00) Tbilisi</option>
							<option value="3.5">(GMT+03:30) Tehran</option>
							<option value="4">(GMT+04:00) Abu Dhabi, Muscat</option>
							<option value="4">(GMT+04:00) Baku</option>
							<option value="4">(GMT+04:00) Yerevan</option>
							<option value="4.5">(GMT+04:30) Kabul</option>
							<option value="5">(GMT+05:00) Yekaterinburg</option>
							<option value="5">(GMT+05:00) Islamabad, Karachi, Tashkent</option>
							<option value="5.5">(GMT+05:30) Sri Jayawardenapura</option>
							<option value="5.5">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
							<option value="5.75">(GMT+05:45) Kathmandu</option>
							<option value="6">(GMT+06:00) Almaty, Novosibirsk</option>
							<option value="6">(GMT+06:00) Astana, Dhaka</option>
							<option value="6.5">(GMT+06:30) Yangon (Rangoon)</option>
							<option value="7">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
							<option value="7">(GMT+07:00) Krasnoyarsk</option>
							<option value="8">(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
							<option value="8">(GMT+08:00) Kuala Lumpur, Singapore</option>
							<option value="8">(GMT+08:00) Irkutsk, Ulaan Bataar</option>
							<option value="8">(GMT+08:00) Perth</option>
							<option value="8">(GMT+08:00) Taipei</option>
							<option value="9">(GMT+09:00) Osaka, Sapporo, Tokyo</option>
							<option value="9">(GMT+09:00) Seoul</option>
							<option value="9">(GMT+09:00) Yakutsk</option>
							<option value="9.5">(GMT+09:30) Adelaide</option>
							<option value="9.5">(GMT+09:30) Darwin</option>
							<option value="10">(GMT+10:00) Brisbane</option>
							<option value="10">(GMT+10:00) Canberra, Melbourne, Sydney</option>
							<option value="10">(GMT+10:00) Hobart</option>
							<option value="10">(GMT+10:00) Guam, Port Moresby</option>
							<option value="10">(GMT+10:00) Vladivostok</option>
							<option value="11">(GMT+11:00) Magadan, Solomon Is., New Caledonia</option>
							<option value="12">(GMT+12:00) Auckland, Wellington</option>
							<option value="12">(GMT+12:00) Fiji, Kamchatka, Marshall Is.</option>
						</FormControl>
					</FormGroup>
					<FormGroup controlId="paymentmethod">
						<ControlLabel>Payment method <span class="required">*</span></ControlLabel>
						<FormControl componentClass="select"
							value={accountDetails.paymentmethod}
							onChange={(e) => updateAccountDetails('paymentmethod', e.target.value)}>
							<option value="select">Please Select...</option>
							<option value="banktransfer">Bank Transfer</option>
							<option value="creditcard">Credit Card</option>
							<option value="debitcard">Debit Card</option>
						</FormControl>
					</FormGroup>
				</Col>											
			</Form>
		);
	}
}
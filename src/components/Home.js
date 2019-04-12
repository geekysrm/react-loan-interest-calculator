import React, { Component } from "react";
import axios from "axios";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import NavBar from "./NavBar";
import "./Home.css";

class App extends Component {
	state = {
		amount: 500,
		months: 6,
		interestRate: 0,
		monthlyPayment: 0,
		numPayments: 0
	};

	componentDidMount() {
		axios
			.get(
				`https://ftl-frontend-test.herokuapp.com/interest?amount=${
					this.state.amount
				}&numMonths=${this.state.months}`
			)
			.then(res => {
				this.setState({
					interestRate: res.data.interestRate,
					monthlyPayment: res.data.monthlyPayment.amount,
					numPayments: res.data.numPayments
				});
			})
			.catch(e => console.log(e));
		console.log(this.state);
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			this.state.amount !== prevState.amount ||
			this.state.months !== prevState.months
		) {
			axios
				.get(
					`https://ftl-frontend-test.herokuapp.com/interest?amount=${
						this.state.amount
					}&numMonths=${this.state.months}`
				)
				.then(res => {
					console.log(res.data);
					if (res.data.status && res.data.status === "error") {
						// Show error to user
					} else {
						this.setState({
							interestRate: res.data.interestRate,
							monthlyPayment: res.data.monthlyPayment.amount,
							numPayments: res.data.numPayments
						});
					}
				})
				.catch(e => console.log(e));
		}
	}

	formatAmountLabel = val => {
		return `$${val}`;
	};

	render() {
		return (
			<>
				<NavBar />
				<div className="jumbotron">
					<h1 className="display-4">Hello, world!</h1>
					<p className="lead">
						This is a simple hero unit, a simple jumbotron-style component for
						calling extra attention to featured content or information.
					</p>
					<hr className="my-4" />
					<p>
						It uses utility classes for typography and spacing to space content
						out within the larger container.
					</p>
				</div>

				<div className="container w-100">
					<form>
						<div className="form-group">
							<label>Loan Amount</label>
							<InputRange
								maxValue={5000}
								minValue={500}
								value={this.state.amount}
								onChange={amount => this.setState({ amount })}
								formatLabel={this.formatAmountLabel}
							/>
						</div>
						<div className="form-group">
							<label>Loan Duration (in months)</label>
							<InputRange
								maxValue={24}
								minValue={6}
								value={this.state.months}
								onChange={months => this.setState({ months })}
							/>
						</div>
					</form>
					<br />
					<div className="interest-details-wrapper">
						<h2>Interest Details: </h2>
						<p className="interest-data">
							<span className="interest-label">Interest Rate: </span>
							<span className="interest-display test">
								${this.state.interestRate}
							</span>
						</p>
						<p className="interest-data">
							<span className="interest-label">Monthly Payment:</span>{" "}
							<span className="payment-display test">
								${this.state.monthlyPayment}
							</span>
						</p>
						<p className="interest-data">
							<span className="interest-label">Number of Payments:</span>{" "}
							<span className="number-display test">
								{this.state.numPayments}
							</span>
						</p>
					</div>
				</div>
			</>
		);
	}
}

export default App;

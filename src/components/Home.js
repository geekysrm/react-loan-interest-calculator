import React, { Component } from "react";
import axios from "axios";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class App extends Component {
	state = {
		amount: 500,
		// amount: { min: 2, max: 10 },
		months: 0,
		interestRate: 0,
		monthlyPayment: 0,
		numPayments: 0
	};

	// componentDidMount() {
	// 	axios
	// 		.get(
	// 			`https://ftl-frontend-test.herokuapp.com/interest?amount=${
	// 				this.state.amount
	// 			}&numMonths=${this.state.months}`
	// 		)
	// 		.then(res => {
	// 			this.setState({
	// 				interestRate: res.data.interestRate,
	// 				monthlyPayment: res.data.monthlyPayment.amount,
	// 				numPayments: res.data.numPayments
	// 			});
	// 		})
	// 		.catch(e => console.log(e));
	// 	console.log(this.state);
	// }

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

	// componentDidUpdate(prevProps, prevState) {
	// 	if (!prevState.length) {
	// 		this.setState({ projects: this.state.projects });
	// 	}
	// }

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
	};
	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<div className="container w-100">
				<form onSubmit={this.handleSubmit}>
					{/*this.state.error && (
						<div className="alert alert-danger" role="alert">
							{this.state.error}
						</div>
					)}*/}
					<div className="form-group">
						<label>Loan Amount</label>
						<input
							type="number"
							name="amount"
							onChange={this.onChange}
							className={`form-control`}
							placeholder="Enter loan amount"
						/>
					</div>
					<div className="form-group">
						<InputRange
							maxValue={5000}
							minValue={500}
							value={this.state.amount}
							onChange={amount => this.setState({ amount })}
						/>
					</div>
					<div className="form-group">
						<label>Loan Duration (in months)</label>
						<input
							type="number"
							name="months"
							onChange={this.onChange}
							className={`form-control`}
							placeholder="Enter loan duration in months"
						/>
					</div>
					<button type="submit" className="btn btn-success w-100">
						ADD
					</button>
				</form>
				<hr />
				<div className="subscriber-wrapper">
					<h2>Interest Details: </h2>
					<p>
						<b>Interest Rate:</b> {this.state.interestRate}
					</p>
					<p>
						<b>Monthly Payment:</b> {this.state.monthlyPayment}
					</p>
					<p>
						<b>Number of Payments:</b> {this.state.numPayments}
					</p>
				</div>
			</div>
		);
	}
}

export default App;

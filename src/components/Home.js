import React, { Component } from "react";
import axios from "axios";

class App extends Component {
	// componentDidMount() {
	// 	axios
	// 		.get(
	// 			`https://ftl-frontend-test.herokuapp.com/interest?amount=${
	// 				this.state.amount
	// 			}&numMonths=${this.state.months}`
	// 		)
	// 		.then(res => console.log(res.data))
	// 		.catch(e => console.log(e));
	// }
	componentDidUpdate() {
		axios
			.get(
				`https://ftl-frontend-test.herokuapp.com/interest?amount=${
					this.state.amount
				}&numMonths=${this.state.months}`
			)
			.then(res => console.log(res.data))
			.catch(e => console.log(e));
	}
	state = {
		amount: 0,
		months: 0
	};
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
						<label>Amount</label>
						<input
							type="number"
							name="amount"
							onChange={this.onChange}
							className={`form-control`}
							placeholder="Enter amount"
						/>
					</div>
					<div className="form-group">
						<label>Number of months</label>
						<input
							type="number"
							name="months"
							onChange={this.onChange}
							className={`form-control`}
							placeholder="Enter no. of months"
						/>
					</div>
					<button type="submit" className="btn btn-success w-100">
						ADD
					</button>
				</form>
				<hr />
				<div className="subscriber-wrapper">
					<h2>Subscriber to be added</h2>
					<p>
						<b>Name:</b> {this.state.name}
					</p>
					<p>
						<b>Phone:</b> {this.state.phone}
					</p>
				</div>
			</div>
		);
	}
}

export default App;

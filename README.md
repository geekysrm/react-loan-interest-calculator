# React Loan Interest Calculator

A loan interest calculator made with React.

### Live here: http://react-loan-interest-calculator.netlify.com

## Features

- A user interface that allows a user to enter a loan amount and a
  loan duration in months which then displays the interest rate and the monthly payment.
- The user is able to enter the monetary amount and loan duration by using a slider.
- The calculated values is automatically updated as the slider is used - without requiring any
  further interaction by the user.
- The loan amount should be between 500 and 5000 \$ and the loan duration between 6
  and 24 months.
- The following API is used - `https://ftl-frontend-test.herokuapp.com/interest?amount=<amount>&numMonths=<numMonths>`<br/>
  This returns a JSON object with information about the monthly payment and the interest
  rates.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

_Node.JS and npm must be installed. Download and install them from [here](https://nodejs.org)._

### Installing

Follow these steps to run this project in your local computer.

```
$ https://github.com/geekysrm/react-loan-interest-calculator.git
$ cd react-loan-interest-calculator
$ npm i
```

Now, to run the project on port `3000`, run:

```
$ npm start
```

Go to `http://localhost:3000` to view the app.

## Built With

- [React.JS](https://reactjs.org/) -Frontend library used in the project.
- [Bootstrap](https://getbootstrap.com/) - Used for basic styling.

## Authors

- **Soumya Ranjan Mohanty** - [geekysrm](https://github.com/geekysrm)

## License

This project is licensed under the MIT License.

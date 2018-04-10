import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {
		input: '',
		pace: 1,
	}

	handleChange = (evt) => {
		this.setState({ input: evt.currentTarget.value })
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Ars Morendi Fjärdingsväg Calculator</h1>
				</header>
				<div className="container">
					<label style={{ fontSize: 22, fontWeight: 600 }}>Antal dagar resa</label>
					<br />
					<input type="number" className="fjarding__input" onChange={this.handleChange} />

					<label style={{ fontSize: 22, fontWeight: 600 }}>Färdhastighet</label>
					<br />
					<button className="fjarding__button" onClick={() => this.setState({ pace: 0.75 })}>Sakta</button>
					<button className="fjarding__button" onClick={() => this.setState({ pace: 1 })}>Normal</button>
					<button className="fjarding__button" onClick={() => this.setState({ pace: 1.25 })}>Snabb</button>

					{this.state.input && this.state.input.length &&
						<div>
							<h3>Fjärdingsväg per dag</h3>
							<h1>{this.state.input * ((24 / 1.65) * this.state.pace).toFixed(2)}</h1>
						</div>
					}
				</div>
			</div>
		);
	}
}

export default App;

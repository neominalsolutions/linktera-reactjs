import React, { Component } from 'react';
import PropTypes from 'prop-types';
// class componentlerde component doma yüklenince ilk olarak render çalışır
// props component ilk initialize işleminde componente dışarıdan gönderilen değer anlamında kullanılır.
// props üzerinde title ve color değerleri gönderiyoruz.
export default class ClassComponentsDemo extends Component {
	// static defaultProps = {
	// 	name: 'stranger',
	// };
	// counter = 0;
	constructor(props) {
		super();

		console.log('counter-1', this.counter);

		this.state = { counter: 0 }; // state initial value tanımı

		// kullanıcı etkileşimi sonucunda arayüzlerde değişecek değelere state diyoruz. Bunu props ile yapamıyoruz.
		// bu component içerisine increase function bağla. Bağlamayı unutursak state çalışmayacaktır.e
		this.increase = this.increase.bind(this);
	}
	// arrow function ile yazılınca bind komutunu yazmaya gerek yok.
	increase2 = () => {
		// setState de değer değişimini callback ile yakalama mekanizması mevcuttur
		this.setState({ counter: this.state.counter + 1 }, () => {
			console.log('new-value', this.state.counter);
		});
	};

	increase() {
		this.setState({ counter: this.state.counter + 1 });
		// this.counter++;
		console.log('counter-2', this.counter);
	}

	render() {
		return (
			<div style={{ color: this.props.color }}>
				<p>State: {this.state.counter}</p>

				<button onClick={this.increase2}>(+)</button>
			</div>
		);
	}
}

// componenteki propların tipini bilmemiz sağlar.
ClassComponentsDemo.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
};

// Componente default değerleri set eder.
ClassComponentsDemo.defaultProps = {
	title: 'Class Component',
	color: 'purple',
};

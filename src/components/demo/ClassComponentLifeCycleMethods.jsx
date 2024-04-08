import React, { Component } from 'react';

export default class ClassComponentLifeCycleMethods extends Component {
	// apidan veri çekip ekrana veri basma işlemi yapalım

	constructor() {
		super();
		// super her zaman this keyworden önce çağırılır.
		this.state = { counter: 0, todos: [] };
	}

	componentDidMount() {
		console.log('component doma ilk girişinde tetiklenir');
		// 1 kere tetiklenir.
		// component açılışında ilk veri çekme işlemini burada yaparız.
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => {
				console.log('response', response);
				return response.json(); // json serialize ettik
			})
			.then((data) => {
				console.log('data', data);
				this.setState({ todos: data });
			})
			.catch((error) => {
				console.log('err', error);
			});
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('prevProps', prevProps);
		console.log('prevState', prevState);
		console.log('snapshot', snapshot);

		console.log('state güncellendiğinde tetiklenir');
	}

	componentWillUnmount() {
		console.log('component domdan çıkışında tetiklenir');
		// bir sayfadan başka bir sayfaya geçişte tetilklenir. Yanlız bu sayfa geçişleri react-router paketi üzerinden olmalıdır. Client side yönlendirmede çalışır
		// web socket bağlantısı varsa kaynak tüketmesin diye terminate ederiz.
		// Interval varsa clear interval ile temizleriz.
		// Animation varsa animasyonları sonlarırız.
	}

	// component state değişiminde componentin state update edip etmeyeceğini kontrol ederiz.
	shouldComponentUpdate() {
		console.log('shouldComponentUpdate');
		return true;
	}

	render() {
		return (
			<div>
				ClassComponentLifeCycleMethods Counter: {this.state.counter}
				<button
					onClick={() => {
						this.setState({ counter: this.state.counter + 1 }, () => {
							console.log('state değişti');
						});
					}}
				>
					Set State
				</button>
				{/* react dom listeme işlemleri map ile yapılıyor */}
				<ul>
					{this.state.todos.map((item) => {
						return <div key={item.id}>{item.title}</div>;
					})}
				</ul>
			</div>
		);
	}
}

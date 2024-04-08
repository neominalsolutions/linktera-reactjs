// <></> fragment jsx dosyasının ana kapsayıcısır.

import { type } from '@testing-library/user-event/dist/type';

function ArrowFunction() {
	// ES6 ile geldi
	// arrow function ile methoda unique bir isim vermiş olduk.
	const showMessage = () => alert('Tıklandı');
	// const showMessage = () => alert('tıklandı 2')

	// *** Uyarı:  JS functionlarda ovverload mekanizması yok
	// default function sıkıntısı aynı isimde function tanımlayabiliyoruz.
	// function showMessage2() {
	// 	alert('tıklandı');
	// }

	// function showMessage2(message) {
	// 	alert(message);
	// }

	// JS de '' ile "" arasındaki hiç bir fark yok ama '' kullanımı daha yaygın kabul görmüştür.

	// Not: JS de diğer dillerde olmayan NAN,undefined gibi tanımlamalarda varmış.
	const sum = (x, y) => {
		if (typeof y === 'string') {
			// tpi string ise Number değerine dönüştür.
			// eğer değer Not a Number ise y 0 olarak güncelle.
			if (isNaN(y)) y = 0;
			y = Number(y);
		}

		if (typeof y === 'undefined') {
			y = 0;
		}

		console.log('y-type', typeof y);

		return x + y;
	};

	let number10;
	// const sumResult = sum(10, '25'); => 1025
	// const sumResult = sum(10,25); => 35
	// const sumResult = sum(10, '25px'); // NAN Not A Number
	// değişken tanımı var ama değer ataması yok.
	console.log('number-10', typeof number10);

	const sumResult = sum(10); // NAN

	return (
		<>
			<div>Arrow Functions</div>
			{/* event binding */}
			<button onClick={showMessage}>Click</button>
			{/* <button onClick={() => showMessage2('can')}>Click2</button> */}
			<p>Toplam : {sumResult}</p>
		</>
	);
}

export default ArrowFunction;

import React from 'react';

function DefaultRestOperators() {
	// KURAL. default değeri olanlar function parametresinde en sonda olmalıdır.
	// NOT: Parametrik değerler ile çalışan function kullanımında  () => defaultValue() yazım şekli callback function yöntemi ile

	const showMessage = () => {
		// parametre yoksa direkt olarak bağlayabiliriz onClick={showMessage}
		alert('Mesaj');
	};

	const defaultValue = (limit, page = 1) => {
		console.log('pageNumber', page);
		console.log('limit', limit);
	};

	// ... rest operator
	// C# params
	const average = (...grades) => {
		let sum = 0;
		grades.forEach((grade) => {
			sum += grade;
		});

		console.log('ortalama' + sum / grades.length);
	};

	return (
		<div>
			<button onClick={() => defaultValue(5)}>Default Value Func</button>
			<button onClick={() => average(30, 56, 89, 67)}>Ortalama Hesapla</button>
			<button onClick={showMessage}>Show Message</button>
		</div>
	);
}

export default DefaultRestOperators;

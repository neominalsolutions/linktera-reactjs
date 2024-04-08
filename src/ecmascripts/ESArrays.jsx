function ESArrays() {
	// Kurallar
	// JS Diziler objectir. (Ref type)
	// JS Diziler hetorejendir. (birden fazla tip de değere sahip olabilir)
	// Generic kavramı JS yok.
	const names = [
		// Array Literal tanımı
		'ali',
		'ahmet',
		'mustafa',
		'hande',
		15,
		true,
		false,
		JSON.stringify({ id: 1, name: 'Harun' }),
	];

	// ES5 ile ARRAY çalışma şekli
	const numbers = new Array(3); // 5 elemanlı boş bir dizi tanımı
	numbers.push(10);
	numbers.push(20); // diziye sıraları eleman ekler.
	numbers.unshift(45); // dizinin ilk elemanı ekler
	numbers.splice(0, 1); // 0.indeksten 1 adet sil

	// ES6 da find,filter,some lambda,spread operators

	let numbers2 = [...numbers, 56]; // spread operatör ile sona eleman ekleme
	numbers2 = [33, ...numbers2]; // spread operatör ile başa eleman ekleme

	numbers2 = numbers2.filter((x) => x > 30 && x < 60); // 30 ile 60 arasındaki filtrele (silme işlemlerinde filter)

	// spread operatorü ile hem dizideki elemanlara ekleme çıkarma işlemleri yapılırken hemde yep yeni bir referansı olan dizi oluşmuş oluyor.

	// let numbers3 = [...numbers];
	let numbers3 = numbers.slice(); // 2. yöntem spread yerine slice kullanmak.
    
	// let numbers3 = numbers; // şuan aynı referansa bakıyorlar bu durum ciddi yanlış geliştirmelere yok açabilir, lütfen spread operatörü kullanalım
	numbers3.push(99);

	return (
		<>
			<p>Names: {names.join(',')}</p>
			<p>Numbers: {numbers.join(',')}</p>
			<p>Numbers2 : {numbers2.join(',')}</p>
			<p>Numbers3 : {numbers3.join(',')}</p>
		</>
	);
}

export default ESArrays;

// ES5 Function Construction işe class tanımı
// Prototype Based OOP
function Person(name, lastname) {
	this.name = name;
	this.lastname = lastname;

	this.fullName = function () {
		return this.name + ' ' + this.lastname;
	};
}

const p = new Person('ali', 'Tan');
console.log('fullname', p);

Object.defineProperty(p, 'age', {
	writable: true,
	configurable: true,
	enumerable: true,
	value: 18,
});

const city = { street: 'Esentepe', postalCode: '34500' };

console.log('city', city); // Object Literal yöntemi

// ES6 ile birlikte Class yapısını desteklemeye başladı.

export class Human {
	#name; // field private değişkenler.
	#lastname;

	constructor(name, lastname) {
		// super(); // JAVA benzer.
		this.#name = name;
		this.#lastname = lastname;
		// this keyword ile consturctor gelen veriler super keyword altında tanımlanmalıdır.
		// class sadece tek bir contructora ship olmalıdır. Constructor overload.
	}

	get Name() {
		// default public dışarı açık.
		// property public variables
		return this.#name;
	}

	set Name(name) {
		// setter desteği JAVA benzer bir yazılm şeklir.
		this.#name = name;
	}

	getFullName() {
		// method
		return this.#name + ' ' + this.#lastname;
	}
}

// extends kalıtım verme işlemleri extends keyword ile yapılıyor.
export class Employee extends Human {
	#socialNumber; // # varsa private kabul eder.

	constructor(socialNumber, name, surname) {
		super(name, surname);
		this.#socialNumber = socialNumber;
	}

	get socialNumber() {
		return this.#socialNumber;
	}
}

// JS Generic Class Yok, Interface YOK, Enum YOK, Abstract Class YOK, Access Modifier (Private,Protected,Public)

// ccc
// ffc

function ESClasses() {
	const h = new Human('ali', 'can');
	h.Name = 'Kaan';

	const e = new Employee('23234', 'Hakan', 'Yunus');

	return (
		<>
			<div>Human: {h.getFullName()}</div>
			<div>Employee: {e.getFullName()}</div>
		</>
	);
}

export default ESClasses;

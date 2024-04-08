import './App.css';
import ArrowFunction from './ecmascripts/ArrowFunctions';
import ESArrays from './ecmascripts/ESArrays';
import ESClasses from './ecmascripts/ESClasses';
import EqualsOperators from './ecmascripts/EqualsOperators';
import Variables from './ecmascripts/Variables';
// export edilen componentleri başka bir js dosyasında import ederek kullanabiliyoruz.

function App() {
	// arrow functions
	// spread operators
	// class
	// promise (async call)
	// asyc await

	// const h = new Human();

	return (
		<div style={{ padding: '20px' }}>
			<Variables />
			<ArrowFunction />
			<EqualsOperators />
			<ESArrays />
			<ESClasses />
		</div>
	);
}

export default App;

import logo from './logo.svg';
import './App.css';
import Variables from './ecmascripts/Variables';
import ArrowFunction from './ecmascripts/ArrowFunctions';
import EqualsOperators from './ecmascripts/EqualsOperators';
import ESArrays from './ecmascripts/ESArrays';
// export edilen componentleri başka bir js dosyasında import ederek kullanabiliyoruz.

function App() {
	// arrow functions
	// spread operators
	// class
	// promise (async call)
	// asyc await

	return (
		<div style={{ padding: '20px' }}>
			<Variables />
			<ArrowFunction />
			<EqualsOperators />
			<ESArrays />
		</div>
	);
}

export default App;

import './App.css';
import ArrowFunction from './components/ecmascripts/ArrowFunctions';
import DefaultRestOperators from './components/ecmascripts/DefaultRestOperators';
import ESArrays from './components/ecmascripts/ESArrays';
import ESClasses from './components/ecmascripts/ESClasses';
import EqualsOperators from './components/ecmascripts/EqualsOperators';
import Promises from './components/ecmascripts/Promises';
import Variables from './components/ecmascripts/Variables';
// export edilen componentleri başka bir js dosyasında import ederek kullanabiliyoruz.

function App() {
	return (
		<div style={{ padding: '20px' }}>
			<Variables />
			<ArrowFunction />
			<EqualsOperators />
			<ESArrays />
			<ESClasses />
			<DefaultRestOperators />
			<Promises />
		</div>
	);
}

export default App;

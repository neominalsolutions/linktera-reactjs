function EqualsOperators() {
	// JS ortamında == ve === olmak üzere 2 tip eşitlik söz konusur.
	// == değer eşitliğine bakar
	// === değer ve tip eşitliğine bakar.
	const number1 = Math.round(Math.random() * 3);
	// const number2 = Math.round(Math.random() * 3);
	const number2 = Math.round(Math.random() * 3);

	// js de === ile değişken kullanımı daha doğru ve güvenli bir kullanımdır.

	if (number1 === number2) {
		return <>Tip ve Değer Eşitliği Var</>;
	}

	if (number1 == number2) {
		return <>Değer Eşitliği Var</>;
	}

	return <>Değer Eşitliği Yok</>;
}

export default EqualsOperators;

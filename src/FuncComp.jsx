const FuncComp = () => {
	const date = new Date();
	let even = date.getDate() % 2 === 0;
	const number = Math.floor(Math.random() * (100 - 1)) + 1;

	return (
		<div>
			{even && <p>Datum je paran!</p>}
			{!even && <p>{number}</p>}
		</div>
	);
};

export default FuncComp;

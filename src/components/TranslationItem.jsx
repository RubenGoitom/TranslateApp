export default function TranslationItem({ char, delay }) {
	return (
		<>
			<img
				src={`../img/${char}.png`}
				alt={`Sign of letter ${char}`}
				style={{ "--delay": delay }}
			/>
		</>
	);
}

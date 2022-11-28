import TranslationItem from "./TranslationItem";

export default function TranslationField(props) {
	const { text, translation, loading } = props;
	return (
		<div className="animate__animated animate__bounceInRight" id="translationContainer">
			<div id="translationArea">
				{loading && (
					<img id="loadingSpinner" src="../bars-scale-middle.svg" alt="loading icon" />
				)}

				{!loading &&
					translation?.split("").map((char, index) => {
						return char.match(/^[a-z]+$/) ? (
							<TranslationItem key={index + char} char={char} delay={index} />
						) : (
							<p
								key={index + char}
								alt="not a letter"
							>
								{char}
							</p>
						);
					})}
			</div>
			<p id="translationText">{text}</p>
		</div>
	);
}

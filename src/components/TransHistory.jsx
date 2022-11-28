import TranslationHistoryItem from "./TranslationHistoryItem";

const TranslationHistory = ({ translations }) => {
	return (
		<section className="animate__animated animate__rubberBand">
			<ul>
				{translations?.length === 0 && <li>You have no translations!</li>}
				{translations?.map((translation, index) => { // Key is not the best solution, but yeye
					return (
						<TranslationHistoryItem key={translation + index} item={translation} />
					);
				})}
			</ul>
		</section>
	);
};

export default TranslationHistory;

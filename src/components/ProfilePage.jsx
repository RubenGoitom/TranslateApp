import { translationClearHistory } from "../API/translate";
import { useUser } from "./../context/UserContext";
import withAuth from "./../hoc/withAuth";
import { storageSave } from "../used/storage";
import Header from "./Head";
import TranslationHistory from "./TransHistory";
import { STORAGE_KEY_USER } from "./../const/storageKeys";

export const ProfilePage = () => {
	const { user, setUser } = useUser();

	const handleClearHistoryClick = async () => {
		if (!window.confirm("Are you sure , This can not be undone")) {
			return;
		}

		const [clearError] = await translationClearHistory(user.id);

		if (!clearError) {
			const updatedUser = {
				...user,
				translations: [],
			};

			storageSave(STORAGE_KEY_USER, updatedUser);
			setUser(updatedUser);
		}
	};

	return (
		<div id="mainContent">
			<div>
				<Header headerText={"Previous Translations"} />
			</div>
			<TranslationHistory translations={user?.translations} />
			{user?.translations?.length !== 0 && (
				<button
					id="btnDeleteTranslations"
					className="button animate__animated animate__tada"
					onClick={handleClearHistoryClick}
				>
					Delete Translations
				</button>
			)}
		</div>
	);
};

export default withAuth(ProfilePage);

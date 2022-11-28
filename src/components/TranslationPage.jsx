import InputField from "./InputField";
import TranslationField from "./Transfield";
import withAuth from "./../hoc/withAuth";
import { addTranslation } from "../API/translate";
import { useState } from "react";
import { useUser } from "./../context/UserContext";
import { storageSave } from "../used/storage";
import { STORAGE_KEY_USER } from "./../const/storageKeys";

const TranslationPage = () => {
	const [translation, setTranslation] = useState();
	const { user, setUser } = useUser();

	const [loading, setLoading] = useState(false);

	const handleOnClick = async (data) => {
		console.log(data);
		const [error, updatedUser] = await addTranslation(user, data);
		if (updatedUser) {
			setTranslation(data);
			storageSave(STORAGE_KEY_USER, updatedUser);
			setUser(updatedUser);
		}
		setLoading(false);
	};


	return (
		<>
			<div id="translateContainer">
				<div id="translateInputContainer">
					<InputField
						inputPlaceholder={"Translate something!"}
						handleOnClick={handleOnClick}
						loading={loading}
						setLoading={setLoading}
					/>
				</div>
			</div>
			<TranslationField
				text={"Translation"}
				translation={translation?.toLowerCase()}
				loading={loading}
			/>
		</>
	);
};

export default withAuth(TranslationPage);

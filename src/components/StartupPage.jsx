import InputBox from "./inp";
import Header from "./Head";
import { loginUser } from "../API/user";
import { storageSave } from "../used/storage";
import { useNavigate } from "react-router-dom";
import { useUser } from "./../context/UserContext";
import { useEffect, useState } from "react";
import { STORAGE_KEY_USER } from "./../const/storageKeys";

export default function StartupPage() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const { user, setUser } = useUser();

	useEffect(() => {
		if (user) {
			navigate("/translate");
		}
	}, [user, navigate]);

	const handleOnClick = async (data) => {
		const [error, userResponse] = await loginUser(data);
		if (userResponse) {
			storageSave(STORAGE_KEY_USER, userResponse);
			setUser(userResponse);
		}else{
			return error;
		}

		setLoading(false);
	};

	return (
		<div id="mainContent">
			<Header headerText={"Lost in Translation"} pText={"Get started"} />
			<InputBox inputPlaceholder={"Enter your name:"} handleOnClick={handleOnClick} loading={loading} setLoading={setLoading}
			/>
			{loading && (
				<img id="loadingSpinnerStart"	src="../3-dots-move.svg" alt="loading icon"/>
			)}
		</div>
	);
}


import { NavLink } from "react-router-dom";
import { storageDelete } from "../used/storage";
import { useUser } from "../context/UserContext";
import Image from "./bilde";
import Profile from "./Profile";
import { STORAGE_KEY_USER } from "../const/storageKeys";

export default function Navigation() {
	const { user, setUser } = useUser();

	const logout = () => {
		storageDelete(STORAGE_KEY_USER);
		setUser(null);
	};

	return (
		<header id="frontHeader">
			<nav>
				<NavLink to="/translate">
					<div id="navElementContainer">
						{user && <Image img1={50} img2={35} alt="Logos" />}
						<h1>Lost in Translation</h1>
					</div>
				</NavLink>

				{user && (
					<div id="navFlex">
						<NavLink to={"/profile"}>
							<Profile />
						</NavLink>
						<button id="btnLogout" className="button" onClick={logout}>
							Logout
						</button>
					</div>
				)}
			</nav>
		</header>
	);
}

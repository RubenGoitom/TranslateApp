import { useUser } from "./../context/UserContext";

export default function Profile() {
	const { user } = useUser();

	return (
		<div id="profileNav">
			<p>{user?.username}</p>
			<img id="profilePic" src="https://i.pravatar.cc/300" alt="Profile" width={40} height={40}
			/>
		</div>
	);
}

import Image from "./bilde";

 const Header = (props) => {
	const { headerText, Text } = props;
	return (
		<header id="headerContainer">
			<Image img1={130} img2={100} />
			<div>
				<h1>{headerText}</h1>
				{Text && <p>{Text}</p>}
			</div>
		</header>
	);
}

export default Header;

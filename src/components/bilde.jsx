export default function Image(props) {
	const { img1, img2 } = props;

	return (
		<div id="headerImages"> 
			<img id="img1" className="centered" src="../Splash.svg" alt="logo" width={img1}></img>
			<img id="img2" className="centered" src="../Logo.png" alt="logo" height={img2}></img>
		</div>
	);
}

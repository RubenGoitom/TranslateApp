import { useForm } from "react-hook-form";

const inputConfig = {
	required: true,
	minLength: 3,
	maxLength: 100,
};

export default function InputField(props) {
	const { inputPlaceholder, handleOnClick, setLoading, loading } = props;
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	console.log(errors);

	const onSubmit = async ({ data }) => {
		setLoading(true);
		handleOnClick(data);
	};

	return (
		<>
			<form
				className="inputFlex animate__animated animate__bounceInLeft"
				onSubmit={handleSubmit(onSubmit)}
			>
				<label id="labelForInput" htmlFor="inputField">
				</label>
				<input
					id="inputField"
					name="inputField"
					placeholder={inputPlaceholder}
					{...register("data", inputConfig)}
				/>
				<button disabled={loading} type="submit" className="btnProceed button">
					Login
				</button>
			</form>
		</>
	);
}

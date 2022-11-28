import InputField from "./InputField";

export default function InputBox(props) {
  const { inputPlaceholder, handleOnClick, loading, setLoading } = props;

  return (
    <div className="animate__animated animate__bounceInRight" id="inputContainer">
      <InputField
        inputPlaceholder={inputPlaceholder}
        handleOnClick={handleOnClick}
        loading={loading}
				setLoading={setLoading}
      />
    </div>
  );
}

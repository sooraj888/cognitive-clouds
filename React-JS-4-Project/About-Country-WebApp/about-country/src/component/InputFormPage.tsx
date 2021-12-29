import { Link } from "react-router-dom";

const InputFormPage = ({
  handleOnInputCountryChange,
  isCountryTyped,
  typedCountry,
  onInputFormSubmit,
}: any) => {
  console.log("displaying Input Page");
  return (
    <form className="inputCountryForm" onSubmit={onInputFormSubmit}>
      <label htmlFor="countryName">Enter country name:</label>
      <input
        type="tex"
        autoFocus
        placeholder="country name"
        className="countryName"
        required
        onChange={handleOnInputCountryChange}
        value={typedCountry}
      ></input>
      <Link to="/country-details-page">
        <input type="submit" disabled={isCountryTyped}></input>
      </Link>
    </form>
  );
};

export default InputFormPage;

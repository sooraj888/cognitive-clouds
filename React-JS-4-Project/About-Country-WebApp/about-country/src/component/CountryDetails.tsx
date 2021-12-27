import React from "react";

const CountryDetails = ({ typedCountry }: any) => {
  return (
    <div className="country-details-page">
      <h1>{typedCountry}</h1>
      Capital <br></br>
      population <br></br>
      lating <br></br>
      Flag <br></br>
      image url<br></br>
      <button>capital whether </button>
    </div>
  );
};

export default CountryDetails;

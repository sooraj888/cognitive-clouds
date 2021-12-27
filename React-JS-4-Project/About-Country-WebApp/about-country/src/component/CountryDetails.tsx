import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MockCountryData from "../MockCountryData";

const CountryDetails = ({ typedCountry }: any) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/" + typedCountry)
      .then((response) => response.json())
      .then((resData) => {
        setData(resData[0]);

        console.log("direct data data", resData);
        localStorage.setItem("data", JSON.stringify(data));
      });
  }, [typedCountry]);
  return (
    <div className="country-details-page">
      <h1>{data?.name?.common}</h1> <br></br>
      Capital:{data?.capital} <br></br>
      population:{data?.population} <br></br>
      latlng{data?.latlng} <br></br>
      Flag<img src={data?.flags?.png}></img> <br></br>
      <a href={data?.flags?.png}>{data?.flags?.png}</a>
      <br></br>
      <button>capital whether </button>
    </div>
  );
};

export default CountryDetails;

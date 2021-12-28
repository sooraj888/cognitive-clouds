import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MockCountryData from "../MockCountryData";
import mockWhetherApi from "../mockWhetherApi";

const CountryDetails = ({ typedCountry, data, setData }: any) => {
  const [isLoadingi, setIsLoding] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("loading . . .");

  const [isWhetherHide, setIsWetherHide] = useState(true);
  const [whetherData, setWhetherData] = useState<any>(mockWhetherApi);

  const handleOnCapitalWhether = () => {
    if (isWhetherHide) {
      setIsWetherHide(false);
    } else {
      setIsWetherHide(true);
    }
  };
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/" + typedCountry)
      .then((response) => response.json())
      .then((resData) => {
        setData(resData[0]);

        console.log("direct data data", resData);
        localStorage.setItem("data", JSON.stringify(data));
        if (resData?.status === 404) {
          setMessage("404 Not Found");
          setIsLoding(true);
        } else {
          setIsLoding(false);
        }
      });
  }, [typedCountry]);
  console.log("wether", whetherData, "asdad");
  return (
    <div>
      {isLoadingi ? (
        <>{message} </>
      ) : (
        <div className="country-details-page">
          <h1>{data?.name?.common}</h1> <br></br>
          Capital:{data?.capital} <br></br>
          population:{data?.population} <br></br>
          latlng{data?.latlng} <br></br>
          Flag<img src={data?.flags?.png}></img> <br></br>
          <a>{data?.flags?.png}</a>
          <br></br>
          <button onClick={handleOnCapitalWhether}>capital whether </button>
          {isWhetherHide ? (
            <></>
          ) : (
            <div>
              whether report of {data?.capital}
              <img src={whetherData?.current?.weather_icons[0]}></img>
              <div>Tempratur:{whetherData?.current?.temperature} </div>
              <div>Wind speed : {whetherData?.current?.wind_speed}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CountryDetails;

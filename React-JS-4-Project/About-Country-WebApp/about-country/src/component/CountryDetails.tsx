import React, { useCallback, useEffect, useState } from "react";

import mockWhetherApi from "../mockWhetherApi";

const CountryDetails = ({
  typedCountry,
  data,
  setData,
  setTypedCountry,
}: any) => {
  const [isLoadingi, setIsLoding] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("loading . . .");

  const [isWhetherHide, setIsWetherHide] = useState(true);
  // const [whetherData, setWhetherData] = useState<any>(mockWhetherApi);
  const [whetherData, setWhetherData] = useState<any>();
  const handleOnCapitalWhether = () => {
    if (isWhetherHide) {
      setIsWetherHide(false);
    } else {
      setIsWetherHide(true);
    }

    
  };

  const checkTypedCountry = (countryName: any) => {
    if (countryName === "") {
      return localStorage.getItem("typedCountry");
    } else {
      return countryName;
    }
  };

  console.log("typedCountry", typedCountry);
  const handleFetchCountryData = useCallback(() => {
    try {
      fetch(
        "https://restcountries.com/v3.1/name/" + checkTypedCountry(typedCountry)
      )
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
    } catch {
      console.log("no internet");
    }
  }, [typedCountry]);
  useEffect(handleFetchCountryData, [handleFetchCountryData]);
  console.log("wether", whetherData, "asdad");
  return (
    <div className="country-page">
      {isLoadingi ? (
        <>{message} </>
      ) : (
        <div className="country-details-page">
          <h1>{data?.name?.common}</h1>
          <div>
            <span>Capital:</span>:<span>{data?.capital}</span>
          </div>
          <div>
            <span>Population</span>:<span>{data?.population}</span>
          </div>
          <div>
            <span>LatLng:</span>:<span>{data?.latlng}</span>
          </div>
          <img src={data?.flags?.png}></img>
          <a target="_blank" href={data?.flags?.png}>
            {data?.flags?.png}
          </a>

          <button onClick={handleOnCapitalWhether}>capital whether </button>
          {isWhetherHide ? (
            <></>
          ) : (
            <div className="capital-whether">
              <h4>whether report of {data?.capital}</h4>
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

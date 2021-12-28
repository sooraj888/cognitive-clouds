import React, { useCallback, useEffect, useState } from "react";

import mockWhetherApi from "../mockWhetherApi";

const CountryDetails = ({ typedCountry, data, setData }: any) => {
  const [isLoadingi, setIsLoding] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("loading . . .");

  const [isWhetherHide, setIsWetherHide] = useState(true);
  // const [whetherData, setWhetherData] = useState<any>(mockWhetherApi);

  const [whetherData, setWhetherData] = useState<any>();

  const handleOnCapitalWhether = () => {
    if (isWhetherHide) {
      fetch(
        "http://api.weatherstack.com/current?access_key=0501f936724ec061162e4552658a43b6&query=" +
          data?.capital
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Wether data   ..", data);
          setWhetherData(data);
        });

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

  // console.log("typedCountry", typedCountry);

  const handleFetchCountryData = useCallback(() => {
    try {
      fetch(
        "https://restcountries.com/v3.1/name/" + checkTypedCountry(typedCountry)
      )
        .then((response) => response.json())
        .then((resData) => {
          setData(resData[0]);

          // console.log("direct data data", resData);

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
              <div>
                <div className="whetherheadding">
                  <img
                    className="wetherIcon"
                    src={whetherData?.current?.weather_icons[0]}
                  ></img>
                  <h3>
                    whether report of <u>{data?.capital}</u>
                  </h3>
                </div>
              </div>

              <div>
                <span>Tempratur</span>:
                <span>{whetherData?.current?.temperature} </span>
              </div>
              <div>
                <span>Wind speed </span>:
                <span>{whetherData?.current?.wind_speed}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CountryDetails;

/*

http://api.weatherstack.com/current
    ? access_key = YOUR_ACCESS_KEY
    & query = New York


    http://api.weatherstack.com/current?access_key=0501f936724ec061162e4552658a43b6&query= Delhi


     http://api.weatherstack.com/current?access_key=0501f936724ec061162e4552658a43b6&query=pak

    
http://api.weatherstack.com/current?access_key=0501f936724ec061162e4552658a43b6&query=NewYork

*/

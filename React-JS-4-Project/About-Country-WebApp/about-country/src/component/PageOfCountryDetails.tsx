import React, { useEffect, useState } from "react";
import DetailsOfCountry from "./DetailsOfCountry";

const PageOfCountryDetails = ({ typedCountry, data, setData }: any) => {
  console.log("displaying Countrypage");

  const [isLoadingi, setIsLoding] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("loading . . .");

  const [isWhetherHide, setIsWetherHide] = useState(true);

  const [weatherData, setWeatherData] = useState<any>();

  const handleOnCapitalWhether = () => {
    if (isWhetherHide) {
      fetch(
        "http://api.weatherstack.com/current?access_key=0501f936724ec061162e4552658a43b6&query=" +
          data?.capital
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Wether data   ..", data);
          setWeatherData(data);
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

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/name/" + checkTypedCountry(typedCountry)
    )
      .then((response) => response.json())
      .then((responceData) => {
        setData(responceData[0]);
        if (responceData?.status === 404) {
          setMessage("404 Not Found");
          setIsLoding(true);
        } else {
          setIsLoding(false);
        }
      })
      .catch((e) => console.log("error to fetch"));
  }, []);

  return (
    <div className="country-page">
      {isLoadingi ? (
        <>{message} </>
      ) : (
        <DetailsOfCountry
          handleOnCapitalWhether={handleOnCapitalWhether}
          isWhetherHide={isWhetherHide}
          whetherData={weatherData}
          data={data}
        ></DetailsOfCountry>
      )}
    </div>
  );
};

export default PageOfCountryDetails;

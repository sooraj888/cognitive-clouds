import React from "react";
import CapitalWeather from "./CapitalWeather";
const DetailsOfCountry = ({
  data,
  handleOnCapitalWhether,
  isWhetherHide,
  weatherData,
}: any) => {
  return (
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
      <img src={data?.flags?.png} alt="country flag"></img>
      <a target="_blank" href={data?.flags?.png} rel="noreferrer">
        {data?.flags?.png}
      </a>

      <button onClick={handleOnCapitalWhether}>capital weather </button>
      {isWhetherHide ? (
        <></>
      ) : (
        <CapitalWeather whetherData={weatherData} data={data}></CapitalWeather>
      )}
    </div>
  );
};

export default DetailsOfCountry;

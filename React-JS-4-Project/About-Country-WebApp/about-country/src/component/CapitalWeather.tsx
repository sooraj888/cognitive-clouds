import React from "react";

const CapitalWeather = ({ whetherData, data }: any) => {
  return (
    <div className="capital-whether">
      <div>
        <div className="whetherheadding">
          <img
            className="wetherIcon"
            src={whetherData?.current?.weather_icons[0]}
            alt="weather_icons"
          ></img>
          <h3>
            Weather report of <u>{data?.capital}</u>
          </h3>
        </div>
      </div>

      <div>
        <span>Tempratur</span>:<span>{whetherData?.current?.temperature} </span>
      </div>
      <div>
        <span>Wind speed </span>:<span>{whetherData?.current?.wind_speed}</span>
      </div>
    </div>
  );
};

export default CapitalWeather;

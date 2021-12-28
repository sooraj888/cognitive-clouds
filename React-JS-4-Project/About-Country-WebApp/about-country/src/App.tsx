import { useEffect, useState, useCallback } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import "./App.css";
import CountryDetails from "./component/CountryDetails";
import InputFormPage from "./component/InputFormPage";

function App() {
  const [typedCountry, setTypedCountry] = useState("");
  const [isCountryTyped, setIsCountryTyped] = useState(true);
  const [data, setData] = useState<any>([]);

  const handleOnInputCountryChange = (e: any) => {
    localStorage.setItem("typedCountry", e.target.value);
    setTypedCountry(e.target.value);
    if (e.target.value.trim() !== "") {
      setIsCountryTyped(false);
    } else {
      setIsCountryTyped(true);
      e.target.value = e.target.value.trim();
    }
  };

  useEffect(() => {}, [typedCountry]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <InputFormPage
                handleOnInputCountryChange={handleOnInputCountryChange}
                isCountryTyped={isCountryTyped}
                typedCountry={typedCountry}
                setTypedCountry={setTypedCountry}
              ></InputFormPage>
            }
          ></Route>
          <Route
            path="/country-details-page"
            element={
              <CountryDetails
                typedCountry={typedCountry}
                setData={setData}
                data={data}
                setTypedCountry={setTypedCountry}
              ></CountryDetails>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/*


const clicl = () => {
    console.log("data", data);
  };

  const [data, setData] = useState({});

    useEffect(() => {
    setData(mockWhetherApi);
  }, []);

*/
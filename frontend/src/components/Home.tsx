import React, { useState } from "react";
import "./home.css";
import { fetchPrediction } from "../api/predictionApi";
import { InputData } from "../types";
import MyForm from "./form/MyForm";

interface HomeProps {
  accessToken: string | undefined;
}

const Home: React.FC<HomeProps> = ({ accessToken }) => {
  const [prediction, setPrediction] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (values: InputData) => {
    if (!accessToken) {
      setErrorMessage("Access token is missing. Please log in again.");
      setLoading(false);
      return;
    }

    try {
      const predictionValue = await fetchPrediction(values, accessToken);
      setPrediction(predictionValue ?? null);
      setLoading(false);
    } catch (error) {
      setErrorMessage("An error occurred while fetching the prediction.");
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className="home-container">
      <div className="logo">
        <img src="logo.png" alt="logo" />
      </div>
      <h1>Car Price Estimator</h1>
      <MyForm onSubmit={handleSubmit} prediction={prediction} loading={loading} />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Constants from "expo-constants";
// import { RAPID_API_KEY } from "@env";


// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      // "X-RapidAPI-Key": "3a9f8d2b2bmsh1fade4dfd1a93a4p1978ebjsn8813412645b0",
      // "X-RapidAPI-Key": "cb35fc5221mshadf6fc309e2d061p1d74dbjsn59da49cc049d",
      "X-RapidAPI-Key": "1a628a46ddmshfd654a84ca18352p18214djsnf23def90fd74",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
      // console.log(response.data);
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return { data, isLoading, error, refetch };
};

export default useFetch;

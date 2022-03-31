import React, { Component, useState } from "react";
import SearchCtn from "../styles";
import axios from "axios";
import { Form } from "../styles/styles";
const SearchPage = () => {
  const [searchFormData, setSearchFormData] = useState({
    t: "",
    apikey: "aa6b1ac7",
  });
  const HandleInputChangeKey = (target) => {
    setSearchFormData((prev) => ({
      ...prev,
      t: target.value,
    }));
    console.log("input key changed", target.value);
    console.log("input key changed", searchFormData);
  };
  const InitSearch = async (e) => {
    e.preventDefault();
    console.log("all info", searchFormData);
    if (true) {
      return await postRequest(searchFormData)
        .then((res) => {
          console.log("res", res);
        })
        .catch((error) => {});
    }
  };
  return (
    <>
      <SearchCtn>
        <SearchCtn.Nav />
        <SearchCtn.Hero />
        <Form onChange={InitSearch}>
          <div className="form-ctn">
       
            <label for="searchbar">Search</label>
            <input
              id="searchbar"
              onInput={({ target }) => {
                HandleInputChangeKey(target);
              }}
              onChange={({ target }) => {
                HandleInputChangeKey(target);
              }}
            />
          </div>
        </Form>
        <SearchCtn.MoviesList category="action" />
        <SearchCtn.MoviesList category="romance" />
      </SearchCtn>
    </>
  );
};

export default SearchPage;

export const postRequest = ( payload) => {
  var headers = {
    "Content-Type": "application/json",
  };
  return axios.post("http://www.omdbapi.com", JSON.stringify(payload), {
    headers: headers,
  });
};

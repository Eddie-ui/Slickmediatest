import React, { Component, useState } from "react";
import SearchCtn from "../styles";
import axios from "axios";
import { Form } from "../styles/styles";
const SearchPage = () => {
  const [searchFormData, setSearchFormData] = useState({
    t: "",
    
    apikey: "aa6b1ac7",
  });
  const test = {
  
    i: "tt3896198",
    apikey: "aa6b1ac7",
  };
  const [searchStart, setSearchStart] = useState(false);
  const [loader, setLoader] = useState(false);
  const [searchData, setSearchData] = useState({});
  const HandleInputChangeKey = (target) => {
    setSearchFormData((prev) => ({
      ...prev,
      t: target.value,
    }));
    console.log("input key changed", target.value);
    console.log("input key changed", searchFormData);
  };
  const InitSearch = async (e) => {
    setLoader(true)
    setSearchStart(true)
    e.preventDefault();
    console.log("all info", searchFormData, "loader", loader);
    if (true) {
      return await postRequest(test)
        .then((res) => {
           setLoader(false);
          console.log("res", res);

        })
        .catch((error) => {
           setLoader(false);
        });
    }
  };
  return (
    <>
      <SearchCtn>
        <SearchCtn.Nav />
        <SearchCtn.Hero />
        <Form onKeyUp={InitSearch}>
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
              autoFocus={true}
            />
            <p className="d-none">i couldnt use this api, as it says i have to become a patron which i have tried and the web doesnt load, also i dont see how i can apply this api to fetch by category when the api only fetches one search result
            , wink wink, you found the easter egg in my code</p>
            <ul className={searchStart ? "dropdown-menu show" : "dropdown"}>
              {loader ? (
                <div className="loader-ctn">
                  <div className="spinner-border text-secondary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : ""}
             
            </ul>
          </div>
        </Form>
        <SearchCtn.MoviesList category="action" />
        <SearchCtn.MoviesList category="romance" />
      </SearchCtn>
    </>
  );
};

export default SearchPage;

export const postRequest = (payload) => {
  
  return axios.post("https://www.omdbapi.com", JSON.stringify(payload));
};

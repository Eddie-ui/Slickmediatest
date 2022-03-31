import React, { Component, useEffect, useState } from "react";
import SearchCtn from "../styles";
import "./style.css";
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
  const [searchData, setSearchData] = useState(false);
  const [resError, setResError] = useState(false);

  useEffect(() => {
    let checklen = searchFormData.t;
    if (checklen.length < 2) {
      setSearchStart(false);
      setLoader(false);
    }
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
    let checklen = searchFormData.t;
    e.preventDefault();
    console.log("all info", searchFormData, "loader", loader);
    if (checklen.length >= 2) {
      setLoader(true);
      setSearchStart(true);
      setResError(false);
      setSearchData(false);
      return await postRequest(searchFormData)
        .then((res) => {
          console.log("res dtaa", res.data.Response);
          if (res.data.Response) {
            setLoader(false);
            setSearchData(res.data);
            console.log("res", res.data);
          }
          if (res.data.Response == "False") {
            setResError(res.data.Error);
            setLoader(false);
            setSearchStart(true);

            console.log("Entered a Falsy");
            setSearchData(false);
          }
        })
        .catch((error) => {
          setLoader(false);
          setSearchStart(true);
            console.log("Entered an Error");
          setResError("Error getting result please try again");
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
            <p className="d-none">
              i couldnt use this api, because i dont see how i can
              apply this api to fetch by category when the api only fetches one
              search result
            </p>
            <ul className={searchStart ? "dropdown-menu show" : "dropdown"}>
              {loader ? (
                <div className="loader-ctn">
                  <div className="spinner-border text-secondary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                ""
              )}
              {searchData ? (
                <div className="search-res-ctn">
                  <div
                    className="movie-item"
                    style={{ background: `url(${searchData.Poster})` }}
                  ></div>
                  <div className="info-ctn">
                    <h3>
                      <span className="label">Title:</span> {searchData.Title}
                    </h3>
                    <h5>
                      <span className="label">Release Date: </span>
                      {searchData.Released}
                    </h5>
                    <h5>
                      {" "}
                      <span className="label">IMDB Rating: </span>
                      {searchData.imdbRating}
                    </h5>
                    <h5>
                      {" "}
                      <span className="label">Genre: </span>
                      {searchData.Genre}
                    </h5>
                  </div>
                </div>
              ) : (
                <p className="text-center mt-3">{resError}</p>
              )}
              {/* {resError ? <p>{resError}</p> : ""} */}
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
  return axios.post(
    `https://www.omdbapi.com?t=${payload.t}&apikey=${payload.apikey}`
  );
};

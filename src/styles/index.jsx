import React, { Component, useEffect } from "react";
import { Container, Form, Hero, MoviesList, Nav } from "./styles";

export default function SearchCtn({ children }) {
  return <Container>{children}</Container>;
}
SearchCtn.Nav = function SearchCtnNav({ children, ...restProps }) {
  return (
    <Nav {...restProps}>
      <span>MyTestApp</span>
    </Nav>
  );
};
SearchCtn.Hero = function SearchCtnHero({ children, ...restProps }) {
  return (
    <Hero {...restProps}>
      <h3 className="hero-text">
        Watch  something 
        incredible.
      </h3>
    </Hero>
  );
};

SearchCtn.Form = function SearchCtnForm({ children, ...restProps }) {
  return (
    <Form {...restProps}>
      <div className="form-ctn">
        {" "}
        <label for="searchbar">Search</label>
        <input id="searchbar" />
      </div>
    </Form>
  );
};

SearchCtn.MoviesList = function SearchCtnMoviesList({ children, category, ...restProps }) {
    useEffect(
        () => {
            
        },[]
    )
  return (
    <MoviesList {...restProps}>
      <label className="listtitle">Movie Title</label>
      <div className="movies-ctn">
        <div className="movie-item">Martyr of The Mighty</div>
        <div className="movie-item">Martyr of The Mighty</div>
        <div className="movie-item">Martyr of The Mighty</div>
        <div className="movie-item">Martyr of The Mighty</div>
        <div className="movie-item">Martyr of The Mighty</div>
        <div className="movie-item">Martyr of The Mighty</div>
        <div className="movie-item">Martyr of The Mighty</div>
        <div className="movie-item">Martyr of The Mighty</div>
      </div>
    </MoviesList>
  );
};
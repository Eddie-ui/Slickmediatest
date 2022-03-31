import React, { Component } from "react";
import styled from "styled-components/macro";
import heroimg from "../assets/hero.png";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Inter:wght@200;300;400;500;600;700;800;900&display=swap");
  width: 100%;
  overflow: hidden;
  padding-bottom: 40px;
  background: #fff;
`;
export const Nav = styled.nav`
  background: #292929;
  padding-left: 77px;
  height: 18vh;
  align-items: center;
  display: flex;
  width: 100%;

  span {
    border: 1px solid #fff;
    padding: 14px 19px;
    font-size: 16px;
    color: #fff;
  }
  @media (max-width: 834px) {
    justify-content: center;
  }
  @media (max-width: 500px) {
    padding-left: 0px;
    height: 15vh;
    span {
      font-size: 13px;
    }
  }
`;
export const Hero = styled.div`
  background: url(${heroimg});
  height: 82vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;

  h3 {
    width: 400px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 72px;

    color: #fff;
    margin: 0px;
    margin-left: 77px;
  }
  @media (max-width: 834px) {
    h3 {
      text-align: center;
    }
  }
  @media (max-width: 500px) {
    height: 60vh;
    h3 {
      width: 100%;
      font-size: 28px;

      margin-left: 0px !important;
    }
  }
`;
export const Form = styled.form`
  margin-top: 63px;
  label {
    font-size: 16px;
    margin: 0px;
    display: block;
    font-weight: 400;
    font-size: 24px;
  }
  input {
    height: 54px;
    width: 100%;
  }
  .form-ctn {
    margin: 0px 77px;
  }
  @media (max-width: 834px) {
    label {
      font-size: 16px;
    }
    input {
    }
  }
  @media (max-width: 500px) {
    margin-top: 56px;
    label {
      font-size: 16px;
    }
    input {
      height: 34px;
    }
    .form-ctn {
      margin: 0px 28px;
    }
  }
`;
export const MoviesList = styled.div`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  margin-top: 48px;
  margin-left: 77px;
  .listtitle {
  }
  .movie-item {
    display: flex;
    text-align: center;
    justify-content: center;
    min-width: 300px !important;

    height: 300px !important;
    margin-right: 13px;

    background: #000000;
    border-radius: 12px;
    color: #fff;
    padding: 40px;
    box-sizing: border-box;
    align-items: center;
  }
  .movies-ctn {
    overflow-x: scroll;
    display: flex;
    width: auto;
    padding: 18px 0px !important;
  }
  @media (max-width: 834px) {
  }
  @media (max-width: 500px) {
    margin-left: 28px;
    margin-top: 33px;
    font-size: 16px;
    .listtitle {
    }
    .movie-item {
      height: 200px;
      min-width: 200px !important;

      padding: 20px;
      box-sizing: border-box;
    }
    .movies-ctn {
    }
  }
`;

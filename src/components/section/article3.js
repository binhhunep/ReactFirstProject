import React from "react";
import "bootstrap";
import Color from "../HOC/color";
class Article3 extends React.Component {
  render() {
    return (
      <div className="article3-container" style={{ padding: "6vmax" }}>
        <link
          href="https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap"
          rel="stylesheet"
        ></link>
        <div className="row">
          <i
            className="col-xs-12 col-sm-12 col-md-12"
            style={{
              fontFamily: "'Ms Madi', cursive",
              fontSize: "3vmax",
              letterSpacing: "2px",
            }}
          >
            Why choose us ?
          </i>
          <p
            className="col-xs-12 col-sm-12 col-md-12"
            style={{
              color: "white",
              fontSize: "1.5vmax",
            }}
          >
            Trung Nguyen is currently one of the most famous coffee brands in
            Vietnam today.
          </p>
        </div>
        <br />
        <br />
        <div
          className="row"
          style={{ justifyContent: "space-between", textAlign: "justify" }}
        >
          <div className="row col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <i
              className="col-xs-12 col-sm-12 col-md-12"
              style={{
                fontFamily: "'Ms Madi', cursive",
                fontSize: "2vmax",
                letterSpacing: "2px",
              }}
            >
              Unlimited Skill
            </i>
            <p
              className="col-xs-12 col-sm-12 col-md-12"
              style={{
                color: "white",
                fontSize: "1.5vmax",
              }}
            >
              Trung Nguyen is currently one of the most famous coffee brands in
              Vietnam today.
            </p>
          </div>
          <div className="row col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <i
              className="col-xs-12 col-sm-12 col-md-12"
              style={{
                fontFamily: "'Ms Madi', cursive",
                fontSize: "2vmax",
                letterSpacing: "2px",
              }}
            >
              Unlimited Skill
            </i>
            <p
              className="col-xs-12 col-sm-12 col-md-12"
              style={{
                color: "white",
                fontSize: "1.5vmax",
              }}
            >
              Trung Nguyen is currently one of the most famous coffee brands in
              Vietnam today.
            </p>
          </div>
        </div>
        <br />
        <div
          className="row"
          style={{ justifyContent: "space-between", textAlign: "justify" }}
        >
          <div className="row col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <i
              className="col-xs-12 col-sm-12 col-md-12"
              style={{
                fontFamily: "'Ms Madi', cursive",
                fontSize: "2vmax",
                letterSpacing: "2px",
              }}
            >
              Unlimited Skill
            </i>
            <p
              className="col-xs-12 col-sm-12 col-md-12"
              style={{
                color: "white",
                fontSize: "1.5vmax",
              }}
            >
              Trung Nguyen is currently one of the most famous coffee brands in
              Vietnam today.
            </p>
          </div>
          <div className="row col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <i
              className="col-xs-12 col-sm-12 col-md-12"
              style={{
                fontFamily: "'Ms Madi', cursive",
                fontSize: "2vmax",
                letterSpacing: "2px",
              }}
            >
              Unlimited Skill
            </i>
            <p
              className="col-xs-12 col-sm-12 col-md-12"
              style={{
                color: "white",
                fontSize: "1.5vmax",
              }}
            >
              Trung Nguyen is currently one of the most famous coffee brands in
              Vietnam today.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Color(Article3);

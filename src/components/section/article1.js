import React from "react";
import "bootstrap";
import Color from "../HOC/color";
class Para extends React.Component {
  render() {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap"
          rel="stylesheet"
        ></link>
        <i
          style={{
            fontFamily: "'Ms Madi', cursive",
            fontSize: "2.8vmax",
            letterSpacing: "2px",
          }}
        >
          A little story about us
        </i>
        <p
          style={{
            color: "white",
            fontSize: "2.9vmax",
            letterSpacing: "2px",
          }}
        >
          Welcome to Life Coffee
        </p>
      </>
    );
  }
}
export default Color(Para);

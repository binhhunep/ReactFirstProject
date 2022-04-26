import React from "react";
import "../../styles/header/header.scss";
import NavBar from "./navbar";
import "bootstrap";
import Color from "../HOC/color";
class Header extends React.Component {
  state = {
    para: "This article is about the brewed beverage. For the seeds from which it is made, see Coffee bean. For the plant, see Coffea. For other uses, see Coffee (disambiguation).",
    check: true,
  };
  readclick = () => {
    let i = this.state.check;
    i === true
      ? this.setState({
          para: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain flowering plants in the Coffea genus. From the coffee fruit, the seeds are separated to produce a stable, raw product: unroasted green coffee.",
          check: !i,
        })
      : this.setState({
          para: "This article is about the brewed beverage. For the seeds from which it is made, see Coffee bean. For the plant, see Coffea. For other uses, see Coffee (disambiguation).",
          check: !i,
        });
  };

  render() {
    return (
      <>
        <div className="header">
          <NavBar className="sticky-top" />
          <br />
          <br />
          <h1 style={{ color: "white", fontSize: "4vmax", padding: "0 4vmax" }}>
            SPECIAL COFFEE BEANS
          </h1>
          <p
            style={{
              color: "white",
              fontSize: "1.5vmax",
              textAlign: "center",
              padding: "0 4vmax",
            }}
          >
            {this.state.para}
          </p>
          <br />
          <button
            style={{
              color: "white",
              fontSize: "1.5vmax",
              background: "none",
              border: "1px solid white",
              padding: "5px",
              cursor: "pointer",
            }}
            onClick={() => this.readclick()}
          >
            Read More
          </button>
          <br />
          <br />
        </div>
      </>
    );
  }
}
export default Color(Header);

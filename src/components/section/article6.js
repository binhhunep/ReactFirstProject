import React from "react";
import "../../styles/section/article6.scss";
import "bootstrap";
import { FcSms } from "react-icons/fc";
import Color from "../HOC/color";
class Article6 extends React.Component {
  state = {
    para: "This article is about the brewed beverage. For the seeds from which it is made, see Coffee bean. For the plant, see Coffea. For other uses, see Coffee (disambiguation)...",
    user: "Alex Bean",
    check: true,
  };
  iconClick = () => {
    let i = this.state.check;
    i === true
      ? this.setState({
          para: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain flowering plants in the Coffea genus. From the coffee fruit, the seeds are separated to produce a stable, raw product: unroasted green coffee...",
          check: !i,
        })
      : this.setState({
          para: "This article is about the brewed beverage. For the seeds from which it is made, see Coffee bean. For the plant, see Coffea. For other uses, see Coffee (disambiguation)...",
          check: !i,
        });
  };

  render() {
    return (
      <>
        <div className="article6-header">
          <link
            href="https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap"
            rel="stylesheet"
          ></link>
          <br />
          <h1 style={{ fontSize: "4vmax", padding: "0 4vmax" }}>
            <FcSms
              style={{
                fontSize: "5vmax",
                opacity: "0.8",
                cursor: "pointer",
              }}
              onClick={() => this.iconClick()}
            />
          </h1>
          <p
            style={{
              color: "white",
              fontSize: "2vmax",
              textAlign: "center",
              padding: "0 3vmax",
            }}
          >
            {this.state.para}
          </p>
          <br />
          <p
            style={{
              color: "white",
              fontSize: "2vmax",
              textAlign: "center",
              padding: "0 3vmax",
            }}
          >
            {this.state.user}
          </p>
          <br />
        </div>
      </>
    );
  }
}
export default Color(Article6);

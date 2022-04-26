import React from "react";
import "bootstrap";
import Color from "../HOC/color";
import ResponsivePlayer from "./video";
import "../../styles/section/article2.scss";
class Article2 extends React.Component {
  state = {
    para: "https://www.youtube.com/watch?v=EOAPMhaCtuw",
    check: true,
  };
  readclick = () => {
    let i = this.state.check;
    i === true
      ? this.setState({
          para: "COFE App caters to all your coffee needs & essentials. COFE App caters to all your coffee needs & essentials. It is designed to brew your coffee with top of the notch technological advancements.",
          check: !i,
        })
      : this.setState({
          para: "https://www.youtube.com/watch?v=EOAPMhaCtuw",
          check: !i,
        });
  };
  render() {
    return (
      <div className="article2-container">
        <div className=" row col-12 article2">
          <div className="col-md-5 col-lg-5 col-xl-5 article2-card">
            <div className="card-header">
              <h5>Application</h5>
              <h5>USE OUR APPLICATION</h5>
            </div>
            <br />
            <div className="card-body">
              <p className="card-text">{this.state.para}</p>
              <br />
              <br />
              <button
                className="btn btn-warning card-btn"
                onClick={() => this.readclick()}
              >
                READ MORE
              </button>
              <br />
            </div>
          </div>
          <div className="article2-video col-md-5 col-lg-5 col-xl-5">
            <br />
            <ResponsivePlayer />
          </div>
        </div>
      </div>
    );
  }
}
export default Article2;

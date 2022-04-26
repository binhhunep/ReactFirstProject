import React from "react";
import img1 from "../../images/1.png";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import "bootstrap";
import "../../styles/section/article4.scss";
class Article4 extends React.Component {
  state = {
    para: "",
    check: true,
    quantity1: 0,
    quantity2: 0,
    quantity3: 0,
    total1: "0.000",
    total2: "0.000",
    total3: "0.000",
  };
  addClick1 = () => {
    let quantity1 = this.state.quantity1;
    if (quantity1 <= 0) {
      this.setState({
        quantity1: ++quantity1,
        total1: Number.parseFloat(20.805).toFixed(3),
      });
    } else {
      this.setState({
        quantity1: ++quantity1,
        total1: Number.parseFloat(quantity1 * 20.805).toFixed(3),
      });
    }
  };
  delClick1 = () => {
    let quantity1 = this.state.quantity1;
    this.state.total1 <= 0
      ? this.setState({
          quantity1: 0,
          total1: Number.parseFloat(0).toFixed(3),
        })
      : this.setState({
          quantity1: --quantity1,
          total1: Number.parseFloat(quantity1 * 20.805).toFixed(3),
        });
  };
  addClick2 = () => {
    let quantity2 = this.state.quantity2;
    if (quantity2 <= 0) {
      this.setState({
        quantity2: ++quantity2,
        total2: Number.parseFloat(21.605).toFixed(3),
      });
    } else {
      this.setState({
        quantity2: ++quantity2,
        total2: Number.parseFloat(quantity2 * 21.605).toFixed(3),
      });
    }
  };
  delClick2 = () => {
    let quantity2 = this.state.quantity2;
    this.state.total2 <= 0
      ? this.setState({
          quantity2: 0,
          total2: Number.parseFloat(0).toFixed(3),
        })
      : this.setState({
          quantity2: --quantity2,
          total2: Number.parseFloat(quantity2 * 21.605).toFixed(3),
        });
  };
  addClick3 = () => {
    let quantity3 = this.state.quantity3;
    if (quantity3 <= 0) {
      this.setState({
        quantity3: ++quantity3,
        total3: Number.parseFloat(22.705).toFixed(3),
      });
    } else {
      this.setState({
        quantity3: ++quantity3,
        total3: Number.parseFloat(quantity3 * 22.705).toFixed(3),
      });
    }
  };
  delClick3 = () => {
    let quantity3 = this.state.quantity3;
    this.state.total3 <= 0
      ? this.setState({
          quantity3: 0,
          total3: Number.parseFloat(0).toFixed(3),
        })
      : this.setState({
          quantity3: --quantity3,
          total3: Number.parseFloat(quantity3 * 22.705).toFixed(3),
        });
  };
  readclick = () => {
    let i = this.state.check;
    i === true
      ? this.setState({
          para: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain flowering plants in the Coffea genus. From the coffee fruit, the seeds are separated to produce a stable, raw product: unroasted green coffee.",
          check: !i,
        })
      : this.setState({
          para: "",
          check: !i,
        });
  };
  render() {
    return (
      <div className="article4-container">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="thumbnail text-center">
              <div className="thumbnail-img">
                <img
                  src={img3}
                  alt="Nature"
                  style={{
                    width: "54px",
                  }}
                />
              </div>
              <br />
              <div className="thumbnail-caption">
                <h3 className="text caption-title">
                  SUPER ENAMEL COFFEE GOLD AIR MAKER
                </h3>
                <br />
                <p className="text-danger caption-price">$20.805</p>
                <p className="text-success caption-price">
                  Quantity: {this.state.quantity1}{" "}
                  <i className="text-success caption-price">pieces</i>
                </p>
                <p className="text-success caption-price">
                  Total: ${this.state.total1}
                </p>
                <p style={{ display: "flex", justifyContent: "space-evenly" }}>
                  <button
                    id="add"
                    className="btn btn-success"
                    onClick={() => this.addClick1()}
                  >
                    Add
                  </button>
                  <button
                    id="del"
                    className="btn btn-danger"
                    onClick={() => this.delClick1()}
                  >
                    Del
                  </button>
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="thumbnail text-center">
              <div className="thumbnail-img">
                <img
                  src={img2}
                  alt="Nature"
                  style={{
                    width: "48.5px",
                  }}
                />
              </div>
              <br />
              <div className="thumbnail-caption">
                <h3 className="text caption-title">
                  COFFEE WITH CREAM GOLD COLLECTION
                </h3>
                <br />
                <p className="text-danger caption-price">$21.605</p>
                <p className="text-success caption-price">
                  Quantity: {this.state.quantity2}{" "}
                  <i className="text-success caption-price">pieces</i>
                </p>
                <p className="text-success caption-price">
                  Total: ${this.state.total2}
                </p>
                <p style={{ display: "flex", justifyContent: "space-evenly" }}>
                  <button
                    id="add"
                    className="btn btn-success"
                    onClick={() => this.addClick2()}
                  >
                    Add
                  </button>
                  <button
                    id="del"
                    className="btn btn-danger"
                    onClick={() => this.delClick2()}
                  >
                    Del
                  </button>
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="thumbnail text-center">
              <div className="thumbnail-img">
                <img
                  src={img3}
                  alt="Nature"
                  style={{
                    width: "54px",
                  }}
                />
              </div>
              <br />
              <div className="thumbnail-caption">
                <h3 className="text caption-title">
                  GLASS COFFEE JAR WITH WOOD COLLAR
                </h3>
                <br />
                <p className="text-danger caption-price">$22.705</p>
                <p className="text-success caption-price">
                  Quantity: {this.state.quantity3}{" "}
                  <i className="text-success caption-price">pieces</i>
                </p>
                <p className="text-success caption-price">
                  Total: ${this.state.total3}
                </p>
                <p style={{ display: "flex", justifyContent: "space-evenly" }}>
                  <button
                    id="add"
                    className="btn btn-success"
                    onClick={() => this.addClick3()}
                  >
                    Add
                  </button>
                  <button
                    id="del"
                    className="btn btn-danger"
                    onClick={() => this.delClick3()}
                  >
                    Del
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <button
          className="btn article4-container-btn"
          onClick={() => this.readclick()}
        >
          READ MORE
        </button>
        <br />
        <div className="article4-container-content">{this.state.para}</div>
      </div>
    );
  }
}
export default Article4;

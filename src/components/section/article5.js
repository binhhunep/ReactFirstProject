import React from "react";
import img4 from "../../images/4.png";
import img5 from "../../images/5.png";
import img6 from "../../images/6.png";
import "bootstrap";
import "../../styles/section/article5.scss";
class Article5 extends React.Component {
  state = {
    para: "",
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
          para: "",
          check: !i,
        });
  };
  render() {
    return (
      <div className="article5-container">
        <br />
        <div>
          <link
            href="https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap"
            rel="stylesheet"
          ></link>
          <i
            style={{
              color: "#C7A17A",
              fontFamily: "'Ms Madi', cursive",
              fontSize: "4vmax",
              letterSpacing: "5px",
            }}
          >
            Blog
          </i>
        </div>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="thumbnail text-center">
              <img className="thumbnail-img" src={img4} alt="Nature" />
              <br />
              <div className="thumbnail-caption">
                <h3 className="text caption-title">Cafe shop</h3>
                <h3 className="text caption-note">by ABC/10.1.2018</h3>
                <br />
                <p className="caption-price">
                  The configuration of the Spanish territory was inspired by the
                  systems of Germany and Italy.
                </p>
                <br />
                <br />
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        READ MORE
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <strong className="accordion-body">
                          This is the first item's accordion body.
                        </strong>
                        It's also worth noting that just about any HTML can go
                        within the <code>.accordion-body</code>, though the
                        transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="thumbnail text-center">
              <img className="thumbnail-img" src={img5} alt="Nature" />
              <br />
              <div className="thumbnail-caption">
                <h3 className="text caption-title">Cafe shop</h3>
                <h3 className="text caption-note">by ABC/10.1.2018</h3>
                <br />
                <p className="caption-price">
                  The configuration of the Spanish territory was inspired by the
                  systems of Germany and Italy.
                </p>
                <br />
                <br />
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        READ MORE
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <strong className="accordion-body">
                          This is the first item's accordion body.
                        </strong>
                        It's also worth noting that just about any HTML can go
                        within the <code>.accordion-body</code>, though the
                        transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="thumbnail text-center">
              <img className="thumbnail-img" src={img6} alt="Nature" />
              <br />
              <div className="thumbnail-caption">
                <h3 className="text caption-title">Cafe shop</h3>
                <h3 className="text caption-note">by ABC/10.1.2018</h3>
                <br />
                <p className="caption-price">
                  The configuration of the Spanish territory was inspired by the
                  systems of Germany and Italy.
                </p>
                <br />
                <br />
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        READ MORE
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <strong className="accordion-body">
                          This is the first item's accordion body.
                        </strong>
                        It's also worth noting that just about any HTML can go
                        within the <code>.accordion-body</code>, though the
                        transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Article5;

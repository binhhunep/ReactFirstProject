import React from "react";
import "bootstrap";
import Color from "../HOC/color";
import { FcGlobe } from "react-icons/fc";
import { FcCellPhone } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { RiPaypalLine } from "react-icons/ri";
import { SiMicrosoftedge } from "react-icons/si";
class Footer extends React.Component {
  render() {
    return (
      <div className="article3-container" style={{ padding: "0 6vmax" }}>
        <br />
        <div
          className="row"
          style={{ justifyContent: "space-between", textAlign: "justify" }}
        >
          <div className="row col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <h1
              className="col-xs-12 col-sm-12 col-md-12"
              style={{
                fontSize: "1.5vmax",
                letterSpacing: "1px",
              }}
            >
              CONTACT US
            </h1>
            <p
              className="col-xs-12 col-sm-12 col-md-12"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                fontSize: "1vmax",
              }}
            >
              <FcGlobe
                style={{
                  fontSize: "1vmax",
                }}
              />
              <span
                className="second-word-formatting"
                style={{
                  marginLeft: "5px",
                  color: "white",
                  fontSize: "1vmax",
                }}
              >
                ABC, Đà Nẵng
              </span>
            </p>
            <p
              className="col-xs-12 col-sm-12 col-md-12"
              style={{
                display: "flex",
                alignItems: "center",
                // justifyContent: "space-evenly",
                color: "white",
                fontSize: "1vmax",
              }}
            >
              <FcCellPhone
                style={{
                  fontSize: "1vmax",
                }}
              />
              <span
                className="second-word-formatting"
                style={{
                  marginLeft: "5px",
                  color: "white",
                  fontSize: "1vmax",
                }}
              >
                Phone: 05101234567
              </span>
            </p>
            <p
              className="col-xs-12 col-sm-12 col-md-12"
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                fontSize: "1vmax",
              }}
            >
              <FcBriefcase
                style={{
                  fontSize: "1vmax",
                }}
              />
              <span
                className="second-word-formatting"
                style={{
                  marginLeft: "5px",
                  color: "white",
                  fontSize: "1vmax",
                }}
              >
                Abcdbabas@gmail.com
              </span>
            </p>
          </div>
          <div
            className="row col-xs-5 col-sm-5 col-md-5 col-lg-4 col-xl-4"
            style={{ alignItems: "center", justifyContent: "end" }}
          >
            <h1
              className="col-xs-12 col-sm-12 col-md-12"
              style={{
                display: "flex",
                fontSize: "2vmax",
                letterSpacing: "2px",
              }}
            >
              <FiFacebook
                style={{
                  fontSize: "2vmax",
                  marginRight: "5px",
                }}
              />
              <FiTwitter
                style={{
                  fontSize: "2vmax",
                  marginRight: "10px",
                }}
              />
              <FiYoutube
                style={{
                  fontSize: "2vmax",
                  marginRight: "10px",
                }}
              />
              <RiPaypalLine
                style={{
                  fontSize: "2vmax",
                  marginRight: "10px",
                }}
              />
              <SiMicrosoftedge
                style={{
                  fontSize: "2vmax",
                  marginRight: "10px",
                }}
              />
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
export default Color(Footer);

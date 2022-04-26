import React from "react";
import ReactPlayer from "react-player";
class ResponsivePlayer extends React.Component {
  render() {
    return (
      <div
        className="player-wrapper"
        style={{ position: "relative", paddingTop: "56.25%" }}
      >
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=EOAPMhaCtuw"
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
          }}
        />
      </div>
    );
  }
}
export default ResponsivePlayer;

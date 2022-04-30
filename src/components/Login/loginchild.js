import React from "react";
import "../../styles/header/Login.scss";
//có 2 loại khai báo component : Class/redux và function/hook
class LoginChild extends React.Component {
  state = {
    showHide: false,
    id: "",
  };

  clickShowHide = () => {
    this.setState({
      showHide: !this.state.showHide,
    });
  };
  deleteClick = (id) => {
    const { infor } = this.props;
    id = infor.id;
    console.log("job:", id);
    this.props.deleteTitle(id);
  };

  deleteListClick = (list) => {
    this.props.deleteList(list);
  };

  render() {
    const { infor } = this.props;
    let showHide = this.state.showHide;
    return (
      <>
        <fieldset className="fieldsetInfor">
          <legend>Information</legend>
          {showHide === false ? (
            <button id="show" onClick={() => this.clickShowHide()}>
              Show
            </button>
          ) : (
            <>
              <div className="infor">
                {infor.map((item, liNumber) => {
                  console.log(item.id);

                  if (item.id === "" || item.salary === "") {
                    <></>;
                  } else {
                    return (
                      <div className="infor-content" key={liNumber}>
                        <div id="para">
                          {item.id} {item.title} {item.salary}
                        </div>
                        <span
                          id="x-btn"
                          onClick={() => this.deleteListClick(item)}
                        >
                          X
                        </span>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="btn">
                <button id="hide" onClick={() => this.clickShowHide()}>
                  Hide
                </button>
                <button id="hide" onClick={() => this.deleteClick()}>
                  delete
                </button>
              </div>
            </>
          )}
        </fieldset>
      </>
    );
  }
}
export default LoginChild;

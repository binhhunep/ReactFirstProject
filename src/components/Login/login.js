import React from "react";
import LoginChild from "./loginchild";
import Loginlist from "./loginlist";
import Color from "../HOC/color";
class Login extends React.Component {
  state = {
    firstName: "Bình",
    lastName: "Đoàn Thanh",
    infor: [{ id: "", title: "", salary: "" }],
  };

  addNewTitle = (changeInfor) => {
    console.log("check Job from parent:", changeInfor);
    let currentInfor = this.state.infor;
    currentInfor.push(changeInfor);
    this.setState({
      infor: currentInfor,
    });
  };

  deleteTitle = (id) => {
    console.log("job on parent:", id);
    let currentId = this.state.infor;
    currentId = currentId.filter((item) => item.id == id);
    this.setState({
      infor: currentId,
    });
  };

  deleteList = (list) => {
    let currentList = this.state.infor;
    currentList = currentList.filter((item) => item.id != list.id);
    this.setState({
      infor: currentList,
    });
  };

  render() {
    return (
      <>
        <Loginlist addNewTitle={this.addNewTitle} />
        <br />
        <LoginChild
          infor={this.state.infor}
          deleteTitle={this.deleteTitle}
          deleteList={this.deleteList}
        />
      </>
    );
  }
}
export default Login;

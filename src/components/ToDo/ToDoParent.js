import React from "react";
import ToDoChild from "./ToDoChild";
class ToDoParent extends React.Component {
  state = {
    infor: [{ id: 0, job: "Todo" }],
    currentInforId: 0,
  };

  changeStateToDoParent = (changeInfor) => {
    let currentInfor = this.state.infor;
    currentInfor.push(changeInfor);
    let currentInforId;
    currentInfor.forEach((item) => (currentInforId = item.id));
    this.setState({
      infor: currentInfor,
      currentInforId: currentInforId,
    });
    console.log("[currentInforId]", this.state.currentInforId);
  };

  deleteStateToDoParent = (deleteInfor) => {
    let currentInfor = this.state.infor;
    let currentInforId = currentInfor.find(
      (element) => element.id === deleteInfor.id
    );
    console.log("delete.id/currentinfor.id:", deleteInfor.id, currentInforId);
    currentInfor = currentInfor.filter((item) => item.id != deleteInfor.id);
    this.setState({
      infor: currentInfor,
    });
  };

  saveStateToDoParent = (saveInfor) => {
    this.setState({
      infor: saveInfor,
    });
  };

  editState = (edit) => {
    let currentInfor = this.state.infor;
    currentInfor.splice(edit.id, 1, edit);
    this.setState({
      infor: currentInfor,
    });
    console.log("currentInforCopy:", currentInfor);
  };

  render() {
    return (
      <>
        <ToDoChild
          changeStateToDoParent={this.changeStateToDoParent}
          infor={this.state.infor}
          currentInforId={this.state.currentInforId}
          deleteStateToDoParent={this.deleteStateToDoParent}
          saveStateToDoParent={this.saveStateToDoParent}
          editState={this.editState}
        />
      </>
    );
  }
}
export default ToDoParent;

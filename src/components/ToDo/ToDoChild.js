import React from "react";
import "../../styles/header/ToDo.scss";
import { toast } from "react-toastify";

class LoginChild extends React.Component {
  state = {
    id: 0,
    job: "",
    job1: "",
    currentClick: false,
    todo: {},
  };

  changeDoing = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addClick = (add) => {
    add.preventDefault();
    if (this.state.job === "") {
      toast.error("Add failured!");
    } else {
      this.props.changeStateToDoParent({
        id: ++this.state.id,
        job: this.state.job,
      });
      this.setState({
        job: "",
      });
      toast.success("Add success!");
      // }
    }
  };

  showHideClick = () => {
    this.setState({
      currentClick: !this.state.currentClick,
    });
  };

  deleteClick = (item, index) => {
    this.props.deleteStateToDoParent({
      id: item.id,
      job: item.job,
    });
    toast.success("Deleted!");
    // console.log("delete.id/this.state.id", item.id, this.state.id);
  };

  editClick = (item, index) => {
    let checkEmpty = Object.keys(this.state.todo).length === 0;
    console.log("checkempty:", checkEmpty); //tra ra true neu dieu kien sau keys dung va nguoc lai
    if (checkEmpty === true) {
      this.setState({
        todo: item,
      });
    } else {
      this.props.editState({
        id: index,
        job: this.state.job1,
      });
      this.setState({ todo: {}, job1: "" });
    }
    const { currentInforId } = this.props;
    this.setState({ id: currentInforId });
    console.log("this.item.index:", index);
  };

  changeEdit = (f) => {
    let job = f.target.value;
    this.setState({
      job1: job,
    });
  };

  render() {
    // console.log("editodo:", this.state.editodo);
    {
      // console.log(this.state.todo);
    }
    const { infor } = this.props;
    let { todo } = this.state; //lấy đối tượng todo trong this.state ra
    // let { editodo } = this.state;
    // console.log("this.state.todo", todo);
    return (
      <fieldset id="feildset">
        <legend className="feildset-legend">ToDoChild</legend>
        <form id="feildset-form">
          <div id="todo-doing">
            <input
              name={"job"}
              id="doing-input"
              type={"text"}
              value={this.state.job}
              onChange={(e) => this.changeDoing(e)}
            />
            <input
              onClick={(add) => this.addClick(add)}
              id="doing-submit"
              type="submit"
              name={"add"}
              value={"Add"}
            />
          </div>
        </form>
        {this.state.currentClick === false ? (
          <input
            id={"todo-show"}
            type={"button"}
            value={"show"}
            onClick={() => this.showHideClick()}
          />
        ) : (
          <>
            <div id="todo-list">
              {infor &&
                infor.length > 0 && //cau lenh nay de tranh loi map
                infor.map((item, linumber) => {
                  return (
                    <div key={item.id} id="content-list">
                      {todo.id === item.id ? (
                        <div id="list-infor">
                          {linumber + 1} -
                          <input
                            id="doing-input"
                            type={"text"}
                            value={this.state.job1}
                            onChange={(f) => this.changeEdit(f)}
                          />
                        </div>
                      ) : (
                        <div id="list-infor">
                          {linumber + 1} - {item.job}
                        </div>
                      )}
                      <button
                        id={"list-edit"}
                        type={"button"}
                        onClick={() => this.editClick(item, linumber)}
                      >
                        {todo.id === item.id ? "Save" : "Edit"}
                      </button>

                      <input
                        id={"list-Delete"}
                        type={"button"}
                        value={"Delete"}
                        onClick={() => this.deleteClick(item)}
                      />
                    </div>
                  );
                })}
            </div>
            <input
              id={"todo-hide"}
              type={"button"}
              value={"hide"}
              onClick={() => this.showHideClick()}
            />
          </>
        )}
      </fieldset>
    );
  }
}
export default LoginChild;

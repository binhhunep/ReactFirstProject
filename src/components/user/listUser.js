import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "../../styles/user/user.scss";
class ListUser extends React.Component {
  state = {
    listUsers: [],
  };
  async componentDidMount() {
    // axios.get("https://reqres.in/api/users?page=1").then((res) => {
    //   console.log(">>>This respoinsive:", res);
    // });
    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  detailClick = (user) => {
    console.log(">>check user", this.props);
    this.props.history.push(`/User/${user.id}`);
  };

  render() {
    let listUsers = this.state.listUsers;
    return (
      <>
        <div className="user-container">
          <div className="title">
            Fetch all list user
            <hr />
          </div>
          <div className="user-content">
            {listUsers &&
              listUsers.length > 0 &&
              listUsers.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="child-infor"
                    onClick={() => this.detailClick(item)}
                  >
                    <p>
                      {index + 1} - {item.first_name} {item.last_name}
                    </p>
                    <img className="child-img" src={item.avatar} />
                    <hr />
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(ListUser);

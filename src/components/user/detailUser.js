import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
import "../../styles/user/userDetail.scss";
class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    console.log(">>>check id", this.props.match.params);
    if (this.props && this.props.match.params) {
      let id = this.props.match.params.id;

      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      //   console.log("check rep:", res);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }
  backClick = () => {
    this.props.history.push(`/User`);
  };
  render() {
    // console.log(">>>>check this Props:", this.props);
    let user = this.state.user;
    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <>
        <div className="user-detail">
          <div className="user-detail-title">USER ID: {user.id}</div>
          {isEmptyObj === false && (
            <>
              <div>
                <img src={user.avatar}></img>
              </div>
              <div className="user-detail-userInfor">
                User's name: {user.first_name} {user.last_name}
              </div>
              <div className="user-detail-userInfor">
                {" "}
                User's email: {user.email}
              </div>
              <button
                className="user-detail-btn btn-primary"
                type="btn"
                onClick={() => this.backClick()}
              >
                Back
              </button>
            </>
          )}
        </div>
      </>
    );
  }
}
export default withRouter(DetailUser);

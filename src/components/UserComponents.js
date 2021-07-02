import React from "react";
import UserServices from "../services/UserServices";

class UserComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    UserServices.getUsers().then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Users List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <td> User ID</td>
              <td> User First name</td>
              <td> User Last Name</td>
              <td> User Email ID</td>
            </tr>
          </thead>

          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserComponents;

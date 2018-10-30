import React, { Component } from "react";
import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  render() {
    let authorRows = this.props.auth.map(auth => <AuthorCard auth={auth} />);
    return (
      <div className="content col-10">
        <div className="authors">
          <h3>Authors</h3>
          <div className="row">{authorRows}</div>
        </div>
      </div>
    );
  }
}
export default AuthorList;

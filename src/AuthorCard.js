import React, { Component } from "react";

class AuthorCard extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={this.props.auth.imageUrl}
              alt={this.props.auth.first_name + " " + this.props.auth.last_name}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>
                {this.props.auth.first_name + " " + this.props.auth.last_name}
              </span>
            </h5>
            <small className="card-text">
              {this.props.auth.books.length} books
            </small>
          </div>
        </div>
      </div>
    );
  }
}
export default AuthorCard;

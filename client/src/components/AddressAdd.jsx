import React, { Component } from "react";
import { connect } from "react-redux";
import { createTutorial } from "../actions/tutorials";

class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeAddressType = this.onChangeAddressType.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeCompanyId = this.onChangeCompanyId.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeStreet = this.onChangeStreet.bind(this);
    this.onChangeUserID = this.onChangeUserID.bind(this);
    this.onChangeZip = this.onChangeZip.bind(this);
    // this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      //id: null,

      id: null,
      addressType: "",
      city: "",
      companyId: null,
      country: "",
      state: "",
      street: "",
      userId: null,
      zip: null,
      // title: "",
      // description: "",
      // published: false,

      submitted: false,
      // title: "",
      // description: "",
      // published: false,

      // submitted: false,
    };
  }

  onChangeAddressType(e) {
    this.setState({
      addressType: e.target.value,
    });
  }
  onChangeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }
  onChangeCompanyId(e) {
    this.setState({
      companyId: e.target.value,
    });
  }
  onChangeCountry(e) {
    this.setState({
      country: e.target.value,
    });
  }
  onChangeState(e) {
    this.setState({
      state: e.target.value,
    });
  }
  onChangeStreet(e) {
    this.setState({
      street: e.target.value,
    });
  }
  onChangeUserID(e) {
    this.setState({
      userId: e.target.value,
    });
  }
  onChangeZip(e) {
    this.setState({
      zip: e.target.value,
    });
  }
  // onChangeTitle(e) {
  //   this.setState({
  //     title: e.target.value,
  //   });
  // }

  // onChangeDescription(e) {
  //   this.setState({
  //     description: e.target.value,
  //   });
  // }

  saveTutorial() {
    const {
      addressType,
      city,
      companyId,
      country,
      state,
      street,
      userId,
      zip
    } = this.state;

    this.props
      .createTutorial(
        addressType,
        city,
        companyId,
        country,
        state,
        street,
        userId,
        zip
      )
      .then((data) => {
        this.setState({
          id: data.id,
          addressType: data.addressType,
          city: data.city,
          companyId: data.companyId,
          country: data.country,
          state: data.state,
          street: data.street,
          userId: data.userId,
          zip: data.zip,

          // title: data.title,
          // description: data.description,
          // published: data.published,

          submitted: true,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      addressType: "",
      city: "",
      companyId: null,
      country: "",
      state: "",
      street: "",
      userId: null,
      zip: null,
      // title: "",
      // description: "",
      // published: false,

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="addressType">Address Type.  </label>
              <input
                type="text"
                className="form-control"
                id="addressType"
                required
                value={this.state.addressType}
                onChange={this.onChangeAddressType}
                //onClick={window.log("")}
                name="addressType"
                placeholder="Write your Address Type Billing, Permanent or Present"
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                required
                value={this.state.city}
                onChange={this.onChangeCity}
                name="city"
              />
            </div>
            <div className="form-group">
              <label htmlFor="companyId">Company ID</label>
              <input
                type="number"
                className="form-control"
                id="companyId"
                required
                value={this.state.companyId}
                onChange={this.onChangeCompanyId}
                name="companyId"
                placeholder="Id Must Be In Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                className="form-control"
                id="country"
                required
                value={this.state.country}
                onChange={this.onChangeCountry}
                name="country"
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                className="form-control"
                id="state"
                required
                value={this.state.state}
                onChange={this.onChangeState}
                name="state"
              />
            </div>
            <div className="form-group">
              <label htmlFor="street">Street</label>
              <input
                type="text"
                className="form-control"
                id="street"
                required
                value={this.state.street}
                onChange={this.onChangeStreet}
                name="street"
              />
            </div>
            <div className="form-group">
              <label htmlFor="userId">User ID</label>
              <input
                type="number"
                className="form-control"
                id="userId"
                required
                value={this.state.userId}
                onChange={this.onChangeUserID}
                name="userId"
                placeholder="Id Must Be In Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="zip">ZIP</label>
              <input
                type="number"
                className="form-control"
                id="zip"
                required
                value={this.state.zip}
                onChange={this.onChangeZip}
                name="zip"
                placeholder="Provide a valid zip in number"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { createTutorial })(AddTutorial);

import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class AddEmail extends Component {

  state = {
    title:''
  }


  onChange = (e) => this.setState({title:e.target.value});
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addEmail(this.state.title);
    this.setState({title:''});

  }
  render() {
    return (
      <div className="container">
      <form onSubmit={this.onSubmit}>
        <h1>Build a landing page for your business or project and generate more leads!</h1>
        <input
          type="email"
          name="title"

          placeholder="Enter your email..."
          value={this.state.title}
          required="required"
          onChange={this.onChange}
          />

        <button>
        Sign up!
        </button>

      </form>
      </div>
    )
  }
}

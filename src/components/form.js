import React from "react";
import styled from "styled-components";
import Notifications, { notify } from "react-notify-toast";

const ReportInput = styled.textarea`
  margin-top: 2em;
  padding: 1em;
  width: 80%;
  border-style: none;
`;

const Toast = styled.div`
  line-height: 1.5em;
`;

const Button = styled.button`
  border: 1px solid transparent;
`;

const toastColors = {
  text: "black",
  background: "white"
};

class Form extends React.Component {
  state = {
    report: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const body = {
      report: this.state.report
    };
    event.preventDefault();

    this.setState({ report: "Sending report." });

    fetch("https://us-central1-jsconf-hi.cloudfunctions.net/website-receive", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.text();
      })
      .then(text => {
        notify.show(text, "custom", 5000, toastColors);
        this.setState({ report: "" });
      })
      .catch(error => {
        notify.show(
          "Oops, looks like your report failed to send. Please try again, or contact an organizer in person!",
          "custom",
          5000,
          toastColors
        );
      });
  };

  render() {
    return (
      <div>
        <Toast>
          <Notifications options={{ colors: "red" }} />
        </Toast>
        <form onSubmit={this.handleSubmit}>
          <ReportInput
            type="text"
            name="report"
            placeholder="Enter details here..."
            value={this.state.report}
            onChange={this.handleInputChange}
          />
          <p>
            We’ll review and act on it. If you let us know who you are, we’ll
            follow up with you.
          </p>
          <Button className="button-secondary" isPrimary type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;

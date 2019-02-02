import React from 'react';

class Form extends React.Component {
  state = {
    report: ''
  }
  
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }
  
  handleSubmit = event => {
    const body = {
      report: this.state.report
    };
    event.preventDefault();
    fetch('https://us-central1-jsconf-hi.cloudfunctions.net/website-receive', {
      method: 'POST',
      body: JSON.stringify(body),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return response.text();
    }).then((text) => {
      // TODO this is where we likely want to update the component
      // The text from the response can be used to let folks
      // Know if was successful
      // console.log(text);
    }).catch(error => console.error('Error:', error));
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="report"
          value={this.state.report}
          onChange={this.handleInputChange}
        />
        <p>
          We’ll review and act on it. If you let us know who you are, we’ll
          follow up with you.
        </p>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;

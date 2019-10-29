import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }
    console.log(formData)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="firstName" onChange={this.handleFirstNameChange} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={this.handleLastNameChange} value={this.state.lastName} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form;
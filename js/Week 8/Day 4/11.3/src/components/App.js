import React from "react";
import Input from "./Input/Input";
import Select from "./Select/Select";
import TextArea from "./TextArea/TextArea";
import Button from "./Button/Button";
import "./app.css";

class App extends React.Component {
  state = {
    review: false,
    fname: "",
    lname: "",
    age: "",
    message: "",
  };

  localStorageCheck = () => {
    if (localStorage.getItem("states") !== null) {
      const saved = JSON.parse(localStorage.getItem("states"));
      this.setState({
        review: saved.review,
        fname: saved.fname,
        lname: saved.lname,
        age: saved.age,
        message: saved.message
      });
    }
  }

  localStorageSave = () => {
    localStorage.setItem("states", JSON.stringify(this.state));
  }

  onContinueClick = (boolean) => this.setState({ review: boolean });

  showForm = () => {
    const options = ["0-15", "16-25", "25-40", "Over 40"];
    const state = this.state;
    return (
      <form>
        <Input
          id="fname"
          text="First Name"
          onChange={this.onChange}
          value={state.fname}
        />
        <Input
          id="lname"
          text="Last Name"
          onChange={this.onChange}
          value={state.lname}
        />
        <Select
          id="age"
          text="Age"
          options={options}
          onChange={this.onChange}
          value={state.age}
        />
        <TextArea
          id="message"
          text="Message"
          onChange={this.onChange}
          value={state.message}
        />
        <Button
          onClick={this.onContinueClick}
          onClick2={this.localStorageSave}
          text="Continue"
          review={true}
        ></Button>
      </form>
    );
  };

  showReview = () => {
    const state = this.state;
    return (
      <div className='review'>
        <p>First Name: {state.fname}</p>
        <p>Last Name: {state.lname}</p>
        <p>Age: {state.age}</p>
        <p>Message: {state.message}</p>
        <Button onClick={this.onContinueClick} review={false} text="Back" />
        <Button onClick={() => {}} text="Send Survey" />
      </div>
    );
  };

  onChange = async (e) => await this.setState({ [e.target.id]: e.target.value });

  componentDidMount() {
      this.localStorageCheck();
  }
  render() {
    return (
      <div>
        {(!this.state.review && this.showForm()) || this.showReview()}
      </div>
    );
  }
}

export default App;
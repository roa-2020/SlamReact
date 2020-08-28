import React from "react";
import Slider from "./Slider";
import Hash from "string-hash";

class Input extends React.Component {
  state = {
    message: "",
    sliders: [],
    key: "",
  };

  displayMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  createSlider = (evt) => {
    const key = evt.key;

    this.setState({
      sliders: [...this.state.sliders, key],
    });
  };

  showCompletedMessage = () => {
    this.setState({
      sliders: [...this.state.sliders, this.state.message],
    });
  };

  render() {
    return (
      <>
        <input
          type="text"
          name="textField"
          onChange={this.displayMessage}
          onKeyPress={this.createSlider}
        />{" "}
        <br />
        <button onClick={this.showCompletedMessage}>Fire!</button>
        {console.log(this.state.key, this.state.sliders)}
        {this.state.sliders.map((message, i) => {
          return <Slider key={Hash(`${message} ${i}`)} value={message} />;
        })}
      </>
    );
  }
}

export default Input;

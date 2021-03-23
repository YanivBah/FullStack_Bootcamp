import React from "react";

class Input extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }

  componentDidMount () {
    this.ref.current.focus()
  }

  render() {
    return <input placeholder="This input focused on load" ref={this.ref} type="text"/>
  }
}


export default Input;
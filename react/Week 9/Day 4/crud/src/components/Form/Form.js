import './form.css';
import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.imageRef = React.createRef();
    this.ratingRef = React.createRef();
  }

  handleClick = (e) => {
    e.preventDefault();
    let name = this.nameRef.current;
    let image = this.imageRef.current;
    let rating = this.ratingRef.current;
    if (this.nameRef.current.value.length <= 1) {
      name.classList.add('wrong');
      name.value = "Insert more than 1 character";
      setTimeout(() => {
        name.classList.remove("wrong");
        name.value = '';
      },2000);
      return null;
    }
    this.props.onClick(name.value,image.value,rating.value);
  }

  render() {
    return (
      <form>
        <h3>Add New</h3>
        <div>
          <label htmlFor="movie-name">Movie/TV Show Name:</label>
          <input
            ref={this.nameRef}
            required
            type="text"
            name="movie-name"
            id="movie-name"
          />
        </div>
        <div>
          <label htmlFor="image-link">Image Link:</label>
          <input
            ref={this.imageRef}
            required
            type="text"
            name="image-link"
            id="image-link"
          />
        </div>
        <div>
          <label htmlFor="rating">Your Rating:</label>
          <select ref={this.ratingRef} name="rating" id="rating">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button onClick={this.handleClick} type="submit">Add</button>
      </form>
    );
  }
}

export default Form;

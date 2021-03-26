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

  componentDidUpdate() {
    if (this.props.current) {
      const { movieName, rating, image} = this.props.current;
      this.nameRef.current.value = movieName;
      this.imageRef.current.value = image;
      this.ratingRef.current.value = rating;
    } else {
      this.nameRef.current.value = '';
      this.imageRef.current.value = '';
      this.ratingRef.current.value = '';
    }
  }

  render() {
    console.log(this.props.current);
    return (
      <form>
        <h3>{this.props.current ? "Edit" : "Add New"}</h3>
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
        {this.props.current && (
          <React.Fragment>
            <button>Update</button>
            <button onClick={() => this.props.cancel(null)}>Cancel</button>
          </React.Fragment>
        )}
        {!this.props.current && (
          <button onClick={this.handleClick} type="submit">
            Add
          </button>
        )}
      </form>
    );
  }
}

export default Form;

import './form.css';
import React from "react";


// const x = React.createRef();

const Form = (props) => {
  return (
    <form>
      <h3>Add New</h3>
      <div>
        <label htmlFor="movie-name">Movie/TV Show Name:</label>
        <input required type="text" name="movie-name" id="movie-name" />
      </div>
      <div>
        <label htmlFor="image-link">Image Link:</label>
        <input required type="text" name="image-link" id="image-link" />
      </div>
      <div>
        <label htmlFor="rating">Your Rating:</label>
        <select name="rating" id="rating">
          <option value="rating">1</option>
          <option value="rating">2</option>
          <option value="rating">3</option>
          <option value="rating">4</option>
          <option value="rating">5</option>
        </select>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;

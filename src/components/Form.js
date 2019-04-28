import React from "react";

function Form(props) {
  const options = [
    "produce",
    "dairy",
    "meat/protein",
    "condiments",
    "canned goods",
    "bread/grains",
    "frozen",
    "snacks",
    "baking/spices",
    "drinks",
    "paper/plastic",
    "toiletries",
    "pet care"
  ]; // kept 'choose' and 'misc' out of array bc sorting alphabetically and always want them to show first

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">item name</label>
        <input
          value={props.name}
          name="name"
          onChange={props.handleInputChange}
          type="text"
          className="form-control"
          placeholder="apples"
        />
      </div>
      <div className="form-group">
        <label htmlFor="quantity">quantity</label>
        <input
          value={props.quantity}
          name="quantity"
          onChange={props.handleInputChange}
          type="number"
          min="1"
          className="form-control"
          id="quantity"
          placeholder="0"
        />
      </div>
      <div className="form-group">
        <label htmlFor="section">section</label>
        <select
          value={props.section}
          name="section"
          onChange={props.handleInputChange}
          className="form-control"
          id="section"
        >
          <option value="">choose a section of the store</option>
          <option value="misc">misc</option>
          {options.sort().map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="notes">notes</label>
        <textarea
          value={props.notes}
          name="notes"
          onChange={props.handleInputChange}
          className="form-control"
          id="notes"
          rows="2"
        />
      </div>
      <button
        type="button"
        className="btn btn-success"
        onClick={props.handleFormSubmit}
      >
        add to list
      </button>
    </form>
  );
}

export default Form;

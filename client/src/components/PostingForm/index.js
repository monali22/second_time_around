import React from 'react'

const formStyle = {
  "border": "solid",
  "borderWidth": "5px",
  "width": "80%",
  "marginLeft": "10%",
  "marginTop": "5%"
}

const buttonStyle = {
  "marginLeft": "40%",
  "marginRight": "auto",
  "width": "20%"
}

export default function Form({onChange}) {
  return (
    <div>
      <form style={formStyle}>
        <div className="form-group">
          <label>Choose a category:</label>
          <br />
          <button type="button" className="btn btn-outline-primary">Toys</button>
          <button type="button" className="btn btn-outline-secondary">Housing</button>
          <button type="button" className="btn btn-outline-success">Electronics</button>
          <button type="button" className="btn btn-outline-danger">Sports</button>
          <button type="button" className="btn btn-outline-warning">Home</button>
          <button type="button" className="btn btn-outline-info">Fashion</button>
          <button type="button" className="btn btn-outline-secondary">Books</button>
          <button type="button" className="btn btn-outline-dark">Other</button>
        </div>
        <div className="form-group">
          <label >Product:</label>
          <textarea type="text" className="form-control" id="description" placeholder="Description"></textarea>
        </div>
        <div className="form-group">
          <label >Category:</label>
          <textarea type="text" className="form-control" id="description" placeholder="Description"></textarea>
        </div>
        <div className="form-group">
          <label >Location:</label>
          <textarea type="text" className="form-control" id="description" placeholder="Description"></textarea>
        </div>
        <div className="form-group">
          <label >Images: </label>
          <input type="file" id="images" placeholder="Images" multiple  onChange={onChange}/>
        </div>

        <button type="submit" className="btn btn-primary" style={buttonStyle}>Post</button>

      </form>
    </div>
  )
}

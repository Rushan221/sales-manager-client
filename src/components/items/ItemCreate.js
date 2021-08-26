import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

export default function ItemCreate() {
  const nameRef = useRef();
  const history = useHistory();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const itemData = {
      name: enteredName,
    };
    addItem(itemData);
  }

  function addItem(itemData) {
    fetch("http://localhost:5000/api/items", {
      method: "POST",
      body: JSON.stringify(itemData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/items");
    });
  }

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Add Item</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card card-primary">
                <div className="card-header"></div>
                <div className="card-body">
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <label htmlFor="name">Item Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Item Name"
                        id="name"
                        ref={nameRef}
                      />
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-sm">Add</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

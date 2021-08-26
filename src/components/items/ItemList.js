import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ItemList() {
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetchItems();
  // }, [items]);

  // const fetchItems = async () => {
  //   const result = await axios(`http://localhost:5000/api/items`);
  //   setItems(result.data);
  // };

  // function deleteHandler(itemId) {
  //   fetch(`http://localhost:5000/api/items/${itemId}`, {
  //     method: "DELETE",
  //   }).then(() => {
  //     fetchItems();
  //   });
  // }

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Items</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card card-primary">
                <div className="card-header">
                  <button className="btn btn-success btn-sm">
                    <Link to="/item/create">Add</Link>
                  </button>
                </div>
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {items.map((item) => {
                        return (
                          <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>
                              <button className="btn-primary btn-sm mr-1">
                                Edit
                              </button>
                              <button
                                className="btn-danger btn-sm"
                                onClick={() => deleteHandler(item._id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })} */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

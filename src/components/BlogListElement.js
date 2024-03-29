import { Link } from "react-router-dom";
import "./blogListElement.css";
import { connect } from "react-redux";
import { removeDb } from "../actions/blogActions";

import React from "react";

const BlogListElement = (props) => {
  return (
    <ul className="blogsListItem">
      <li>
        <p>{`* ${props.title}`}</p>
        <div className="blogsAction">
          <Link to={`${props.id}`} style={{ textDecorationLine: "underline" }}>
            Details
          </Link>
          <Link
            to={`/edit/${props.id}`}
            style={{ textDecorationLine: "underline" }}
          >
            Edit
          </Link>
          <button
            type="button"
            onClick={() => {
              props.dispatch(removeDb(props.id));
            }}
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  );
};

export default connect()(BlogListElement);

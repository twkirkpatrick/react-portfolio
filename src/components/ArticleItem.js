import React from "react";
import Col from "react-bootstrap/Col";

const ArticleItem = ({ title, url, date }) => {
  return (
    <div>
      <Col className="articles-type">
        {/* <h6 style={{ marginTop: "1rem" }}>{date}</h6> */}
        <i className="fab fa-dev"></i>
        <a
          href={url}
          style={{ color: "black", textDecoration: "underline" }}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
      </Col>
    </div>
  );
};

export default ArticleItem;

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticleItem from "./ArticleItem";
import articles from "../articles.json";

const Articles = () => {
  return (
    <div id="articles">
      <Container>
        <Row>
          <Col sm={6}>
            <h1 className="heading" style={{ color: "black" }}>
              ARTICLES
            </h1>
            {articles.map((article) => (
              <ArticleItem
                title={article.title}
                url={article.url}
                date={article.date}
              />
            ))}
          </Col>
          <Col sm={6}>
            <h1 className="heading" style={{ color: "black" }}>
              CONTACT
            </h1>
            <a href="mailto:twk4491@gmail.com" target="_blank" rel="noreferrer">
              <i className="fas fa-envelope social"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/tanner-kirkpatrick-6ab95a1a9/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin social"></i>
            </a>
            <a
              href="https://github.com/twkirkpatrick"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-square social"></i>
            </a>
            <i className="fas fa-mobile-alt social">
              <span className="number"> (804) 305-2701</span>
            </i>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Articles;

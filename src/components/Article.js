import React from "react";
import PropTypes from "prop-types";
import { Button, Col, ListGroupItem, Row } from "reactstrap";

const Article = ({ imgSrc, name, price, remove }) => (
  <ListGroupItem>
    <Row>
      <Col xs={3}>
        <Button onClick={remove}>Supp</Button>
      </Col>
      <Col xs={3}>
        <img className="img-fluid" alt={name} src={imgSrc} />
      </Col>
      <Col xs={3}>
        <h3>{name}</h3>
      </Col>
      <Col xs={3}>
        <p>{price} €</p>
      </Col>
    </Row>
  </ListGroupItem>
);

Article.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired
};

export default Article;

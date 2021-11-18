import React from "react";
import { Card, Col } from "react-bootstrap";
import { numberWithCommas } from "../utils/Utils";

const Menus = ({ menu }) => {
  return (
    <Col md={4} xs={6} className="mb-4">
      <Card className="shadow h-100">
        <Card.Img
          className="h-50"
          variant="top"
          src={
            "assets/images/" +
            menu.category.nama.toLowerCase() +
            "/" +
            menu.gambar
          }
        />
        <Card.Body>
          <Card.Title><strong>({menu.kode})</strong> {menu.nama}</Card.Title>
          <Card.Text>RP. {numberWithCommas(menu.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;

import React from "react";
import { PointShow, PointBalance } from "./style";
import { Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import { BiGift } from "react-icons/bi";

function Point() {
  return (
    <PointShow>
      <Row className="d-flex justify-content-center">
        <PointBalance className="shadow d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-warning">
            <BiGift></BiGift>
          </h2>
          <h5>100 คะเเนน</h5>
        </PointBalance>
      </Row>
    </PointShow>
  );
}

export default Point;

import React from "react";
import { SearchTap, SearchBox, TextSeeAll } from "./style";
import { Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

function SearchSection() {
  return (
    <SearchTap>
      <Row className="d-flex justify-content-center">
        <SearchBox xl={5} md={8} xs={10} className="shadow p-3">
          <b>ค้นหางานที่ใช่สำหรับคุณ</b>
          <hr></hr>
          <Row>
            <Col className="m-1">
              <p>ประเภทงาน</p>
              <DropdownButton
                id="dropdown-basic-button"
                title="ค้นหาตามประเภทงาน"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col className="m-1">
              <p>เรียงตาม</p>
              <DropdownButton
                id="dropdown-basic-button"
                title="ค้นหาโดยเรียงตาม"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
          <TextSeeAll className="text-right mt-1">
            <AiOutlineClose className="mr-1"></AiOutlineClose>
            <span>ล้างการค้นหา</span>
          </TextSeeAll>
        </SearchBox>
      </Row>
    </SearchTap>
  );
}

export default SearchSection;

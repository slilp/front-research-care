import React from "react";
import { SearchTap, SearchBox } from "../style";
import { Row, Col, DropdownButton, Dropdown } from "react-bootstrap";

function SearchSection() {
  return (
    <SearchTap>
      <Row className="d-flex justify-content-center">
        <SearchBox xl={5} md={8} xs={10} className="shadow p-3">
          <b>ค้นหางานที่ใช่สำหรับคุณ</b>
          <hr></hr>
          <Row>
            <Col className="m-1 d-flex flex-column align-items-center">
              <p>ประเภทงาน</p>
              <DropdownButton
                id="dropdown-basic-button"
                title="ค้นหาตามประเภทงาน"
              >
                <Dropdown.Item>ทั้งหมด</Dropdown.Item>
                <Dropdown.Item>ครีมทาหน้า</Dropdown.Item>
                <Dropdown.Item>เซรั่ม</Dropdown.Item>
                <Dropdown.Item>ครีมทาตัว</Dropdown.Item>
              </DropdownButton>
            </Col>
            {/* <Col className="m-1">
              <p>เรียงตาม</p>
              <DropdownButton
                id="dropdown-basic-button"
                title="ค้นหาโดยเรียงตาม"
              >
                <Dropdown.Item>คะเเนน มากไปน้อย</Dropdown.Item>
                <Dropdown.Item>คะเเนน น้อยไปน้อย</Dropdown.Item>
                <Dropdown.Item>ค่าตอบเเทน มากไปน้อย</Dropdown.Item>
              </DropdownButton>
            </Col> */}
          </Row>
          {/* <TextSeeAll className="text-right mt-1">
            <AiOutlineClose className="mr-1"></AiOutlineClose>
            <span>ล้างการค้นหา</span>
          </TextSeeAll> */}
        </SearchBox>
      </Row>
    </SearchTap>
  );
}

export default SearchSection;

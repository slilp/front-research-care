import React from "react";
import { SearchTap, SearchBox, DropdownSearch } from "../style";
import { Dropdown } from "react-bootstrap";

function SearchSection() {
  return (
    <SearchTap>
      <div className="d-flex justify-content-center">
        <SearchBox className="shadow p-3">
          <b>ค้นหางานที่ใช่สำหรับคุณ</b>
          <hr></hr>
          <div className="d-flex flex-column align-items-center">
            <p>ประเภทงาน</p>
            <DropdownSearch
              id="dropdown-basic-button"
              title="ค้นหาตามประเภทงาน"
              variant="secondary"
            >
              <Dropdown.Item>ทั้งหมด</Dropdown.Item>
              <Dropdown.Item>ครีมทาหน้า</Dropdown.Item>
              <Dropdown.Item>เซรั่ม</Dropdown.Item>
              <Dropdown.Item>ครีมทาตัว</Dropdown.Item>
            </DropdownSearch>
          </div>
        </SearchBox>
        {/* <SearchBox xl={5} md={8} xs={10} className="shadow p-3">
          <b>ค้นหางานที่ใช่สำหรับคุณ</b>
          <hr></hr>
          <Row>
            <Col className="d-flex flex-column align-items-center">
              <p>ประเภทงาน</p>
              <DropdownSearch
                id="dropdown-basic-button"
                title="ค้นหาตามประเภทงาน"
                variant="secondary"
              >
                <Dropdown.Item>ทั้งหมด</Dropdown.Item>
                <Dropdown.Item>ครีมทาหน้า</Dropdown.Item>
                <Dropdown.Item>เซรั่ม</Dropdown.Item>
                <Dropdown.Item>ครีมทาตัว</Dropdown.Item>
              </DropdownSearch>
            </Col>
          </Row>
        </SearchBox> */}
      </div>
    </SearchTap>
  );
}

export default SearchSection;

import React from "react";
import { useLocation } from "react-router-dom";
import { Row, Container } from "react-bootstrap";
import Card from "./Card";
import { JobCardSection } from "./style";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ListOfJob() {
  let query = useQuery();
  const searchType = query.get("type");
  const searchSort = query.get("sort");

  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Container>
      <h5>
        <b>
          งานที่พบ 8 งาน
          {/* {searchSort} {searchType} */}
        </b>
      </h5>
      <Row>
        {list.map((value) => (
          <JobCardSection key={value} sm={12} md={6} lg={3}>
            <Card></Card>
          </JobCardSection>
        ))}
      </Row>
    </Container>
  );
}

export default ListOfJob;

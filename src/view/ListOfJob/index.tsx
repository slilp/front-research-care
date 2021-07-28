import React from "react";
import { Row, Container } from "react-bootstrap";
import { Card, useJobList } from "./component";
import { JobCardSection } from "./style";

function ListOfJob() {
  const { jobList, loading } = useJobList();

  return (
    <Container>
      <h5>
        {loading ? <b>งานที่พบ 0 งาน</b> : <b>งานที่พบ {jobList.length} งาน</b>}
      </h5>
      <Row>
        {loading ? (
          <div className="h-100 w-100 d-flex justify-content-center align-items-center">
            กำลังโหลด...
          </div>
        ) : (
          jobList.map((value, idx) => (
            <JobCardSection key={idx} sm={12} md={6} lg={3}>
              <Card
                image={value.image}
                title={value.title}
                desc={value.desc}
                point={value.point}
                period={value.period}
                salary={value.salary}
              ></Card>
            </JobCardSection>
          ))
        )}
      </Row>
    </Container>
  );
}

export default ListOfJob;

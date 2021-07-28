import React from "react";
import { Container } from "react-bootstrap";

function PageLoader() {
  return (
    <Container
      style={{ minHeight: "80vh" }}
      className="d-flex h-100 align-items-center justify-content-center"
    >
      <h5>กำลังโหลด...</h5>
    </Container>
  );
}

export default PageLoader;

import React from "react";
import { Row, Col } from "react-bootstrap";
import { Card, GiftImage, Tag } from "./style";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Gift() {
  const MySwal = withReactContent(Swal);

  const onBuy = (): any => {
    MySwal.fire({
      title: <p>Hello World</p>,
      footer: "Copyright 2018",
      didOpen: () => {
        MySwal.clickConfirm();
      },
    }).then(() => {
      return MySwal.fire(<p>Shorthand works too</p>);
    });
  };

  return (
    <div className="mt-5">
      <Row>
        {[1, 2, 3, 4, 5, 6].map((x) => (
          <Col md={6} lg={4} className="p-2">
            <Card className="shadow-sm rounded p-3 text-center" onClick={onBuy}>
              <GiftImage className="rounded"></GiftImage>
              <p className="text-muted mt-3">IPHONE 12 IPHONE</p>
              <Tag className="p-1 rounded">500 คะเเนน</Tag>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Gift;

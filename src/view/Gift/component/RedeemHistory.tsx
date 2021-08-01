import React from "react";
import { BsGift } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import { GiftImage, GiftCard, GiftTagStatus } from "../style";

function RedeemHistory() {
  return (
    <div>
      <h5>
        <BsGift className="pr-2 h2"></BsGift>คำขอเเลกของสมนาคุณ
      </h5>
      <Row>
        {[1, 2, 3, 4, 5].map((x) => (
          <Col md={12} className="shadow-sm">
            <Row>
              <GiftCard>
                <GiftImage></GiftImage>
              </GiftCard>
              <GiftCard className="text-wrap m-0 p-0">Iphone 12 </GiftCard>
              <GiftCard className="m-0 p-0">
                <div>
                  {x !== 2 ? (
                    <GiftTagStatus color="#f699cd">รอขนส่ง</GiftTagStatus>
                  ) : (
                    <GiftTagStatus color="#98bf64">จัดส่งสำเร็จ</GiftTagStatus>
                  )}
                  <p>100 คะเเนน</p>
                </div>
              </GiftCard>
            </Row>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default RedeemHistory;

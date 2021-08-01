import { Row, Col } from "react-bootstrap";
import { Card, GiftImage, Tag } from "../style";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Ipad } from "../../../asset/images";
import { useHistory } from "react-router-dom";
import { useAuthSelector } from "../../../state/hooks";

function Gift() {
  const MySwal = withReactContent(Swal.mixin({}));
  const history = useHistory();

  const { isAuthenticated } = useAuthSelector();
  const onBuy = (id: number): any => {
    if (isAuthenticated) {
      if (id === 2) {
        MySwal.fire({
          icon: "question",
          text: "คุณต้องการเเลกของรางวัล ?",
          confirmButtonText: "ตกลง",
          showCancelButton: true,
          cancelButtonText: "ยกเลิก",
          confirmButtonColor: "#eb65a3",
        }).then((result) => {
          if (result.isConfirmed) {
            MySwal.fire({
              text: "กำลังทำรายการ...",
              showConfirmButton: false,
              allowOutsideClick: false,
              timerProgressBar: true,
            });
            setTimeout(() => {
              MySwal.fire({
                icon: "success",
                text: "เเลกรางวัลสำเร็จ",
                confirmButtonColor: "#eb65a3",
                confirmButtonText: "ตกลง",
              });
            }, 1000);
          }
        });
      } else {
        MySwal.fire({
          icon: "error",
          showConfirmButton: false,
          text: "คะเเนนของคุณไม่เพียงพอ",
          showCancelButton: true,
          cancelButtonText: "ยกเลิก",
        });
      }
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="mt-5">
      <Row>
        {[1, 2, 3, 4, 5, 6].map((x) => (
          <Col md={6} lg={4} className="p-2">
            <Card
              className="shadow-sm rounded p-3 text-center"
              onClick={() => onBuy(x)}
            >
              {x === 2 ? (
                <GiftImage className="rounded" background={Ipad}></GiftImage>
              ) : (
                <GiftImage className="rounded"></GiftImage>
              )}
              <p className="text-muted mt-3">APPLE iPhone 12</p>
              {x === 2 ? (
                <Tag className="p-1 rounded">100 คะเเนน</Tag>
              ) : (
                <Tag className="p-1 rounded">150 คะเเนน</Tag>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Gift;

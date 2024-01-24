import React, { useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

function Age() {
  const [dt, setDt] = useState("");
  const [calculate, setCalculate] = useState("");
  const age = () => {
    const dob = new Date(dt);
    const dob1 = new Date();
    const day = dob1.getDay() - dob.getDay();
    const month = dob1.getMonth() - dob.getMonth();
    const ageInMilliseconds = new Date() - dob;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    setCalculate(
      `Age: ${Math.floor(ageInYears)}years, ${Math.abs(day)}days, ${Math.abs(
        month
      )}months`
    );
  };
  return (
    <div className="calander">
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <div>
            <Card
              style={{ background: ` #F6692D`, color: `white`, border: `1px` }}
            >
              <br />
              <Row>
                <Col md={2}></Col>
                <Col md={8}>
                  <h5 className="age"> Age Calculator</h5>
                </Col>
                <Col md={2}></Col>
              </Row>
              <Row>
                <Col md={1}></Col>
                <Col md={11}>Enter the DOB:</Col>
              </Row>
              <br />
              <Row>
                <Col md={2}></Col>
                <Col md={9}>{calculate}</Col>
                <Col md={1}></Col>
              </Row>
              <br />
              <Row>
                <Col md={4}></Col>
                <Col md={4}>
                  <input
                    type="Date"
                    value={dt}
                    onChange={(e) => setDt(e.target.value)}
                  ></input>
                </Col>
                <Col md={4}></Col>
              </Row>
              <br />
              <br />

              <Row>
                <Col md={4}></Col>
                <Col className="age1" md={4}>
                  <Button variant="success" onClick={age}>
                    Calculate
                  </Button>
                </Col>
                <Col md={4}></Col>
              </Row>
              <br />
            </Card>
          </div>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}

export default Age;

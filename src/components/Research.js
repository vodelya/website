import { Typography, Row, Col } from "antd"

const { Title, Paragraph } = Typography;

export const Research = () => {
  return (
    <div id="research">
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
          <Title level={2}>Research</Title>
        </Col>
      </Row>
      <Row style={{ gap: '20px' }}>
        <Paragraph>
          My research lies at the intersection of X and Y. Currently, I am working on XYZ. My most <a href="https://ieeexplore.ieee.org/abstract/document/9378338">recent work</a> explored XYZ.
        </Paragraph>
      </Row>
    </div>
    );
  }
import { Typography, Row, Col, Image } from "antd"

const { Title, Paragraph } = Typography;

export const About = () => {
  return (
    <>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24, offset: 16 }} xl={{ span: 24, offset: 16 }} xxl={{ span: 24, offset: 16 }}>
          <Title level={2}>About</Title>
        </Col>
      </Row>
      <Row style={{ gap: '20px' }}>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 1 }}>
          <Image style={{ borderRadius: "50%" }} preview={false} width="50%" src="/avatar.jpeg" />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 11 }} lg={{ span: 11 }}>
          <Paragraph>
            I am a PhD student in the <a href='https://www.csc.ncsu.edu/'>Department of Computer Science</a> at NC State University, working under <a href='https://www.csc2.ncsu.edu/faculty/kogan/'>Dr. Kemafor Ogan</a>. My research lies in XYZ. In my free time, I like to do X, Y, and Z.
          </Paragraph>
          <Paragraph>
            I am currently open to internship opportunities in software development. If you are hiring, please contact me; you can find my CV <a href='/CV.pdf'>here</a>.
          </Paragraph>
        </Col>
      </Row>
    </>
  )
}
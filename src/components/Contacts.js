import { Col, Row, Card, Badge, List, Typography } from 'antd';
import { contacts } from '../data/contact';

const { Title } = Typography;

export const Contacts = () => {
	return (
		<>
			<Row>
				<Col span={24}>
					<Title level={2}>Contact</Title>
				</Col>
			</Row>
			<Row>
				{contacts.map((contact, idx) => {
					const offset = idx === 0 ? 0 : 1;
					return (
						<Col key={idx} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10, offset }} lg={{ span: 7, offset }}>
							<Card style={{ borderRadius: "6px" }} title={contact.type} bordered={true}>
								<List
									itemLayout="horizontal"
									dataSource={contact.contacts}
									renderItem={item => (
										<List.Item>
											{item.icon}
											<List.Item.Meta
												title={item.value}
											/>
											{item.preferred && <Badge count={"Preferred"} />}
										</List.Item>
									)}
								/>
							</Card>
						</Col>
					);
				})}
			</Row>
		</>
	);
};
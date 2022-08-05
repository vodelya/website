import { Col, Row, Card, Badge, List } from 'antd';
import { contacts } from '../data/contact';

export const Contacts = () => {
	return (
		<>
			<Row>
				<Col span={24}>
					<h1>Contacts</h1>
				</Col>
			</Row>
			<Row>
				{contacts.map((contact, idx) => {
					const offset = idx === 0 ? 0 : 1;
					return (
						<Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10, offset }} lg={{ span: 7, offset }}>
							<Card title={contact.type} bordered={true}>
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
								/>;
							</Card>
						</Col>
					);
				})}
			</Row>
		</>
	);
};
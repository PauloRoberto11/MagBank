import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const AccountHistory = ({ data }) => {
  const { history } = data;

  return (
    <Container>
      <Row>
        <Col xs={12} lg={8}>
          <h3 className="mt-2">Extrato de conta corrente</h3>
          <Table striped borderless>
            <thead>
              <tr>
                <th>Data</th>
                <th>Descrição</th>
                <th>Valor (R$)</th>
              </tr>
            </thead>
            <tbody>
              {history.map(({ date, description, value }) => (
                <tr>
                  <td>{date}</td>
                  <td>{description}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountHistory;

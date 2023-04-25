import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CardList = ({ posts }) => {
  return (
    <Container>
      <Row>
        {   posts &&
            posts.map((post) => (
            <Col xs={12} lg={4} key={post.id}>
                <Card className='mx-auto my-3'>
                <Card.Img src={post.image}/>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.description}</Card.Text>
                    <Button variant="danger">{post.action}</Button>
                </Card.Body>
                </Card>
            </Col>
        ))
    }
      </Row>
    </Container>
  );
};

export default CardList;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const CenteredButton = ({ children, onClick }) => {
    return (
        <Container className="d-flex justify-content-center">
            <Row>
                <Button className="my-5 px-5 py-3" variant="success" size="lg" onClick={onClick}>
                    {children}
                </Button>
            </Row>
        </Container>
    )

}
export default CenteredButton;
import { Col, Row, Container, Image} from "react-bootstrap";
import { faFacebookSquare, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../assets/MAGbank.png";
import applestore from "../assets/applestore.png";
import googleplay from "../assets/googleplay.png";
import "./Footer.scss";


const Footer = () => {
    return (
        <Footer className='Footer'>
            <Container>
                <Row className= 'text-center py-5'>
                    <Col xs={12} lg={6} className="text-lg-start">
                        <Image src={logo} />
                    </Col>
                        
                    <Col xs={12} lg={4} classname=''>
                        <Image src={applestore} />
                        <Image src={googleplay} className='ms-3 my-3 my-lg-0' />
                    </Col>
                            
                    <Col xs={12} lg={2}>
                        <a href='https://www.facebook.com' target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebookSquare} size= '2x' />
                        </a>
                        <a href='https://www.twitter.com' target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitter} size= '2x' className='ms-2' />
                        </a>
                        <a href='https://www.youtube.com' target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faYoutube} color="#c4302b" size= '2x' className='ms-2' />
                        </a>
                    </Col>

                </Row>
            </Container>
        </Footer>
    )

}
export default Footer;

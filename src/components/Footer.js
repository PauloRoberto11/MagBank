import { Col, Row, Container, Image} from "react-bootstrap";

import logo from "../assets/MAGbank.png";
import applestore from "../assets/applestore.png";
import googleplay from "../assets/googleplay.png";

import { faFacebookSquare, faTwitter, faYoutuber} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} lg={6}>
                    <Image src={logo} />
                </Col>
                    
                <Col xs={12} lg={4}>
                    <Image src={applestore} />
                    <Image src={googleplay} className='ms-4'  />
                </Col>
                        
                <Col xs={12} lg={2}>
                    <a href='https://www.facebook.com' target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebookSquare} color="7c7c7c" size= {2} />
                    </a>
                    <a href='https://www.twitter.com' target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} color="7c7c7c" size= {2} className='ms-2' />
                    </a>
                    <a href='https://www.youtuber.com' target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faYoutuber} color="7c7c7c" size= {2} className='ms-2' />
                    </a>
                </Col>

            </Row>
        </Container>
    )

}
export default Footer;

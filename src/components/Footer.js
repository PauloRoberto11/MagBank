import { Col, Container, Image, Row} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/MAGbank.png";
import applestore from "../assets/applestore.png";
import googleplay from "../assets/googleplay.png";

import "./Footer.scss";


const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className= 'text-center py-5'>
                    <Col xs={12} lg={6} className="text-lg-left mb-5 mb-lg-0">
                       <Image src={logo}  /> 
                    </Col>
                        
                    <Col xs={12} lg={4} className="mb-5 mb-lg-0">
                        <a 
                        href='https://www.apple.com/br/app-store/' target="_blank" rel='noopener noreferrer'>
                        <Image src={applestore} />
                        </a>
                        <a 
                        href='https://play.google.com/store/apps?hl=pt_BR&gl=US' target="_blank" rel='noopener noreferrer'>
                        <Image src={googleplay} className='ms-2' />
                        </a>
                    </Col>
                            
                    <Col xs={12} lg={2} className="d-flex align-items-center justify-content-center">

                        <a href='http://www.facebook.com' target="_blank" rel='noopener noreferrer'>
                            <FontAwesomeIcon 
                            icon={faFacebookSquare} 
                            size= '2x' />
                        </a>
                        <a href='http://www.twitter.com' target="_blank" rel='noopener noreferrer'>
                            <FontAwesomeIcon 
                            icon={faTwitter} 
                            size= '2x' 
                            className='ms-2' />
                        </a>
                        <a href='http://www.youtube.com' target="_blank" rel='noopener noreferrer'>
                            <FontAwesomeIcon 
                            icon={faYoutube} 
                            color="#c4302b"
                            size= '2x' 
                            className='ms-2' />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;

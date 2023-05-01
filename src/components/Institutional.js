import { Button, Col, Container, Row } from "react-bootstrap";
import { faGlobe, faMobile, faMobileAlt, faShieldAlt} from "@fortawesome/free-solid-svg-icons";

import IconText from "./IconText";
import "./Institutional.scss";


const Institutional = () => {
  return (
    <section className="institutional text-light py-5">
      <Container>
        <Row>
          <Col xs={12} lg={5} />

          <Col xs={12} lg={7}>
            <h2 className="institutional-title my-5">Já nascemos digital</h2>

            <p className="mb-5">
            Nós, do Magbank, já nascemos open banking, e acreditamos na concorrência como uma impulsionadora da excelência.  
            A gente acredita no poder e na liberdade do empreendedor para controlar o seu dinheiro da melhor maneira.  
            No Magbank, parceiros e clientes têm condições mais atrativas para acessar as melhores oportunidades de serviços e produtos bancários para seus negócios. 
            </p>

            <div className="px-2">
              <IconText icon={faMobileAlt} className="mb-2">Sem fila e sem burocracia</IconText>
              <IconText icon={faMobile} className="mb-2">Simples e prático</IconText>
              <IconText icon={faGlobe} className="mb-2">Abertura de conta 100% on line</IconText>
              <IconText icon={faShieldAlt} className="mb-2">Transações seguras</IconText>
            </div>
            <Button variant='outline-light mt-5'>
              Abra sua conta
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Institutional;

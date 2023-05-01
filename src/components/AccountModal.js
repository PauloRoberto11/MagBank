
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/modal";

const AccountModal = ({show, handleClose}) => {
return (
    <Modal show={show} onHide={() => handleClose ()}>
        <Modal.Header closeButton>
            <Modal.Title>Abra sua conta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control type='text' placeholder='Informe seu Nome'/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type='number' placeholder='Informe seu CPF'/>
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control type='date' placeholder='Informe sua Data de nascimento'/>                    
                </Form.Group>

                <Form.Group>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type='email' placeholder='Informe seu E-mail'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Estado(UF)</Form.Label>
                    <Form.Select>
                        <option value = '0'> Acre - AC </option>
                        <option value = '1'> Alagoas - AL</option>
                        <option value = '2'> Amapá - AP</option>
                        <option value = '3'> Amazonas - AM</option>
                        <option value = '4'> Bahia - BA</option>
                        <option value = '5'> Ceará - CE</option>
                        <option value = '6'> Distrito Federal - DF</option>
                        <option value = '7'> Espírito Santo - ES</option>
                        <option value = '8'> Goiás - GO</option>
                        <option value = '9'> Maranhão - MA</option>
                        <option value = '10'> Mato Grosso - MT</option>
                        <option value = '11'> Mato Grosso do Sul - MS</option>
                        <option value = '12'> Minas Gerais - MG</option>
                        <option value = '13'> Pará - PA</option>
                        <option value = '14'> Paraíba - PB</option>
                        <option value = '15'> Paraná - PR</option>
                        <option value = '16'> Pernambuco - PE</option>
                        <option value = '17'> Piauí - PI</option>
                        <option value = '18'> Rio de Janeiro - RJ</option>
                        <option value = '19'> Rio Grande do Norte - RN</option>
                        <option value = '20'> Rio Grande do Sul - RS</option>
                        <option value = '21'> Rondônia - RO</option> 
                        <option value = '22'> Roraima - RR</option> 
                        <option value = '23'> Santa Catarina - SC</option> 
                        <option value = '24'> São Paulo - SP</option> 
                        <option value = '25'> Sergipe - SE</option> 
                        <option value = '26'> Tocantins - TO</option>
                    </Form.Select>
                </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant='secondary' onClick={() => handleClose ()}>Cancelar</Button>

            <Button variant='primary' onClick={() => handleClose ()}>Criar conta</Button>
        </Modal.Footer>
    </Modal>

);

}
export default AccountModal;
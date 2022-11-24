import { Button, Card, Modal } from "react-bootstrap";

function About() {
  return (
    <div>
      <Card style={{ margin: "80px", padding: "15px" }}>
        <Card.Title>🍷 Sobre nós 🍷</Card.Title>
        <Card.Text>
          Esta aplicação foi desenvolvida no encerramento do Módulo II do
          Bootcamp de Web Development Full Time - turma 91 por Diego Gustavo
          Pereira e Paula Bittencourt Gomes.
        </Card.Text>
        <Card.Text>
          Este curso é produto de uma parceira entre a Escola Nacional de
          Administração Pública (ENAP) e a IronHack.
        </Card.Text>
      </Card>
    </div>
    //     <Modal
    //   {...props}
    //   size="lg"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    // >
    //   <Modal.Header closeButton>
    //     <Modal.Title id="contained-modal-title-vcenter">
    //       Modal heading
    //     </Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <h4>Centered Modal</h4>
    //     <p>
    //       Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
    //       dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
    //       consectetur ac, vestibulum at eros.
    //     </p>
    //   </Modal.Body>
    //   <Modal.Footer>
    //     <Button onClick={props.onHide}>Close</Button>
    //   </Modal.Footer>
    // </Modal>
  );
}
export default About;

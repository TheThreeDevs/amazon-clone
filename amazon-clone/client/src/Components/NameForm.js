import { Form } from 'react-bootstrap';

function NameForm () {
  return  (
    <Form>
      <Form.Group>
        <Form.Label>Update Name</Form.Label>
        <Form.Control type='name' placeholder='Enter name'></Form.Control>
      </Form.Group>
    </Form>
  )
}

export default NameForm;
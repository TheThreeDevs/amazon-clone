import { Form } from 'react-bootstrap';

function EmailForm () {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Update Email</Form.Label>
        <Form.Control type='email' placeholder='Enter Email'></Form.Control>
      </Form.Group>
    </Form>
  )
}

export default EmailForm;
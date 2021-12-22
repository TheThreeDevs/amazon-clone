import { Form, Button } from 'react-bootstrap';

function EmailForm () {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Update Email</Form.Label>
        <Form.Control type='email' placeholder='Enter Email'></Form.Control>
      </Form.Group>
      <Button variant='primary' type='submit'>Submit</Button>
    </Form>
  )
}

export default EmailForm;
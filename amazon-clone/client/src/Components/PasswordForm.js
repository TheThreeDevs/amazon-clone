import { Form } from 'react-bootstrap';

function PasswordForm () {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Update Password</Form.Label>
        <Form.Control type='password' placeholder='Enter Password'></Form.Control>
      </Form.Group>
    </Form>
  )
}

export default PasswordForm;
import { Form, Button } from 'react-bootstrap';

function PasswordForm () {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Update Password</Form.Label>
        <Form.Control type='password' placeholder='Enter Password'></Form.Control>
      </Form.Group>
      <Button variant='primary' type='submit'>Submit</Button>
    </Form>
  )
}

export default PasswordForm;
import React from 'react';
import { Form, Button, Container, Segment, Divider } from 'semantic-ui-react';

const SignUpForm = () => {

  return (
    <div className='form-wrapper'>
      <Container>
        <Form>
          <Form.Field>
            <label>Full Name: </label><br/>
            <input type='text' name='fullname' />
          </Form.Field>
          <Form.Field>
            <label>Email address: </label><br/>
            <input type='email' name='email' />
          </Form.Field>
          <Form.Field>
            <label>Password: </label><br/>
            <input type='password' name='password' />
          </Form.Field>
          <Segment basic textAlign={'center'}>
            <Button type='submit' color='olive' style={{textAlign: 'center'}}>Sign Up</Button>
          </Segment>
        </Form>
      </Container><br />

      <Divider horizontal>Or</Divider><br /><br />
    </div>
  )
}

export default SignUpForm;

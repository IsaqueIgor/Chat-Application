import React from 'react';
import { Form, Icon } from 'antd';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

import { Button, Block } from '../../../components';
import { validateField } from '../../../utils';

const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting,
  } = props;
  return (
    <div>
      <div className='auth__top'>
        <h2>Login</h2>
        <p>Please login to your account</p>
      </div>
      <Block>
        <Form onSubmit={handleSubmit} className='login-form'>
          <Form.Item
            validateStatus={validateField('email', touched, errors)}
            help={!touched.email ? '' : errors.email}
            hasFeedback
            style={{ paddingBottom: '12px' }}
          >
            <InputGroup>
              <InputLeftElement
                children={
                  <Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
              />
              <Input
                id='email'
                placeholder='E-Mail'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </InputGroup>
          </Form.Item>
          <Form.Item
            validateStatus={validateField('password', touched, errors)}
            help={!touched.password ? '' : errors.password}
            hasFeedback
            style={{ paddingBottom: '12px' }}
          >
            <InputGroup>
              <InputLeftElement
                children={
                  <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
              />
              <Input
                id='password'
                type='password'
                placeholder='Password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </InputGroup>
          </Form.Item>
          <Form.Item
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {isSubmitting && !isValid && <span>Error!</span>}
            <Button
              disabled={isSubmitting}
              onClick={handleSubmit}
              type='primary'
              rightIcon='arrow-forward'
              variantColor='teal'
              variant='outline'
            >
              Login
            </Button>
          </Form.Item>
          <Link className='auth__register-link' to='/signup'>
            Register now
          </Link>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;

import React from 'react';
import { Form, Icon } from 'antd';
import { Link } from 'react-router-dom';

import { Button, Block, FormField } from 'components';

const success = false;

const RegisterForm = (props) => {
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
        <h2>Registration </h2>
        <p>Before enter the chat, you need to register</p>
      </div>
      <Block>
        {!success ? (
          <Form onSubmit={handleSubmit} className='login-form'>
            <FormField
              name='email'
              icon='mail'
              placeholder='E-Mail'
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />

            <FormField
              name='fullname'
              icon='user'
              placeholder='Your name and surname'
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />

            <FormField
              name='password'
              icon='lock'
              placeholder='Password'
              type='password'
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />

            <FormField
              name='password_2'
              icon='lock'
              placeholder='Confirm password'
              type='password'
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />

            <Form.Item>
              {isSubmitting && !isValid && <span>Ошибка!</span>}
              <Button
                disabled={isSubmitting}
                onClick={handleSubmit}
                type='primary'
                size='large'
              >
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className='auth__register-link' to='/signin'>
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className='auth__success-block'>
            <div>
              <Icon type='info-circle' theme='twoTone' />
            </div>
            <h2>Verify your account</h2>
            <p>
              A letter with a confirmation link has been sent to your mail
              account.
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;

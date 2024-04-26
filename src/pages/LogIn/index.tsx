import React, { useContext } from 'react';
import './style.scss';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { IUser } from '../../types/types';
import { MyContext } from '../../context/MyContext';
import { useNavigate } from 'react-router-dom';

export const LogIn: React.FC = React.memo((): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<IUser>();
  const { users } = useContext(MyContext);
  const navigate = useNavigate();
  const save = (data: IUser): void => {
    console.log(data);
    const us = users.find(
      (elm) => elm.email == data.email && elm.password == data.password,
    );
    if (us) {
      navigate('/profile/' + us.id);
    } else {
      setError('password', { message: 'Invalid password or email' });
    }
  };

  return (
    <div className="LogIn border border-3">
      <h2>Log in</h2>
      <Form onSubmit={handleSubmit(save)}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="email"
            {...register('email', { required: 'invalid email' })}
          ></Form.Control>
          {errors.email && <p>{errors.email.message}</p>}
          <br />
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="password"
            {...register('password', { required: 'invalid password' })}
          ></Form.Control>
           {errors.password && <p>{errors.password.message}</p>}
           <br />
          <Button variant="success" type="submit">
            {' '}
            Log In
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
});

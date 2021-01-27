import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import Login from './Login.tsx';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../../App.tsx';
import { useForm } from '../../util/Hooks.tsx';

jest.mock('../../util/Hooks.tsx', () => {
  let values = {};

  const onSubmit = jest.fn((e) => e);
  const onChange = (data) => { values = data };
  return { useForm: () => {
    return { onSubmit, onChange, values, }
  }}
})

describe('Login', () => {
  it('should render title "Welcome Back!"', () => {
    // render(<Router history={history}><MockedProvider><Login /></MockedProvider></Router>);
    render(<MockedProvider><App/></MockedProvider>);
    const message = screen.getByText('Welcome back!');
    expect(message).toBeInTheDocument();
  })

  it('should redirect to "/register" page when "create an account" button is clicked', async () => {
    const leftClick = { button: 0 };
    render(<MockedProvider><App/></MockedProvider>);
    await fireEvent.click(screen.getByText(/Create an Account!/i), leftClick);
    expect(screen.getByText(/Already/i)).toBeInTheDocument();
  })

  it('should call onSubmit with the username and password when submitted', () => {
    const history = createMemoryHistory();
    const userName = 'username';
    const password = 'password';
    const { onSubmit } = useForm();

    const { getByPlaceholderText, getByTestId } = render(<Router history={history}><MockedProvider><Login /></MockedProvider></Router>);

    fireEvent.change(getByPlaceholderText(/username/i), userName);
    fireEvent.change(getByPlaceholderText(/password/i), password);

    fireEvent.submit(getByTestId('submit-form'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  })
})
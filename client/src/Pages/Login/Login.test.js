import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import userEvent from '@testing-library/user-event';
// import { useMutation } from '@apollo/client';
import Login from './Login.tsx';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../../App.tsx';

describe('Login', () => {
  const history = createMemoryHistory();
  it('should render title "Welcome Back!"', () => {
    render(<Router history={history}><MockedProvider><Login /></MockedProvider></Router>);
    const message = screen.getByText('Welcome back!');
    expect(message).toBeInTheDocument();
  })

  it('should redirect to "/register" page when "create an account" button is clicked', async () => {
    // const history = createMemoryHistory()
    const leftClick = { button: 0 };
    // history.push('/register')
    render(<MockedProvider><App/></MockedProvider>);
    await fireEvent.click(screen.getByText(/Create an Account!/i), leftClick);
    expect(screen.getByText(/Already/i)).toBeInTheDocument();

  })
})
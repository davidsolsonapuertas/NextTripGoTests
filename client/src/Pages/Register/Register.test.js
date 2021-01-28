import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Register from './Register.tsx';
import App from '../../App.tsx';


describe('Register', () => {

  const history = createMemoryHistory();
  // let history = createMemoryHistory({intialEntries: ['/register']});
  // history.push('/register');
  const leftClick = { button: 0 };
  const username = '';
  // const password = '';

  // it('should redirect to the homepage when "create" button is clicked', async () => {
  //   render(<MockedProvider><App history={history} /></MockedProvider>);
  //   await fireEvent.click(screen.getByText(/Create/i), leftClick);
  //   expect(screen.getByText(/Logout/i)).toBeInTheDocument();
  // });

  it('should render warn the user when form input is invalid', async () => {
    const { getByTestId } = render(<Router history={history}><MockedProvider><Register /></MockedProvider></Router>);
    await fireEvent.change(screen.getByPlaceholderText('Username'), username);
    // await fireEvent.change(screen.getByPlaceholderText(/password/i), password);
    // fireEvent.click(screen.getByRole('button', {name: /Create/i}), leftClick);
    fireEvent.submit(getByTestId('submit-form'));
    expect(screen.getByRole('ul')).toBeInTheDocument();
  })
})

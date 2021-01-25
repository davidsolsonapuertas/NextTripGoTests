import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import { createMemoryHistory } from 'history';
import App from '../../App.tsx';


describe('Register', () => {

  let history = createMemoryHistory({intialEntries: ['/register']});
  // history.push('/register');
  const leftClick = { button: 0 };

  // it('should redirect to the homepage when "create" button is clicked', async () => {
  //   render(<MockedProvider><App history={history} /></MockedProvider>);
  //   await fireEvent.click(screen.getByText(/Create/i), leftClick);
  //   expect(screen.getByText(/Logout/i)).toBeInTheDocument();
  // });

  it('should render warn the user when form input is invalid', async () => {
    render(<MockedProvider><App history={history} /></MockedProvider>);
    await fireEvent.click(screen.getByText(/Create/i), leftClick);
    expect(screen.getByText('Password must not be empty')).toBeInTheDocument();
  })
})

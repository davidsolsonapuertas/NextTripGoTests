import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../../App.tsx';


describe('Login', () => {

  // let history = createMemoryHistory({intialEntries: ['/register']});
  const leftClick = { button: 0 };

  it('should render navigate', async () => {
    const history = createMemoryHistory({intialEntries:['/']});
    render(<Router history={history}><MockedProvider><App history={history} /></MockedProvider></Router>);
    await fireEvent.click(screen.getByText(/Me/i), leftClick);
    expect(screen.getByText(/Your trips/i)).toBeInTheDocument();
  })
})
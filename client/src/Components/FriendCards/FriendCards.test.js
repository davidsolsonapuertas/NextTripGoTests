import React from 'react';
import { render, screen } from '@testing-library/react';
import FriendCards from './FriendCards.tsx';

describe('FriendCards', () => {
  it('should render title "You don\'t have friends yet!"', () => {
    render(<FriendCards />);
    const message = screen.getByText('You don\'t have friends yet!');
    expect(message).toBeInTheDocument();
  })
})
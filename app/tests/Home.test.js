/**
 * tests/Home.test.js
 * Test de ejemplo que verifica si la página Home 
 * renderiza correctamente un heading.
 */
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home page', () => {
  it('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: /Dragon Ball Characters/i,
    });
    expect(heading).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Asegúrate de importar jest-dom
import Home from '../characters/page';

describe('Home page', () => {
  it('renders the Next.js logo', () => {
    render(<Home />);
    const logo = screen.getByAltText('Next.js logo');
    expect(logo).toBeInTheDocument();
  });
});
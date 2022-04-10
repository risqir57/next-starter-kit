import HomeContainer from '@containers/Home/Home.container';
import { render, screen } from '@testing-library/react';

describe('Home Container', () => {
  it('renders a heading', () => {
    render(<HomeContainer />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

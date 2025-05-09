import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TestComponent } from './TestComponent';

describe('<TestComponent>', () => {
  it('renders', async () => {
    const { container } = render(<TestComponent />);

    await userEvent.click(screen.getByText('Test button!'));

    expect(container).toMatchSnapshot();
  });
});
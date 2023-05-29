import { Button, ThemeButton } from './Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  test('Render without params', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Render with theme param', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});

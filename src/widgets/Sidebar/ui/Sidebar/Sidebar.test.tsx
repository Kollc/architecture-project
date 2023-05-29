import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/classNames/tests/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});

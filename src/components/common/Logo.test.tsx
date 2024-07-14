import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Logo from '@/components/common/Logo';
import { Routes } from '@/types/globalTypes';
import { motion } from 'framer-motion';


// import { describe, it, expect, vi } from 'vitest';


// Mock framer-motion
vi.mock('framer-motion', () => {
  const origin = vi.importActual('framer-motion');
  return {
    ...origin,
    motion: {
      div: vi.fn(({ children, ...props }) => <div {...props}>{children}</div>),
    },
  };
});

describe('Logo Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );

    expect(getByText('1-1')).toBeInTheDocument();
    expect(getByText('freemarket')).toBeInTheDocument();
  });

  it('has the correct link destination', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );

    const linkElement = getByRole('link');
    expect(linkElement).toHaveAttribute('href', Routes.INDEX);
  });

  it('applies hover animation', () => {
    render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );

    // Check if motion.div was called with correct props
    expect(motion.div).toHaveBeenCalledWith(
      expect.objectContaining({
        whileHover: { scale: 1.1 },
        className: 'flex items-center justify-center',
      }),
      expect.anything() // Ignore the children prop in this check
    );
  });
});

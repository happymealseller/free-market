import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Routes } from '@/types/globalTypes';
import Footer from '@/components/common/Footer';

describe('Footer component', () => {
    it('renders without crashing', () => {
        const { getByText, getByAltText } = render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        // Check if the copyright text is rendered
        expect(getByText(/Copyright © 2024 FreeMarket./i)).toBeInTheDocument();

        // Check if the privacy policy link is rendered
        expect(getByText(/Privacy Policy/i)).toBeInTheDocument();

        // Check if the about us link is rendered
        expect(getByText(/About Us/i)).toBeInTheDocument();

        // Check if the contact us link is rendered
        expect(getByText(/Contact Us/i)).toBeInTheDocument();

        // Check if the image is rendered with the correct alt text
        expect(getByAltText(/Instant Listings Banner/i)).toBeInTheDocument();
    });

    it('contains correct links', () => {
        const { getByText } = render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        // Check the href of the Privacy Policy link
        expect(getByText(/Privacy Policy/i).closest('a')).toHaveAttribute('href', Routes.PRIVACY_PAGE);

        // Check the href of the About Us link
        expect(getByText(/About Us/i).closest('a')).toHaveAttribute('href', Routes.ABOUT_PAGE);

        // Check the href of the Contact Us link
        expect(getByText(/Contact Us/i).closest('a')).toHaveAttribute('href', Routes.CONTACT_PAGE);
    });
});

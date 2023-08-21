import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
    it('should always render the name', () => {
        const props = { card: { name: 'Pavel', company: 'Microsoft', avatar_url: 'url' } };

        // Render the Card component with props
        render(<Card {...props} />);

        // Use getByText to check if the name is rendered
        const nameElement = screen.getByText('Pavel');
        expect(nameElement).toBeInTheDocument();
    })
})
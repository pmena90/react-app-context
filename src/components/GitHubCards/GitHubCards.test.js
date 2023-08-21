import GitHubCards from ".";
import TestRenderer from 'react-test-renderer';
import { ThemeProvider } from "../../contexts/ThemeContext";
import MyForm from "./MyForm";
import CardList from "./CardList";

describe('GitHubCards rendering', () => {
    it('should render the component with the dark mode classes', () => {
        const tr = TestRenderer.create(
            <ThemeProvider startingTheme="dark">
                <GitHubCards />
            </ThemeProvider>
        );
        const divs = tr.root.findAll((e) => e.props['data-testid'] === 'container-theme');

        divs.forEach(div => {
            expect(div.props.className).toMatch('bg-dark text-white');
        });
    });

    it('should render the component without the dark mode classes', () => {
        const tr = TestRenderer.create(
            <ThemeProvider startingTheme="ligth">
                <GitHubCards />
            </ThemeProvider>
        );
        const divs = tr.root.findAll((e) => e.props['data-testid'] === 'container-theme');

        divs.forEach(div => {
            expect(div.props.className).not.toMatch('bg-dark text-white');
        })
    })
});

describe('GitHubCards Component state', () => {
    it('should update state with new card on form submission', async () => {
        const mockOnSubmit = jest.fn(); // Mock onSubmit function
        const testRenderer = TestRenderer.create(
            <ThemeProvider startingTheme="ligth">
                <GitHubCards onSubmit={mockOnSubmit} />
            </ThemeProvider>
        );
        const testInstance = testRenderer.root;

        // Find the MyForm component within the rendered GitHubCards component
        // eslint-disable-next-line testing-library/await-async-query
        const myFormInstance = testInstance.findByType(MyForm);
        const mockCard = { name: 'John Doe', avatar_url: '...', company: 'Acme' };

        // Simulate form submission by invoking the handleOnSubmit method
        myFormInstance.props.onSubmit(mockCard);

        // Check if the state has been updated
        // eslint-disable-next-line testing-library/await-async-query
        const gitHubCardsInstance = testInstance.findByType(CardList);
        expect(gitHubCardsInstance.props.cards).toContainEqual(mockCard);

    });
});
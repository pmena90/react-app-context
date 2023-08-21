
import userEvent from '@testing-library/user-event';
import { githubService } from '../../services/githubService';
import MyForm from './MyForm';
import { cleanup, fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

jest.mock('../../services/githubService.js');

describe('MyForm Component', () => {
    describe('rendering', () => {
        const mockOnSubmit = jest.fn();
        let container;

        beforeEach(() => {
            container = document.createElement('div');
            document.body.appendChild(container);
        });

        afterEach(() => {
            document.body.removeChild(container);
            container = null;
        });

        it('should render the input type text to search by username', () => {
            render(<MyForm onSubmit={mockOnSubmit} />, { container });
            const input = screen.getByRole('textbox');

            expect(input).toBeInTheDocument();
        });

        it('should render the input type button to submit the form', () => {
            render(<MyForm onSubmit={mockOnSubmit} />, { container });
            const button = screen.getByRole('button', { name: 'Add Card' });

            expect(button).toBeInTheDocument();
        })

        it('should render the form', () => {
            render(<MyForm onSubmit={mockOnSubmit} />, { container });
            const form = screen.getByTestId('my-form');

            expect(form).toBeInTheDocument();
        });
    });

    describe('submit the form', () => {
        const mockOnSubmit = jest.fn();
        let container;

        beforeEach(() => {
            container = document.createElement('div');
            document.body.appendChild(container);
        });

        afterEach(() => {
            document.body.removeChild(container);
            container = null;
        });

        it('should call the onSubmit prop-function with the input type text value', async () => {
            render(<MyForm onSubmit={mockOnSubmit} />, { container });
            const input = screen.getByRole('textbox');
            const button = screen.getByRole('button', { name: 'Add Card' });

            const inputValue = 'pmena9090';
            const cardResultMock = { name: "Pavel Mena", avatar_url: "https://avatars0.githubusercontent.com/", company: "@facebook" };
            githubService.getUserByName.mockResolvedValueOnce(cardResultMock);

            fireEvent.change(input, { target: { value: inputValue } });
            fireEvent.click(button);

            await waitFor(() => {
                expect(githubService.getUserByName).toHaveBeenCalledTimes(1);
            });

            expect(githubService.getUserByName).toHaveBeenCalledWith(inputValue);
            expect(mockOnSubmit).toHaveBeenCalledWith(cardResultMock);
        });

        it('should reset the input after submit', async () => {
            render(<MyForm onSubmit={mockOnSubmit} />, { container });
            const input = screen.getByRole('textbox');
            const button = screen.getByRole('button', { name: 'Add Card' });

            const inputValue = "some value";
            githubService.getUserByName.mockResolvedValueOnce({});
            fireEvent.change(input, { target: { value: inputValue } });


            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(async () => {
                await userEvent.click(button); // Wrap userEvent.click inside act
            });

            await waitFor(() => {
                expect(githubService.getUserByName).toHaveBeenCalledTimes(1);
            });


            expect(input).toHaveValue("");
        });

        it('should display the loading indicator and remove 1 second after', async () => {
            render(<MyForm onSubmit={mockOnSubmit} />, { container });
            const input = screen.getByRole('textbox');
            const button = screen.getByRole('button', { name: 'Add Card' });

            const inputValue = "some value";
            githubService.getUserByName.mockResolvedValueOnce({});
            fireEvent.change(input, { target: { value: inputValue } });


            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(async () => {
                await userEvent.click(button); // Wrap userEvent.click inside act
            });

            const loading = screen.getByTestId('loading');
            expect(loading).toBeInTheDocument();
            setTimeout(() => {
                expect(loading).not.toBeInTheDocument();
            }, 1001);
        });

    });
});
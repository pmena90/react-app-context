import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './components/Header';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';


jest.mock('./components/DarkToggle/DarkToggle.js', () => () => <div>MockedDarkToggle</div>);

describe('Header', () => {
  it('renders the header with login button when user is not logged in', () => {

    render(
      <BrowserRouter>
        <ThemeProvider startingTheme="light">
          <AuthProvider initialLoggedInUser="">
            <Header />
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    );

    // Expect login button to be rendered
    const loginButton = screen.getByText('login');
    expect(loginButton).toBeInTheDocument();
  });

  it('renders the header with current user information when user is logged in', () => {

    render(
      <BrowserRouter>
        <ThemeProvider startingTheme="light">
          <AuthProvider initialLoggedInUser="Pavel">
            <Header />
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    );

    // Expect login button to be rendered
    const loggedInSpan = screen.getByTestId('username-text');
    expect(loggedInSpan).toHaveTextContent("Logged in as Pavel");
  });
});
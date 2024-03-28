describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/'); // Update the URL if necessary
  });

  it('should display login form', () => {
    cy.get('h2').should('contain', 'Login');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').should('exist').should('contain', 'Login');
  });

  it('should display error message if form submitted with empty fields', () => {
    cy.get('button[type="submit"]').click();
    cy.get('.text-red-500').should('contain', 'Email and password are required.');
  });

  it('should display error message for invalid email or password', () => {
    cy.get('input[name="email"]').type('invalid@example.com');
    cy.get('input[name="password"]').type('invalidpassword');
    cy.get('button[type="submit"]').click();
    cy.get('.text-red-500').should('contain', 'Error logging in. Please try again later.');
  });

  it('should redirect to event list page on successful login', () => {
    // Stub the login API request
    cy.intercept('POST', 'http://localhost:3002/login', {
      statusCode: 200,
      body: {
        // Mock the user data if needed
        // Example: { id: 1, name: 'John Doe', email: 'john@example.com' }
      }
    }).as('loginRequest');

    // Fill the login form
    cy.get('input[name="email"]').type('valid@example.com');
    cy.get('input[name="password"]').type('validpassword');
    cy.get('button[type="submit"]').click();

    // Wait for the login request to complete and then check the redirection
    cy.wait('@loginRequest').then(() => {
      cy.url().should('include', '/event-list');
    });
  });
});

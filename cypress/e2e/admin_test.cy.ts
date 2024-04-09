describe('Admin Login Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/admin-login');
    });
  
    it('displays login form and handles login', () => {
      // Check if login form exists
      cy.get('form').should('exist');
  
      // Fill in email and password
      cy.get('#email').type('admin@example.com');
      cy.get('#password').type('password123');
  
      // Intercept the login request and respond with success
      cy.intercept('POST', 'http://localhost:3002/admin/login', {
        statusCode: 200,
        body: {
          token: 'sample_token',
          userId: 'sample_user_id'
        }
      }).as('loginRequest');
  
      // Submit the form
      cy.get('form').submit();
  
      // Check if login request was sent
      cy.wait('@loginRequest').then((interception) => {
        expect(interception.request.body).to.have.property('email', 'admin@example.com');
        expect(interception.request.body).to.have.property('password', 'password123');
      });
  
      // Check if redirected to admin events page after successful login
      cy.url().should('include', '/admin-events');
    });
  
    it('displays error message for invalid login', () => {
      // Fill in invalid email and password
      cy.get('#email').type('invalid@example.com');
      cy.get('#password').type('invalidpassword');
  
      // Intercept the login request and respond with error
      cy.intercept('POST', 'http://localhost:3002/admin/login', {
        statusCode: 401,
        body: {
          message: 'Invalid email or password'
        }
      }).as('loginRequest');
  
      // Submit the form
      cy.get('form').submit();
  
      // Check if login request was sent
      cy.wait('@loginRequest');
  
      // Check if error message is displayed
      cy.contains('Error logging in. Please try again later.').should('exist');
    });
  });
  
  
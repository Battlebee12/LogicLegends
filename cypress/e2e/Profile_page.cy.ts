describe('Profile Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/profile');
    });
  
    it('displays user profile form and updates profile successfully', () => {
      // Check if profile form exists
      //cy.get('form').should('exist');
  
      // Fill in form fields
      cy.get('input[name="firstName"]').clear().type('John');
      cy.get('input[name="lastName"]').clear().type('Doe');
      cy.get('input[name="country"]').clear().type('USA');
      cy.get('input[name="zipCode"]').clear().type('12345');
  
      // Intercept the form submission and respond with success
      cy.intercept('PUT', 'http://localhost:3002/updateProfile', {
        statusCode: 200,
        body: {
          message: 'Profile updated successfully'
        }
      }).as('updateProfile');
  
      // Submit the form
      cy.get('form').submit();
  
      // Check if form submission request was sent
    //   cy.wait('@updateProfile');
  
      // Check if success message is displayed after profile update
      cy.contains('Profile updated successfully').should('exist');
    });
  
    it('displays user profile details correctly', () => {
      // Mock user data
      const userData = {
        name: 'John',
        lastname: 'Doe',
        email: 'john@example.com',
        country: 'USA',
        zipCode: '12345'
      };
      localStorage.setItem('user', JSON.stringify(userData));
  
      // Reload the page to fetch user data from localStorage
      cy.reload();
  
      // Check if user profile details are displayed correctly
      cy.get('input[name="firstName"]').should('have.value', 'John');
      cy.get('input[name="lastName"]').should('have.value', 'Doe');
      cy.get('input[name="email"]').should('have.value', 'john@example.com');
      cy.get('input[name="country"]').should('have.value', 'USA');
      cy.get('input[name="zipCode"]').should('have.value', '12345');
    });
  });
  
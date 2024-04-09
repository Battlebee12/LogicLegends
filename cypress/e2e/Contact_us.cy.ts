describe('Contact Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/contact');
    });
  
    it('displays contact form and submits successfully', () => {
      // Check if contact form exists
      cy.get('form').should('exist');
  
      // Fill in form fields
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john@example.com');
      cy.get('textarea[name="message"]').type('This is a test message.');
  
      // Intercept the form submission and respond with success
      cy.intercept('POST', '*/submit', {
        statusCode: 200,
        body: 'Success'
      }).as('formSubmission');
  
      // Submit the form
      cy.get('form').submit();
  
      // Check if form submission request was sent
      
  
      // Check if success message is displayed after form submission
      cy.contains('Thank you for your message!').should('exist');
    });
  });
  
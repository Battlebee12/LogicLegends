// describe('Signup Page', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:3000/sign-up'); // Update the URL if necessary
//   });

//   it('should display signup form', () => {
//     cy.get('h2').should('contain', 'Sign Up');
//     cy.get('input[name="fullName"]').should('exist');
//     cy.get('input[name="email"]').should('exist');
//     cy.get('input[name="password"]').should('exist');
//     cy.get('button[type="submit"]').should('exist').should('contain', 'Sign Up');
//   });

//   it('should display error message if form submitted with empty fields', () => {
//     cy.get('button[type="submit"]').click();
//     cy.get('.text-red-500').should('contain', 'Error creating account.');
//   });

//   it('should display error message for unsuccessful registration', () => {
//     // Stub the registration API request to simulate failure
//     cy.intercept('POST', 'http://localhost:3002/register', {
//       statusCode: 500, // Simulate server error
//       body: { message: 'Failed to register' }
//     }).as('registerRequest');

//     // Fill the signup form
//     cy.get('input[name="fullName"]').type('John Doe');
//     cy.get('input[name="email"]').type('john@example.com');
//     cy.get('input[name="password"]').type('password');
//     cy.get('button[type="submit"]').click();

//     // Wait for the registration request to complete and check the error message
//     cy.wait('@registerRequest').then(() => {
//       cy.get('.text-red-500').should('contain', 'Error creating account.');
//     });
//   });

//   it('should redirect to login page on successful registration', () => {
//     // Stub the registration API request to simulate success
//     cy.intercept('POST', 'http://localhost:3002/register', {
//       statusCode: 200,
//       body: { message: 'Account created successfully' }
//     }).as('registerRequest');

//     // Fill the signup form
//     cy.get('input[name="fullName"]').type('Jane Doe');
//     cy.get('input[name="email"]').type('jane@example.com');
//     cy.get('input[name="password"]').type('password');
//     cy.get('button[type="submit"]').click();

//     // Wait for the registration request to complete and check the redirection
//     cy.wait('@registerRequest').then(() => {
//       cy.url().should('include', '/login');
//     });
//   });
// });
describe('Signup Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/sign-up');
  });

  it('renders signup form correctly', () => {
    cy.contains('h2', 'Sign Up').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('input[name="firstName"]').should('exist');
    cy.get('input[name="lastName"]').should('exist');
    cy.get('select[name="country"]').should('exist');
    cy.get('input[name="zipCode"]').should('exist');
    cy.contains('button', 'Sign Up').should('exist');
    cy.contains('Already have an Eventify Account? Login').should('exist');
    cy.contains('Login in as Admin?').should('exist');
  });

  it('allows user to sign up', () => {
    // Fill in the signup form
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('testpassword');
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('select[name="country"]').select('Canada');
    cy.get('input[name="zipCode"]').type('12345');

    // Submit the form
    cy.contains('button', 'Sign Up').click();

    // Check if the user is navigated to the login page after successful signup
    cy.url().should('include', '/');
  });

  it('displays error message for unsuccessful signup attempt', () => {
    // Intercept the POST request to register and force it to fail
    cy.intercept('POST', 'http://localhost:3002/register', {
      statusCode: 400,
      body: { message: 'Error creating account.' }
    }).as('signupFailure');

    // Fill in the signup form
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('testpassword');
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('select[name="country"]').select('Canada');
    cy.get('input[name="zipCode"]').type('12345');

    // Submit the form
    cy.contains('button', 'Sign Up').click();

    // Check if the error message is displayed
    cy.contains('Error creating account.').should('exist');

    // Check if the user is not navigated to the login page after unsuccessful signup
    
  });
});

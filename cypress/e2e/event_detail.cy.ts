// cypress/integration/EventDetails.spec.js

// describe('EventDetails Page', () => {
//   beforeEach(() => {
//     // Visit the EventDetails page with ID 1
//     cy.visit('http://localhost:3000/event-details/1');
//   });

//   it('renders event details correctly', () => {
//     // Check if the title is rendered
//     cy.contains('h2', 'Event 1').should('exist');

//     // Check if the description is rendered
//     cy.contains('Description of Event 1').should('exist');

//     // Check if the date, location, organizer, and price are rendered
//     cy.contains('Date: 2024-03-15').should('exist');
//     cy.contains('Location: Location of Event 1').should('exist');
//     cy.contains('Organizer: Organizer Name 1').should('exist');
//     cy.contains('Price per ticket: $20').should('exist');
//   });

//   it('allows user to change quantity and calculates total price correctly', () => {
//     // Change the quantity input to 3
//     cy.get('input[type="number"]').clear().type('3');

//     // Check if the total price is calculated correctly
//     cy.contains('Total Price: $60').should('exist');
//   });

//   it('navigates to checkout page when Buy Now button is clicked', () => {
//     // Intercept the route to the checkout page
//     cy.intercept('GET', '/checkout/1?quantity=1').as('checkout');

//     // Click the Buy Now button
//     cy.contains('Buy Now').click();

//     // Wait for the checkout page to load
//     //cy.wait('@checkout');

//     // Check if the URL contains the correct path
//     cy.url().should('include', '/checkout/1?quantity=1');
//   });
// });





// describe('EventDetails Page', () => {
//   beforeEach(() => {
//     // Visit the EventDetails page with ID 1
//     cy.visit('http://localhost:3000/event-details/1');
//   });

//   it('renders event details correctly', () => {
//     // Check if the title is rendered
//     cy.contains('h2', 'concet').should('exist');

//     // Check if the description is rendered
//     cy.contains('dd').should('exist');

//     // Check if the date, venue, and price per ticket are rendered
//     cy.contains('Date: Saturday, March 30, 2024').should('exist');
//     cy.contains('Venue: 1004').should('exist');
//     cy.contains('Price per ticket: $22').should('exist');

//     // Check if the quantity input and total price are rendered
//     cy.get('input[type="number"]').should('exist');
//     cy.contains('Total Price: $22').should('exist');
//   });

//   it('allows user to change quantity and calculates total price correctly', () => {
//     // Change the quantity input to 2
//     cy.get('input[type="number"]').clear().type('2');

//     // Check if the total price is calculated correctly
//     cy.contains('Total Price: $44').should('exist');
//   });

//   it('navigates to payment page when Buy Now button is clicked', () => {
//     // Intercept the route to the payment page
//     cy.intercept('GET', '/payment').as('payment');

//     // Click the Buy Now button
//     cy.contains('button', 'Buy Now').click();

//     // Wait for the payment page to load
//     // cy.wait('@payment');

//     // Check if the URL contains the correct path
//     cy.url().should('include', '/payment');
// });

// });

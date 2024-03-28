// describe('SellTickets Component', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:3000/sell-tickets');
//   });

//   it('renders form fields correctly', () => {
//     cy.get('input#eventName').should('exist');
//     cy.get('input#ticketType').should('exist');
//     cy.get('input#price').should('exist');
//     cy.get('input#quantity').should('exist');
//     cy.get('button[type="submit"]').should('exist');
//   });

//   it('allows user to type into form fields', () => {
//     const eventName = 'Example Event';
//     const ticketType = 'General Admission';
//     const price = '25';
//     const quantity = '100';

//     cy.get('input#eventName').type(eventName).should('have.value', eventName);
//     cy.get('input#ticketType').type(ticketType).should('have.value', ticketType);
//     cy.get('input#price').type(price).should('have.value', price);
//     cy.get('input#quantity').type(quantity).should('have.value', quantity);
//   });

//   it('navigates to waiting page on form submission', () => {
//     const eventName = 'Example Event';
//     const ticketType = 'General Admission';
//     const price = '25';
//     const quantity = '100';

//     cy.get('input#eventName').type(eventName);
//     cy.get('input#ticketType').type(ticketType);
//     cy.get('input#price').type(price);
//     cy.get('input#quantity').type(quantity);

//     cy.get('button[type="submit"]').click();

//     // Assuming the waiting page has a unique identifier or URL
//     // You should replace 'waiting' with the correct identifier or URL
//     cy.url().should('include', '/waiting');
//   });
// });


describe('EventList Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/event-list');
  });

  it('renders events correctly', () => {
    cy.get('h2').should('contain', 'Events List');
    cy.get('[data-testid="search-bar"]').should('exist');
    cy.get('[data-testid="event-item"]').should('have.length.gt', 0); // Ensure at least one event is rendered
  });

  it('filters events based on search query', () => {
    cy.get('[data-testid="search-bar"]').type('aujka');
    cy.get('[data-testid="event-item"]').should('have.length', 1);
    //cy.get('[data-testid="event-item"]').contains('');

    // cy.get('[data-testid="search-bar"]').clear().type('concert');
    // cy.get('[data-testid="event-item"]').should('have.length.gt', 0); // Ensure at least one event matches the search query
  });

  it('navigates to event details page on event item click', () => {
    cy.get('[data-testid="event-item"]').first().click();
    cy.url().should('include', '/event-details/1'); // Assuming the first event's id is 1
  });
});

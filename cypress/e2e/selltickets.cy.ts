describe('SellTickets Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/sell-tickets');
  });

  it('renders form fields correctly', () => {
    cy.get('input#eventName').should('exist');
    cy.get('input#ticketType').should('exist');
    cy.get('input#price').should('exist');
    cy.get('input#quantity').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('allows user to type into form fields', () => {
    const eventName = 'Example Event';
    const ticketType = 'General Admission';
    const price = '25';
    const quantity = '100';

    cy.get('input#eventName').type(eventName).should('have.value', eventName);
    cy.get('input#ticketType').type(ticketType).should('have.value', ticketType);
    cy.get('input#price').type(price).should('have.value', price);
    cy.get('input#quantity').type(quantity).should('have.value', quantity);
  });

  it('navigates to waiting page on form submission', () => {
    const eventName = 'Example Event';
    const ticketType = 'General Admission';
    const price = '25';
    const quantity = '100';

    cy.get('input#eventName').type(eventName);
    cy.get('input#ticketType').type(ticketType);
    cy.get('input#price').type(price);
    cy.get('input#quantity').type(quantity);

    cy.get('button[type="submit"]').click();

    // Assuming the waiting page has a unique identifier or URL
    // You should replace 'waiting' with the correct identifier or URL
    cy.url().should('include', '/waiting');
  });
});



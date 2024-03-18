describe('EventList Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/event-list');
  });

  it('renders events correctly', () => {
    cy.get('h2').should('contain', 'Events List');
    cy.get('[data-testid=event-item]').should('have.length', 4); // Assuming there are 4 events in the list
  });

  it('filters events based on search query', () => {
    cy.get('[data-testid=search-input]').type('Demo Event 1');
    cy.get('[data-testid=event-item]').should('have.length', 1);
    cy.get('[data-testid=event-item]').contains('Demo Event 1');

    cy.get('[data-testid=search-input]').clear().type('concert');
    cy.get('[data-testid=event-item]').should('have.length', 2); // Assuming there are 3 events with 'Concert' in the description
  });

  it('navigates to event details page on event item click', () => {
    cy.get('[data-testid=event-item]').first().click();
    cy.url().should('include', '/event-details/1'); // Assuming the first event's id is 1
  });
});

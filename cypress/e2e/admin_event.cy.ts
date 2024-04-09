describe('Admin Events Page', () => {
    it('loads events and handles approval/rejection', () => {
      // Visit the admin events page
      cy.visit('http://localhost:3000/admin-events');
  
      // Check if loading message is displayed initially
      cy.contains('Loading...').should('exist');
  
      // Mock API response for events
      cy.intercept('GET', 'http://localhost:3002/events', { fixture: 'events.json' }).as('getEvents');
  
      // Wait for the events to be loaded
      cy.wait('@getEvents');
  
      // Check if events are displayed
      cy.get('.bg-white').should('have.length.at.least', 1);
  
      // Click the first event's approve button
      cy.get('.bg-green-500').first().click();
  
      // Check if the event is approved (you can modify this assertion according to your UI changes)
      cy.contains('Event with ID').should('exist');
  
      // Click the first event's reject button
      cy.get('.bg-red-500').first().click();
  
      // Check if the event is rejected (you can modify this assertion according to your UI changes)
      cy.contains('Event with ID').should('exist');
    });
  });
  
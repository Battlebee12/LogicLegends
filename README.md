# LogicLegends
**COSC 310 Project**
Team Name: Logic Legends
Team Members: 
Sarabroop Aulukh (24102220)
Shreya Saxena (41969981)
Raghav Bhagria (65827354)
Lluis Escolano (27196567)





Requirements: 
General Description

This event ticketing platform aims to help customers buy tickets and allows event organizers to host and manage events efficiently. The platform will also include a customer service ticket system where customers(customers who but tickets, event organizers that host events) can get their concerns addressed,  ensuring a smooth and user-friendly experience for all parties. 

2.1 Product Perspective

This platform is envisioned as a standalone system designed to integrate seamlessly with existing payment processors, social media for event promotion, and analytics tools for insights. It seeks to fill the gap in the market for a user-centric, versatile event ticketing solution, offering unique features such as direct peer-to-peer ticket resale and dedicated support channels for both buyers and event organizers.

2.2 Product Functions

Ticket Marketplace: A secure and easy-to-navigate space for buying and selling tickets.
Event Management Tools: Comprehensive functionalities for event organizers to create, promote, and manage events, including attendee tracking and sales analytics.
Customer Service Ticket System: A built-in support mechanism for handling inquiries and issues, accessible by customers and organizers alike.
User Profiles: Personalized accounts where users can manage their tickets, view purchase history, and receive recommendations based on preferences.

2.3 User Characteristics
Customers: Individuals seeking to attend events, ranging from concerts to sports and theater, with varying levels of technical proficiency.
Event Organizers: From small community event planners to large-scale concert promoters, requiring robust tools for event management.
Customer Support Staff: Individuals with a background in customer service, equipped to handle a wide range of queries and issues.

2.4 General Constraints
Scalability: The platform must effectively handle periods of high transaction volume and user traffic.
Security: Ensuring user data protection and secure financial transactions is paramount. 
Usability: Must be accessible and easy to use for a diverse user base with different levels of tech-savviness.
Integration: Compatibility with various third-party services and platforms for payments, promotions, and analytics.

2.5 Assumptions and Dependencies
Market Demand: Assumes a steady demand for online ticket purchasing and event discovery.
Technology Adoption: Relies on users' willingness to adopt new platforms for event ticketing.
Regulatory Compliance: Dependent on adherence to laws and regulations related to online commerce, data protection, and event management.
Third-Party Services: Success is partially dependent on the reliability and performance of integrated payment systems, social media platforms, and customer support tools.
This platform is designed to revolutionize the event ticketing industry by providing a holistic and user-friendly solution that caters to the needs of both event attendees and organizers. It leverages technology to streamline the ticket buying and selling process, enhance event management capabilities, and offer unmatched support, setting a new standard in the event ticketing landscape.

User Requirements
1. User Registration and Profile Management
Users should be able to easily create a new account on the platform, providing necessary details such as name, email, and password.

2. Event Discovery and Search
The platform should offer a user-friendly interface for browsing and searching upcoming events.

3. Ticket Booking and Management
Users should have a seamless and secure process for purchasing tickets to events.

4. Event Creation and Management for Organizers
Event organizers should have a straightforward process for creating and managing event listings.

5. Customer Support and Assistance
Users should have access to comprehensive customer support resources, including FAQs, guides, and articles.

6. Performance and Reliability
The platform should consistently deliver fast and responsive performance, with minimal downtime and delays.

User Stories:
Customer: 
As a customer, I want to seamlessly explore upcoming events on the website to stay informed about what's happening and make informed decisions about attendance.






Acceptance Criteria:

Upon visiting the website, there should be a well-organized and visually appealing list of upcoming events prominently displayed on the homepage. Each event should feature key details such as event name, date, location, and a brief description.

The website should offer intuitive search filters, including options to filter events by date, event type, and location.Applying filters should provide instant and accurate results, helping me quickly find events that align with my preferences and availability.

For each event, there should be a straightforward and secure ticket booking process, requiring just a few clicks.The booking flow should include options for selecting ticket types, choosing seats (if applicable), and providing necessary information for the   booking.

The website should provide a user-friendly interface where I can view my current event bookings.I should have the capability to make changes to existing bookings, such as updating the number of tickets or changing seating preferences.Cancelling a booking should be a clear and accessible option within the booking management section.

A dedicated section on the website should display a comprehensive history of all my past event bookings and purchases.Each entry in the booking history should include details like event name, date, location, and the total cost of the booking.

The website should feature a prominent and easily accessible option for contacting customer support.The customer support interface should allow me to submit inquiries or report issues efficiently, ensuring a timely and helpful response.

The website should implement a notification system to alert me about important updates related to my bookings, such as event reminders or changes to the event details. Notifications should be customizable, allowing me to choose my preferred communication channels (e.g., email, SMS).


Event Manager: 

"As an event manager, I want to effortlessly create an event listing for an upcoming concert featuring a music artist. This listing should be prominently displayed whenever users search for information related to the artist or the event. The process of creating the event listing should be streamlined, concise, and intuitive."

Acceptance Criteria:

Upon logging into the event management platform, I should have a clear dashboard that provides options for creating a new event.


Clicking on the "Create Event" option should lead me to an easy-to-fill event creation form.The form should include fields for essential information such as event name, date, time, venue details, featured artist, ticket prices, and a brief event description.

There should be an efficient mechanism for associating the event with a specific music artist.

The event creation form should allow me to upload captivating images or media related to the event.There should be guidelines on image dimensions and file types to ensure a visually appealing event listing.
The platform should automatically optimize the event listing for search engines to ensure it appears in relevant search results. Meta tags and keywords associated with the event, including the artist's name, should be customizable for better search visibility.

There should be a clear and distinct "Save" button to save a draft of the event listing.Upon completion, there should be an intuitive "Publish" button to make the event listing live and accessible to users.

After publishing, I should have the ability to edit and update the event details as needed.Any changes made to the event listing should be reflected in real-time.

After publishing the event listing, there should be a confirmation message indicating that the event has been successfully created and is now live on the platform.


Customer Support 

“As a customer support agent, I need to be able to manage the support forms submitted by the users, I also need to be able to answer to the requests through a secure communication form. Since not all the problems can be solved immediately, being able to continuously update the support form based on the users feedback and response to my possible solutions. Additionally I need to be able to contact the admin to correct possible problems that only he can fix.

Acceptance Criteria:
Access the support requests submitted by the user

Support forms should provide information on the event and any relevant information regarding the initial problem such as customer id and a general description of the issue

Support agents should be able to work on multiple support forms at once and have them be easily excessive while they’re still open/unsolved.

Make it possible for the user to have access to the customer support responses and have an exchange of messages by updating the support form.

There should be a form of communication between the customer support agent and then admin in order to solve more complicated issues.

When the problem is marked as solved, the form with all the back and forth messages should be stored into a database to be able to access previous forms

For security reasons, the form should only be accessible to concerned parties I.e. the customer, the customer support agent and the admin.

Admin: 

As an Admin, I want to efficiently verify event listings on our platform so that only high-quality and relevant events are displayed to users, ensuring a positive user experience.
Acceptance Criteria:
Upon accessing the admin dashboard, there should be a clearly labeled option for managing event listings.
Clicking on the "Manage Events" option should lead to a comprehensive list of all event listings awaiting verification.
Each event listing should display essential details such as event name, date, time, venue, organizer information, and a brief description.
The admin interface should provide an intuitive mechanism for reviewing and verifying event listings.
For each event, there should be options to mark it as "verified" or "not verified", with clear indicators of the verification status.
Events marked as "verified" should be automatically displayed to users on the platform.
Events marked as "not verified" should remain hidden from public view until they meet the required criteria or are approved by the admin.
The admin interface should allow for easy communication with event organizers, enabling the provision of feedback or guidance on improving event listings.
There should be a search and filter functionality to easily locate specific event listings based on criteria such as date, status, organizer, etc.
Changes made to the verification status of an event should be logged for auditing purposes, ensuring transparency and accountability in the verification process.





Functional Requirements 

1. User Account Management:   
 Users can create, edit, and delete their accounts.
 Users can update their profile information, including contact details and preferences.
 Implement role-based access control (RBAC) for different types of users (e.g., event organizers, ticket buyers, administrators).
 Admin can view a list of all registered users and their respective roles with ability to manually create, edit, suspend, or delete user accounts.
Implement advanced search and filtering options for user management.

2. Event Management:
 Event organizers can create, edit, and delete events, including setting event details such as name, description, location, date, and time.
 Support for creating different ticket types (e.g., VIP, General Admission) with customizable prices and quantities.
 Event organizers can view and manage a list of attendees.
   Automated event reminders to be sent to attendees via email or SMS. (optional)
 Admin has full control over event management functionalities including creating, editing, and deleting events.
Ability to moderate events submitted by organizers before they go live.
 View and manage attendee lists for all events.

3. Ticketing System:
Users can search for events based on various criteria (e.g., location, date, event type).
Users can select and purchase tickets through a secure checkout process.
Electronic tickets are generated and sent to the buyer's email upon successful payment. (optional)
 Implement a ticket resale and transfer mechanism within the platform.
 Admin can monitor ticket inventory for each event and intervene if necessary and ability to view and manage ticket orders, including refunds and cancellations.
Admin will have access to ticket resale and transfer logs for auditing purposes.

4. Reporting and Analytics:
Event organizers can access real-time sales and attendance reports.
Generate detailed analytics on ticket sales, revenue, and user demographics.
 Support for exporting data in various formats (e.g., CSV, Excel) for further analysis.

 Advanced reporting tools for admin to generate comprehensive analytics on platform usage, revenue trends, popular events, and user demographics.
 Export reports in various formats for further analysis or sharing with stakeholders.

5. User Interface and Experience:
 Responsive design to ensure usability across different devices (desktop, tablet, smartphone).
 Intuitive navigation and search functionality to easily find and purchase tickets.
Localization support for multiple languages and currencies.

6. Customer Support and Service:   
Provide a help center with FAQs, articles, and guides.
 Access to support agent via a form.
Feedback mechanism for users to report issues or suggest improvements.
Admin will have access to customer support tickets submitted by users.
 Monitor user feedback and suggestions for platform improvements.




Non Functional Requirements:
1. Performance:
The platform should handle a minimum of 1000 concurrent users without degradation in response time.
The average page load time for event listings and ticket purchases should be within 2 seconds.

2. Scalability:
The platform should support a database capable of handling a minimum of 10 thousand events and associated data.

3. Reliability:
The platform should have a system uptime of at least 98%.
In the case of system failure, the platform should be able to recover and restore full functionality within 15 minutes.

4. Availability
The platform should be accessible 24/7, with scheduled maintenance periods communicated to users in advance.
The website should be accessible from different devices and browsers, ensuring compatibility and availability across various platforms.

5. Security:
User data, including personal and payment information, should be encrypted during transmission.
Regular security audits and penetration testing should be conducted to identify and address vulnerabilities.

6. Usability
The platform should be user-friendly, with an intuitive interface for users of all technical levels.

7. Maintainability:
The codebase should be well-documented to facilitate easy maintenance and updates.
Updates and new features should be deployable with minimal downtime and user disruption.

8. Compatibility:
The platform should be compatible with major operating systems, browsers, and devices.
Integration with third-party services, such as payment gateways and event organizers' systems, should be seamless.




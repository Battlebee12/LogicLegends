// Import the necessary modules using ESM syntax
// import * as chai from 'chai';
// import chaiHttp from 'chai-http';
import chai from 'chai';
import chaiHttp from 'chai-http';

const { expect } = chai;

chai.use(chaiHttp);

 //import { expect } from 'chai';
import app from '../backend/index.js'; // Adjust the path according to your project structure. Ensure it exports the Express app.
//chai.use(chaiHttp);


// // chai.use(chaiHttp);

describe('User Registration', () => {
  // beforeEach((done) => {
  //   // Delete test user
  //   con.query('DELETE FROM users WHERE email = ?', ['test4@example.com'], (err, result) => {
  //     done(err);
  //   });
  // });

  it('should register a new user', (done) => {
    const newUser = {
      email: "test@9example.com",
      firstName: "John",
      lastName: "Doe",
      password: "123456",
      country: "USA",
      zipCode: "12345",
      isOrganizer: false // Assuming default value for isOrganizer
    };

    chai.request(app)
      .post('/register')
      .send(newUser)
      .end((err, res) => {
        if (err) {
          done(err); // Pass error to Mocha if request fails
          return;
        }
        
        // Check response status and body
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('Account created successfully.');
        
        done(); // Indicate that the test is complete
      });
  });


  describe('User Login', () => {
    it('should login successfully and return a token', (done) => {
      const loginDetails = {
        email: 'test3@example.com',
        password: '123456'
      };

      chai.request(app) // Use `server` instead of `app`
        .post('/login')
        .send(loginDetails)
        .end((err, res) => {
          expect(res).to.have.status(200);
          //expect(res.body).to.have.property('token');
          done();
        });
    });
  });


  describe('Access Protected Route', () => {
    it('should deny access without a valid token', (done) => {
      chai.request(app) // Corrected from `app` to `server`
        .get('/admin/events') // Assuming this is a protected route
        .set('Authorization', 'Bearer invalidtoken123')
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });
  });
  
  describe('Event Creation by Regular User', () => {
    it('should prevent a regular user from creating an event', (done) => {
      const eventData = {
        // Event data structure
      };
      const userToken = 'regularusertoken';

      
    
      chai.request(app) // Corrected from `app` to `server`
        .post('/events')
        .set('Authorization', `Bearer ${userToken}`)
        .send(eventData)
        .end((err, res) => {
          expect(res).to.have.status(403);
          expect(res.body.message).to.equal('Failed to authenticate token.');
          done();
        });
    });
  });
});


// import chaiHttp from 'chai-http';
// import chai from 'chai'; // Import chai

// import app from '../backend/index.js';

// chai.use(chaiHttp);

// // Your test cases go here

// describe('Backend API Tests', () => {
//     describe('User Registration', () => {
//         it('should return 400 for missing fields', (done) => {
//             chai.request(app)
//                 .post('/register')
//                 .send({ firstName: 'John', lastName: 'Doe', password: '123456', country: 'USA', zipCode: '12345' })
//                 .end((err, res) => {
//                     expect(res).to.have.status(400);
//                     expect(res.body).to.have.property('message').to.equal('All fields are required.');
//                     done();
//                 });
//         });

//         // Add more tests for user registration as needed
//     });

//     describe('User Login', () => {
//         it('should return 400 for missing email or password', (done) => {
//             chai.request(app)
//                 .post('/login')
//                 .send({ password: '123456' })
//                 .end((err, res) => {
//                     expect(res).to.have.status(400);
//                     expect(res.body).to.have.property('message').to.equal('Email and password are required.');
//                     done();
//                 });
//         });

//         // Add more tests for user login as needed
//     });

//     describe('Event Creation', () => {
//         it('should return 400 for missing fields', (done) => {
//             chai.request(app)
//                 .post('/events')
//                 .send({ description: 'Event description', date: '2024-04-01', ticketPrice: 20, ticketsAvailable: 100, venue: 'New York' })
//                 .end((err, res) => {
//                     expect(res).to.have.status(400);
//                     expect(res.body).to.have.property('message').to.equal('All fields are required.');
//                     done();
//                 });
//         });

//         // Add more tests for event creation as needed
//     });

//     // Add tests for other endpoints such as fetching events, admin login, etc.
// });
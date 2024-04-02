// Import the necessary modules using ESM syntax
import * as chai from 'chai';
import chaiHttp from 'chai-http';
import server from '/Users/shreyasaxena/Desktop/LL/LogicLegends/backend/index.js'; // Adjust the path according to your project structure. Ensure it exports the Express app.

const { expect } = chai;
chai.use(chaiHttp);

describe('User Registration', () => {
  it('should register a new user', (done) => {
    const newUser = {
      email: "test@example.com",
      firstName: "John",
      lastName: "Doe",
      password: "123456",
      country: "USA",
      zipCode: "12345"
    };

    chai.request(server)
      .post('/register')
      .send(newUser)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('Account created successfully.');
        done(); // Indicate that the test is complete
      });
  });

  describe('User Login', () => {
    it('should login successfully and return a token', (done) => {
      const loginDetails = {
        email: 'user@example.com',
        password: 'password123'
      };

      chai.request(server) // Use `server` instead of `app`
        .post('/login')
        .send(loginDetails)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('token');
          done();
        });
    });
  });


  describe('Access Protected Route', () => {
    it('should deny access without a valid token', (done) => {
      chai.request(server) // Corrected from `app` to `server`
        .get('/admin/events') 
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
        // Event data 
      };
      const userToken = 'regularusertoken';
    
      chai.request(server) // Corrected from `app` to `server`
        .post('/events')
        .set('Authorization', `Bearer ${userToken}`)
        .send(eventData)
        .end((err, res) => {
          expect(res).to.have.status(403);
          expect(res.body.message).to.equal('Unauthorized access.');
          done();
        });
    });
  });
});

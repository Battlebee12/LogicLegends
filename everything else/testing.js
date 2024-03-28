const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); //update, once i have access to git 
const expect = chai.expect;

chai.use(chaiHttp);

//Anuradha sir, this test if for user authentication 
//This test was shown in previous lab 
describe('User Authentication', () => {
  describe('/POST register', () => {
    it('should register a new user', (done) => {
      const user = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'password',
      };
      chai.request(app)
        .post('/register')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('message').eql('Account created successfully.');
          done();
        });
    });
  });


  //post login check
  describe('/POST login', () => {
    it('should login an existing user', (done) => {
      const user = {
        email: 'test@example.com',
        password: 'password',
      };
      chai.request(app)
        .post('/login')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('message').eql('Login successful.');
          expect(res.body).to.have.property('name');
          done();
        });
    });

  });

  // work on adding before() and after() hooks to handle setup and teardown
});

// Test for /register endpoint
describe('/POST register', () => {
    it('should not register a user without an email', (done) => {
        const user = {
            name: 'No Email User',
            password: 'password123',
        };
        chai.request(app)
            .post('/register')
            .send(user)
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.have.property('message').eql('All fields are required.');
                done();
            });
    });

    it('should not register a user with existing email', (done) => {
        const user = {
            name: 'Duplicate Email User',
            email: 'test@example.com',
            password: 'password123',
        };
        chai.request(app)
            .post('/register')
            .send(user)
            .end((err, res) => {
                // duplicate email handling
                expect(res).to.have.status(500); //adjustable according to laptop
                expect(res.body).to.have.property('message').eql('Error creating account.');
                done();
            });
    });

});
//This test was shown in previous lab 
// Testing for /login endpoint
describe('/POST login', () => {
    it('should not login with incorrect password', (done) => {
        const user = {
            email: 'test@example.com',
            password: 'wrongPassword',
        };
        chai.request(app)
            .post('/login')
            .send(user)
            .end((err, res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.have.property('message').eql('Invalid email or password.');
                done();
            });
    });
//testing for unregistered user 
    it('should not login an unregistered user', (done) => {
        const user = {
            email: 'unregistered@example.com',
            password: 'password123',
        };
        chai.request(app)
            .post('/login')
            .send(user)
            .end((err, res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.have.property('message').eql('Invalid email or password.');
                done();
            });
    });


//testing for event details
describe('Event Details', () => {
    const testEventId = 1;
    it('should retrieve details for a specific event', (done) => {
        chai.request(app)
            .get(`/api/events/${testEventId}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('id').eql(testEventId);
                expect(res.body).to.have.property('name');
                expect(res.body).to.have.property('description'); //testing if the program returns description of event
                expect(res.body).to.have.property('ticket number'); //testing if the program returns ticket numbers in event
                expect(res.body).to.have.property('artist performing'); //testing if the program returns artisit performing
                expect(res.body).to.have.property('location');
                done();
            });
    });

    it('should return an error for a non-existent event ID', (done) => {
        const nonExistentEventId = 9999; // testing for if event id does not exist
        chai.request(app)
            .get(`/api/events/${nonExistentEventId}`)
            .end((err, res) => {
                expect(res).to.have.status(404); //returning 404 for non-existing resources
                expect(res.body).to.have.property('message').eql('Event not found');
                done();
            });
    });


    //test for deleting an event 
    describe('DELETE /api/events/:eventId', () => {
        it('should delete an event', (done) => {
            const eventIdToDelete = 2; 
            chai.request(app)
                .delete(`/api/events/${eventIdToDelete}`)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').eql('Event deleted successfully');
                    // verifying that the event is no longer retrievable
                    done();
                });
        });
    });
}
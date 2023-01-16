import server from '../server/server'
import request from 'supertest';

describe('Application tests', () => {
  const testServer = server.server;
  describe('#getUsers tests', () => {
    test('#getUsers should return right statuscode', async () => {
      const res = await request(testServer).get('/users/');
      expect(res.statusCode).toBe(200);
    });

    test('#getUsers should return right statuscode if we call users endpoint without / in the end', async () => {
      const res = await request(testServer).get('/users');
      expect(res.statusCode).toBe(200);
    });
  
    test('#getUsers should return right header', async () => {
      const res = await request(testServer).get('/users/');
      expect(res.header['content-type']).toBe('application/json');
    });
  
    test('#getUsers should return right body', async () => {
      const res = await request(testServer).get('/users/');
      expect(res.body).toMatchObject([]);
    })
  });

  describe('#getSingleUser tests', () => {
    test('#getSingleUser should return right statuscode if id is invalid', async () => {
      const res = await request(testServer).get('/users/12');
      expect(res.statusCode).toBe(400);
    });

    test('#getSingleUser should return right statuscode if id is valid', async () => {
      const res = await request(testServer).get('/users/f4a73b03-2ad3-46e2-a456-c6c84061e189');
      expect(res.statusCode).toBe(404);
    });
  });

  describe('#Adding changing and deleting user tests', () => {
    let id: any;
    const user = { 
      id: '',
      username: 'Alex Merphy',
      age: 44,
      hobbies: ['killing bandits'],
    };
    test('#addUser should return right statuscode and data if user is created', async () => {
      
      const res = await request(testServer).post('/users/').send(user);
      id = res.body.id;
      expect(res.status).toBe(201);
    });

    test('#editUser should change user data', async () => {
      const res = await request(testServer).put(`/users/${id}`).send({...user, username: 'Seraphim'});
      expect(res.status).toBe(200);
      expect(res.body.username).toBe('Seraphim');
    });

    test('#deleteUser should delete user and return right status', async () => {
      const res = await request(testServer).delete(`/users/${id}`);
      expect(res.status).toBe(204);
    });
  });
})




    
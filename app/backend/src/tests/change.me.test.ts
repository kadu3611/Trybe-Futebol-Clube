import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response, Request } from 'express';

import User from '../database/models/1-User.models';
import Matches from '../database/models/2-Matches.model';
import { request, response } from 'express';

chai.use(chaiHttp);

const { expect } = chai;

const teamMock = {
  "id": 1,
  "teamName": "Avaí/Kindermann"
};

const loginMock = {
  email: "admin@admin.com",
  password: "secret_admin",
};

const matchesMock = [
  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
 45, 46, 47, 48
]

const matchesPostMock = {
  "homeTeam": 16,
  "homeTeamGoals": 2,
  "awayTeam": 8,
  "awayTeamGoals": 2,
  "inProgress": true,
}

describe('/login', () => {
  describe('POST', () => {
    it('Status 200', async () => {
      const response = await chai.request(app).post('/login').send({
        email: "admin@admin.com",
        password: "secret_admin"
      });
  
      expect(response.status).to.equal(200);
    })
    describe('POST', () => {

      beforeEach(() => {
        Sinon.stub(User, 'afterValidate').resolves({...loginMock})
      })

      })
      it('Retorna um token', async () => {
        const response = await chai.request(app).post('/login').send(loginMock);
        const [objectResponse] = Object.keys(response.body);
        expect(objectResponse).to.deep.equal('token');
      })
      
  });
  describe('/teams', () => {
    describe('All routes', () => {
      it('Status 200', async () => {
        const response = await chai.request(app).get('/teams').send();
        expect(response.status).to.equal(200);
      })
      it('Retorna o team com o id=1', async () => {
        const response = await chai.request(app).get('/teams/1').send();
        const objectResponse = response.body;
        expect(objectResponse).to.deep.equal(teamMock);
      })
      describe('/matches', () => {
        describe('All routes', () => {
          it('Status 200', async () => {
            const response = await chai.request(app).get('/matches').send();
            expect(response.status).to.equal(200);
          })
          it('Verifica se retorna todos os id', async () => {
            const response = await chai.request(app).get('/matches').send();
            const objectResponse: Matches[] = response.body;
            const arrayObjectResponse = Object.values(objectResponse.map((item) => item.id));
            
            expect(arrayObjectResponse).to.deep.equal(matchesMock);
          })
          it('Verifica se route /matches?inProgress=true retorna todos os inProgress = true', async () => {
            const response = await chai.request(app).get('/matches?inProgress=true').send();
            const objectResponse: Matches[] = response.body;
            const arrayObjectResponse = Object.values(objectResponse.map((item) => item.inProgress));
            const everyObjectResponse = arrayObjectResponse.every((elemento) => elemento);
            
            expect(everyObjectResponse).to.deep.equal(true);
          })
          it('Verifica se route /matches?inProgress=true retorna todos os inProgress = false', async () => {
            const response = await chai.request(app).get('/matches?inProgress=false').send();
            const objectResponse: Matches[] = response.body;
            const arrayObjectResponse = Object.values(objectResponse.map((item) => item.inProgress));
            const everyObjectResponse = arrayObjectResponse.every((elemento) => elemento);
            
            expect(everyObjectResponse).to.deep.equal(false);
          })
          it('Verifica se route /matches POST consegue adicionar sem um token valido', async () => {
            const response = await chai.request(app).post('/matches').send(matchesPostMock);
            const objectResponse = response.body;            
            expect(objectResponse).to.deep.equal({ message: 'Token must be a valid token' });
          })
          // it('Verifica se route /matches POST token Ok', async () => {
          //   const responseLogin = await chai.request(app).post('/login').send({
          //     email: "admin@admin.com",
          //     password: "secret_admin"
          //   });
          //   let { authorization } = Object(request.headers)
            
          //   authorization = Object.values(responseLogin.body);
          //   console.log(authorization,'authorization');
            
          //   const responseMatches = await chai.request(app).post('/matches').send(matchesPostMock);
            
          //   console.log(responseMatches.body);
          //   const objectResponse = Object.keys(responseMatches.body);            
          //   expect(objectResponse).to.deep.equal('id');
          // })
          // /matches/:id
        }); ///leaderboard/home'
        describe('/leaderboard/ => home and away', () => {
          describe('All routes', () => {
            it('Status 200', async () => {
              const response = await chai.request(app).get('/leaderboard/home').send();
              expect(response.status).to.equal(200);
            })
            it('Começa com o time Santos', async () => {
              const response = await chai.request(app).get('/leaderboard/home').send();
              const [objectResponse] = response.body;              
              expect(objectResponse.name).to.deep.equal('Santos');
            })
            it('Começa com o time Palmeiras', async () => {
              const response = await chai.request(app).get('/leaderboard/away').send();
              const [objectResponse] = response.body;              
              expect(objectResponse.name).to.deep.equal('Palmeiras');
            })
          })
        });
});


      // describe('POST', () => {
  
      //   beforeEach(() => {
      //     Sinon.stub(User, 'afterValidate').resolves({...mock})
      //   })
  
      //   })
      //   it('Retorna um token', async () => {
      //     const response = await chai.request(app).post('/login').send(mock);
      //     const [objectResponse] = Object.keys(response.body);
      //     expect(objectResponse).to.deep.equal('token');
      //   })
    });
  
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
});

});

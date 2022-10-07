import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import User from '../database/models/1-User.models';

chai.use(chaiHttp);

const { expect } = chai;

const mock = {
  email: "admin@admin.com",
  password: "secret_admin",
};

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
        Sinon.stub(User, 'afterValidate').resolves({...mock})
      })

      })
      it('Retorna um token', async () => {
        const response = await chai.request(app).post('/login').send(mock);
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

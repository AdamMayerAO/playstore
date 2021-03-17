const {expect} = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe ('GET, /apps', () => {
    it ("returns a list when Search is clicked", () =>{
        return supertest(app)
        .get('/apps')
        .query({sort:"", genre: 'Action' })
        .expect(200)
        .expect('Content-Type', /json/)
        .then (res =>{
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.lengthOf.at.least(1);
            expect(res.body).to.startWith("ROBLOX");
        });
    });
})

describe ('GET, /apps', () => {
    it ("returns a list when Search is clicked", () =>{
        return supertest(app)
        .get('/apps')
        .query({sort:"Rating", genre: 'Arcade' })
        .expect(200)
        .expect('Content-Type', /json/)
        .then (res =>{
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.lengthOf.at.least(1);
            expect(res.body).to.startWith("Angry Birds Rio");
        });
    });
})

describe ('GET, /apps', () => {
    it ("returns a list when Search is clicked", () =>{
        return supertest(app)
        .get('/apps')
        .query({sort:"App", genre: 'Strategy' })
        .expect(200)
        .expect('Content-Type', /json/)
        .then (res =>{
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.lengthOf.at.least(1);
            expect(res.body).to.startWith("Clash of Clans");
        });
    });
})
const request = require('supertest')

const server = require('../api/server.js')

describe('tests auth/register routes', () => {
    it('sends a 201', () => {
        return request(server).post('/api/auth/register')
        .send({username: "meghan", password: "pass"})
        .set('Accept', 'application/json')
        .then(res => {
            expect(res.status).toBe(201)
        })
    })
    it('returns JSON', () => {
        return request(server).post('/api/auth/register')
        .send({name: 'collin', password:"pass"})
        .set('Accept', 'application/json')
        .then(res => {
            expect(res.type).toMatch(/json/i)
        })
    })
})

describe("tests auth/login routes", () => {
    it('sends a 201', () => {
        return request(server).post('/api/auth/login')
        .send({username:"han", password: "pass"})
        .set('Accept', 'application/json')
        .then(res => {
            expect(res.status).toBe(200)
        })
    })
    it('returns JSON', () => {
        return request(server).post('/api/auth/login')
        .send({name: 'han', password:"pass"})
        .set('Accept', 'application/json')
        .then(res => {
            expect(res.type).toMatch(/json/i)
        })
    })
})
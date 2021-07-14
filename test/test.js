const express = require('express');
const chai = require('chai');
const request = require('supertest');

const app = express();

describe('GET Check API invocation', () => {
    it('should return a welcome string', () => {
        request(app)
            .get('/')
            .send({})
            .expect(200)
            .then((res) => {
                expect(res.body).to.be.eql('Welcome to the news and weather API');
            });
    });
});

describe('GET Fetch Weather Data', () => {
    it('should return the weather data for 5 days', () => {
        request(app)
            .get('/weather')
            .send({})
            .expect(200)
            .then((res) => {
                expect(res.body.unit).to.be.eql('metric');
                expect(res.body.location).to.be.eql('Faridabad');
                expect(res.body.count).to.be.eql(5);
                expect(res.body.data.length).to.be.eql(5);
            });
    });
});

describe('GET Fetch News Data', () => {
    it('should return the news data', () => {
        request(app)
            .get('/news')
            .send({ "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNjI2MjEwOTk3LCJleHAiOjE2MjYyMTEwNDd9.ZA4N9QstN0jczJdueP1AoecTLgRY5HIuyBurBm23j9Y" })
            .expect(200)
            .then((res) => {
                expect(res.body.count).to.be.eql(10);
            });
    });
});

describe('POST Login Request', () => {
    it('should return token', () => {
        request(app)
            .post('/login')
            .send({
                "username": "testuser",
                "password": "password1"
            })
            .expect(200)
            .then((res) => {
            });
    });
});

describe('POST Signup Request', () => {
    it('should return token', () => {
        request(app)
            .post('/signup')
            .send({
                "username": "testuser",
                "password": "password1",
                "email": "test2@test.com"
            })
            .expect(200)
            .then((res) => {
            });
    });
});

describe('POST Logout Request', () => {
    it('should return logout message', () => {
        request(app)
            .post('/signup')
            .send({})
            .expect(200)
            .then((res) => {
                expect(res.body.message).to.be.eql('Logged out successfully.');
            });
    });
});
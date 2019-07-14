const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

chai.use(chaiHttp);

const test = require('firebase-functions-test')();

describe('Cloud functions testing', () => {
	let functions;
	before(() => {
		functions = require('../index');
	});

	after(() => {
		test.cleanup();
	});

	describe('Test 1', () => {
		it('It should return a message', () => {
			return chai
				.request(functions.helloWorld)
				.get('/')
				.then(res => {
					return assert.equal(
						res.body.message,
						'Welcome to the Cloud Functions API',
						'I should have worked'
					);
				})
				.catch(error => {
					throw error;
				});
		});
	});
});

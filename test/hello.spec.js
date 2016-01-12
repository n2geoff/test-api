var request = require("supertest");

describe("loading express", function() {
	var server;

	before(function() {
		server = require("../server");
	});

	after(function(done) {
		server.close(done);
	});

	it("responds to /hello", function(done) {
		request(server)
			.get("/hello")
			.expect(200, done);
	});

	it("fails on", function(done) {
		request(server)
			.get("/foo/bar")
			.expect(404, done);
	});
})
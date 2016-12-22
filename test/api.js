/* jshint esversion:6 */
const supertest = require('supertest');
const app = require('../app.js');

function testDateString(dateString, unix, natural, done) {
    supertest(app)
        .get("/" + dateString)
        .expect("content-type", /json/)
        .expect(200)
        .expect((res) => {
            if (res.body.unix !== unix) {
                throw new Error("Incorrect unix seconds: " + res.body.unix +
                                ", expected: " + unix);
            }
            if (res.body.natural !== natural) {
                throw new Error("Incorrect natural representation:" + res.body.natural +
                                ", expected: " + natural);
            }
            
        })
        .end(done);
}

describe("API response", () => {
    it("returns the correct time for December 15, 2015", (done) => {
        testDateString("December 15, 2015", 1450137600, "December 15, 2015", done);
    });

    it("returns 0 for January 1, 1970", (done) => {
        testDateString("January 1, 1970", 0, "January 1, 1970", done);
    });

    it("returns the correct time for 1450137600", (done) => {
        testDateString("1450137600", 1450137600, "December 15, 2015", done);
    });

    it("returns the correct time for 1450137000", (done) => {
        testDateString("1450137000", 1450137000, "December 14, 2015", done);
    });

    it("returns null for an invalid string", (done) => {
        testDateString("tuxitop", null, null, done);
    });
});

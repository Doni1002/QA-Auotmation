const { assert } = require("chai");

const request = require ("supertest")("https://reqres.in")
const expect = require ("chai").expect;

describe("Post User Regres", function()
{
    it("Success Register", async function()
    {
        const response = await request
        .post("/api/users")
        .send({
            name: "Doni",
            job: "QA Automation"
        });
        expect(response.body.name).to.eql('Doni')
        expect(response.body.job).to.eql('QA Automation')
    })
})

describe("Get All Users", function()
{
    it("Success Get All Users", async function()
    {
        const response = request
        .get("/api/users?page=2")
       
        expect(200)
    })
})

describe("Get Single User", function()
{
    it("Success Get Single Users", async function()
    {
        const id = request
        .get("/api/users/2")
       
        expect(200)
    })
})

describe("Single User Not Found", function()
{
    it("Success Show Notif Single Users Not Found", async function()
    {
        const id = request
        .get("/api/users/2")
       
        expect(404)
        assert.isOk('user not found');
    })
})

describe("Put User Update", function()
{
    it("Success Update", async function()
    {
        const response = await request
        .put("/api/users/2")
        .send({
            name: "morpheus",
            job: "zion resident"
        });
        expect(200)
        expect(response.body.name).to.eql('morpheus')
        expect(response.body.job).to.eql('zion resident')
    })
})
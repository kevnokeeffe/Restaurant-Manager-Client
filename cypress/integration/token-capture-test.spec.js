/// <reference types="cypress" />
let accessKey;

describe("Token", ()=>{
it('Logs in using UI', () => {
    cy.visit('/login')
    // enter valid username and password
    cy.get("input[data-test=email]").type("kevokeeffe@gmail.com");
    cy.get("input[data-test=password]").type("123456");
    cy.get("button[type=submit]").click();
});

it('Captures the token', () => {
    // check login and capture token
    cy.location(()=>{
            const userString = window.localStorage.getItem('user')
            const user = JSON.parse(userString)
            expect(user).to.have.keys([
                'id',
                'email',
                'fName',
                'lName',
                'token',
            ])
            expect(user.token).to.be.a('string')
            accessKey = user.token
            done();
    });
    cy.contains('.nav-item', 'Logout').click()
});
});
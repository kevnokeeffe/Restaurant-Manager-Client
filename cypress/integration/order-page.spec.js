let accessKey;
describe("Order", ()=>{
    before(() => {
        cy.visit("http://localhost:8080/login");
        if (cy.get(".h4User")
            .should("contain", "Welcome, User.")) {
        } else {
            cy.contains('.nav-item', 'Logout').click()
        }
    });


describe("Login", ()=> {
    it('Logs in using UI', () => {
        cy.visit('/login')
        // enter valid username and password
        cy.get("input[data-test=email]").type("kevokeeffe@gmail.com");
        cy.get("input[data-test=password]").type("123456");
        cy.get("button[type=submit]").click();
        cy.wait(1000)
    });
});
    describe("Token", ()=> {
        it('Captures the token', () => {
            // check login and capture token
            cy.location(() => {
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
                console.log(accessKey)
                done();
            });
        });
        it('Adds token to request', () => {
            cy.server({
                onAnyRequest: (route,  proxy) => {
                    proxy.xhr.setRequestHeader('token',  accessKey)
                }
            })
        });

    });
    describe("Orders",()=>{
    it("Navigates to the orders page", ()=>{
        cy.contains('.nav-item', 'Order').click()
    });
    it("", ()=>{

    });
    });


});
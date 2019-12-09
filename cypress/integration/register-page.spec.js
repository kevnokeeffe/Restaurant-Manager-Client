const apiURL = "https://restaurant-manager-prod-app.herokuapp.com/api/user/register"
const email = Math.floor((Math.random() * 100000000) + 100000000);
try{
    cy.contains('nav-link', 'Logout').click()
}catch{
    console.log("logged out")
}

describe("Register page", () => {
    before(() => {
        cy.visit("http://localhost:8080/register");
    });

    describe("Body of Page", () => {
        it("Shows a header", () => {
            cy.get(".h1")
                .eq(0)
                .should("contain", "Register");
        });

        describe("Creates a user account",()=>{
        it("should create an account", () =>{
            cy.get("input[data-test=fName]").type("Test");
            cy.get("input[data-test=lName]").type("User");
            cy.get("input[data-test=email]").type(`${email}@gmail.com`);
            cy.get("input[data-test=password]").type("123456");
            cy.get("button[type=submit]").click();
            cy.wait(500)
            cy.contains('.nav-item', 'Logout').click()
            });
            it("should try create an account with an invalid email", () =>{
                cy.visit("http://localhost:8080/register")
                cy.get("input[data-test=fName]").type("Test");
                cy.get("input[data-test=lName]").type("User");
                cy.get("input[data-test=email]").type(`${email}`);
                cy.get("input[data-test=password]").type("123");
                cy.get("button[type=submit]").click();
                cy.wait(500)
                cy.visit("http://localhost:8080/");
            });
        });
    });
});
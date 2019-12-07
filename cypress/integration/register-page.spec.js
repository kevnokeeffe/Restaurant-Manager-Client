const apiURL = "https://restaurant-manager-prod-app.herokuapp.com/api/user/register"

describe("Register page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080/register");
        if (cy.get(".h4User")
            .should("contain", "Welcome, User.")) {
        } else {
            cy.contains('nav-link', 'Logout').click()
        }
    });

    describe("Body of Page", () => {
        it("Shows a header", () => {
            cy.get(".h1")
                .eq(0)
                .should("contain", "Register");
        });
        describe("Creates a user account",()=>{
        it("should create an account", () =>{
            cy.get("input[data-test=fName]").type("Brian");
            cy.get("input[data-test=lName]").type("Lanigan");
            cy.get("input[data-test=email]").type("brianlanigan@gmail.com");
            cy.get("input[data-test=password]").type("123456");
            cy.get("button[type=submit]").click();
            });
        });
    });
});
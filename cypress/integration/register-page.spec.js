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
    describe("Navigation bar", () => {
        it("Shows a header", () => {
            cy.get(".navbar")
                .within(()=>{
                    cy.get(".navbar-brand").should("contain", "Restaurant Manager")
                        .eq(0)
                    cy.get(".navbar-toggler")
                        .eq(0)
                });
        });

        it("Shows the required links", () => {
            cy.get(".collapse")
                .eq(0)
                .within(() => {
                    cy.get(".navbar-nav")
                        .eq(0)
                        .within(() => {
                            cy.get(".nav-item")
                                .eq(0)
                                .should("contain", "Home");
                            cy.get(".nav-item")
                                .eq(1)
                                .should("contain", "Register");
                            cy.get(".nav-item")
                                .eq(2)
                                .should("contain", "Login");
                            cy.get(".h4User")
                                .eq(0)
                                .should("contain", "Welcome, User.");
                        });
                });
        });
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

    describe("Footer", () => {
        it("Shows the footers elements", () => {
            cy.get(".footer")
                .eq(0)
                .within(() => {
                    cy.get(".Ft")
                        .eq(0)
                        .should("contain", "2019 Kevin O'Keeffe");
                    cy.get(".Ft")
                        .eq(1)
                        .should("contain", "Private");
                    cy.get(".Ft")
                        .eq(2)
                        .should("contain", "Terms of Service");
                });
        });
    });
});
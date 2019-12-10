const url = "https://restaurant-manager-prod-app.herokuapp.com/"
let accessKey;
describe("Testing the logged in home page", () => {
    before(() => {
        cy.visit("http://localhost:8080/login");
    });

    it("should show a login header", () => {
            cy.get(".h1")
                .eq(0)
                .should("contain", "Login");
        });
    it("should login a user", () =>{
        cy.get("input[data-test=email]").type("kevokeeffe@gmail.com");
        cy.get("input[data-test=password]").type("123456");
        cy.get("button[type=submit]").click();
        cy.wait(3000)
    });




        it("should show the nav-bar header", () => {
            cy.get(".navbar")
                .within(()=>{
                    cy.get(".navbar-brand").should("contain", "Restaurant Manager")
                        .eq(0)
                    cy.get(".navbar-toggler")
                        .eq(0)
                });
        });

        it("should show the required links", () => {
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
                                .should("contain", "All Orders");
                            cy.get(".nav-item")
                                .eq(2)
                                .should("contain", "Your Orders");
                            cy.get(".nav-item")
                                .eq(3)
                                .should("contain", "Logout");
                            cy.get(".h4User")
                                .eq(0)
                                .should("contain", "Welcome, Kevin O'Keeffe");
                        });
                });
        });



        it("should show the jumbotrons contents", () => {
            cy.get(".jumbotron")
                .eq(0)
                .within(() => {
                    cy.get(".container")
                        .eq(0)
                        .within(() => {
                            cy.get(".display-4").should("contain", "Restaurant Manager Client")
                                .eq(0);
                            cy.get(".lead").should("contain", "This is a a restaurant manager application, built with MongoDB, ExpressJS, VueJS and NodeJS technologies.")
                                .eq(0);
                            cy.get(".dot")
                                .eq(0);
                            cy.get(".line").should("contain", "The options below will help you to begin managing your restaurant.")
                                .eq(0);
                            cy.get(".btn").should("contain", "View All Orders")
                                .eq(0);
                            cy.get(".btn").should("contain", "View Your Orders")
                                .eq(1);
                            cy.get(".btn").should("contain", "Place an Order")
                                .eq(2);
                        });
                });
        });

        it("should test the jumbotrons buttons", () => {
            cy.get(".btn").contains('View All Orders').click();
            cy.get(".nav-item")
                .eq(0)
                .should("contain", "Home").click();
            cy.get(".btn").contains('View Your Orders').click();
            cy.get(".nav-item")
                .eq(0)
                .should("contain", "Home").click();
            cy.get(".btn").contains('Place an Order').click();
            cy.get(".nav-item")
                .eq(0)
                .should("contain", "Home").click();
        });
        it("should logout",()=>{
        cy.contains('.nav-item', 'Logout').click()
    });
});


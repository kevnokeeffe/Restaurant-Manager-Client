describe("Home page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080/");
        cy.wait(3000);
        if(cy.get(".h4User")
            .should("contain", "Welcome, User!")){
        } else{cy.contains('a', 'Logout').click()}
    });

    describe("Jumbotron", () => {
        it("Shows the jumbotrons contents", () => {
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
                            cy.get(".line").should("contain", "Login or register to begin using this application.")
                                .eq(0);
                            cy.get(".btn").should("contain", "Login")
                                .eq(0);
                            cy.get(".btn").should("contain", "Register")
                                .eq(1);
                        });
                });
        });
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
                                .should("contain", "Welcome, User!");
                            });
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
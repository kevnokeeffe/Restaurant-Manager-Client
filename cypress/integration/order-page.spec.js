let accessKey;
const apiURL = "https://restaurant-manager-prod-app.herokuapp.com/order"
describe("Orders", ()=>{
    it('Logs in using UI', () => {
        cy.visit('/login')
        // enter valid username and password
        cy.get("input[data-test=email]").type("kevokeeffe@gmail.com");
        cy.get("input[data-test=password]").type("123456");
        cy.get("button[type=submit]").click()
    });



    it("navigates to the orders page", ()=>{
        cy.contains('.nav-item', 'Order').click()
    });

    it("shows a header", () => {
        cy.get(".vue-title")
            .eq(0)
            .should("contain", "List of Orders");
    });

    it("shows the jumbotrons contents", () => {
        cy.get(".card")
            .eq(0)
            .within(() => {
                cy.get(".card-body")
                    .eq(0)
                    .within(() => {
                        cy.get(".table")
                            .eq(0)
                            .within(() => {
                                cy.get(".btn").should("contain", "Delete")
                                    .eq(0);
                                cy.get(".btn").should("contain", "Edit")
                                    .eq(1);
                            });
                    });
            });
        cy.contains('.nav-item', 'Logout').click()
    });
});



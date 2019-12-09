let accessKey;
const apiURL = "https://restaurant-manager-prod-app.herokuapp.com/order"
describe("Order", ()=>{
    it('Logs in using UI', () => {
        cy.visit('/login')
        // enter valid username and password
        cy.get("input[data-test=email]").type("kevokeeffe@gmail.com");
        cy.get("input[data-test=password]").type("123456");
        cy.get("button[type=submit]").click()
    });


    describe("Orders",()=>{
    it("Navigates to the orders page", ()=>{
        cy.contains('.nav-item', 'Order').click()
    });

    it("Shows a header", () => {
        cy.get(".vue-title")
            .eq(0)
            .should("contain", "List of Orders");
    });

    it("Shows the jumbotrons contents", () => {
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
        cy.get("#pao").should("contain", "Place an Order").click()
    });

    it("Should add an order", ()=>{
        cy.get(".vue-title")
            .eq(0)
            .should("contain", "Create Order");
        cy.get(".form-label")
            .should("contain", "Choose Starter")
            .eq(0);
        cy.get("#starter").select("Soup")
            .eq(0);
        cy.get(".form-label")
            .should("contain", "Choose a Main Course")
            .eq(1);
        cy.get("#main").select("Chicken")
            .eq(0)
        cy.get(".form-label")
            .should("contain", "Choose a Dessert")
            .eq(2);
        cy.get("#dessert").select("Cheese Cake")
            .eq(0)
        cy.get(".form-label")
            .should("contain", "Choose a Drink")
            .eq(3);
        cy.get("#drink").select("Coke")
            .eq(0)
        cy.get(".form-group")
            .contains("Message")
            .type("Extra Gravy");
    });
        it("Place order", ()=> {
            cy.wait(1000)
            cy.get(".btn").should("contain", "Submit").click()
            cy.contains('.nav-item', 'Logout').click()
        });
    });


});
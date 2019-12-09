describe("Add an Order", ()=> {
    it('logs in using UI, and adds a new order', () => {
        cy.visit('/login')
        // enter valid username and password
        cy.get("input[data-test=email]").type("kevokeeffe@gmail.com");
        cy.get("input[data-test=password]").type("123456");
        cy.get("button[type=submit]").click()
        cy.contains('.btn', 'Place an Order').click()
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
        cy.wait(1000)
        cy.get(".btn").should("contain", "Submit").click()
        cy.contains('.nav-item', 'Logout').click()
    });
});
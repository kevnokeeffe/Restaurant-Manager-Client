describe("Testing editing an order",()=> {
    it('should login using the UI and edit an order', () => {
        cy.visit('/login')
        // enter valid username and password
        cy.get("input[data-test=email]").type("kevokeeffe@gmail.com");
        cy.get("input[data-test=password]").type("123456");
        cy.get("button[type=submit]").click()
        cy.contains('.nav-item', 'Orders').click()
        cy.wait(1000)
        cy.get("tbody")
            .find("tr")
            .eq(1)
            .find("td")
            .eq(8)
            .find(".btn")
            .click();
          cy.get(".vue-title")
            .eq(0)
            .should("contain", "Edit Order");
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
        cy.get("#inputMessage").clear();
        cy.get(".form-group")
            .contains("Message")
            .type("Really really hot with extra Gravy");
        cy.get(".btn").should("contain", "Submit").click()
        cy.get(".typo__p").eq(0).should("contain","Processing...");
        cy.wait(1000)
        cy.contains('.nav-item', 'Logout').click()
    });
});
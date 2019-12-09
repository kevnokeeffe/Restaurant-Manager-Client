describe("Order", ()=> {
    const options = {
        method: 'POST',
        url: 'https://restaurant-manager-prod-app.herokuapp.com/api/user/login',

        body: {
            email: 'kevokeeffe@gmail.com',
            password: '123456'
        }
    };

    describe("Check contents",()=>{
        it('Logs in using UI', () => {
            cy.visit('/login')
            // enter valid username and password
            cy.get("input[data-test=email]").type("kevokeeffe@gmail.com");
            cy.get("input[data-test=password]").type("123456");
            cy.get("button[type=submit]").click()
            cy.contains('.nav-item', 'Orders').click()
        });

        it("displays first 10 orders only", () => {
            cy.get("tbody")
                .find("tr")
                .should("have.length", 10);
            cy.get("tbody")
                .find("tr")
                .its("length")
                .should("be.lt", 11);
            cy.get("tbody")
                .find("tr")
                .eq(9)
                .find("td")
                .eq(5)
                .should("contain", 25.5); //its('length').should('be.lt',11)
        });

        it("starts at the 11th order on the next page", () => {
            cy.get("ul.pagination")
                .find("li")
                .eq(2)
                .next()
                .click(); // 2nd page link
            cy.get("tbody")
                .find("tr")
                .eq(0)
                .find("td")
                .eq(5)
                .should("contain", 25.5); //its('length').should('be.lt',11)
        });
    });
        describe("Delete an order",()=>{
            it("tests the delete operator", () => {
                cy.get("ul.pagination")
                    .find("li")
                    .eq(1)
                    .next()
                    .click();
                cy.get("tbody")
                    .find("tr")
                    .eq(1)
                    .find("td")
                    .eq(7)
                    .find(".btn")
                    .click();
                // Click confirmation button
                cy.get("button")
                    .contains("Cancel")
                    .click()
                cy.get("button")
                    .contains("OK")
                    .click()
                cy.get("tbody")
                    .find("tr")
                    .should("have.length", 10);
            });

    });

        describe("Edit an order",()=>{
            it("select order to edit",()=>{
            cy.get("tbody")
                .find("tr")
                .eq(1)
                .find("td")
                .eq(8)
                .find(".btn")
                .click();
        });
            it("edit the order", ()=>{
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
                cy.get(".form-group")
                    .contains("Message")
                    .type("Extra Gravy");
            });
            it("submit edited order", ()=> {
                cy.get(".btn").should("contain", "Submit").click()
                cy.contains('.nav-item', 'Logout').click()
            });
        });

});

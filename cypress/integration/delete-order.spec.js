describe("Testing delete an order",()=> {
    it("should test the delete operator", () => {
            cy.visit('/login')
            // enter valid username and password
            cy.get("input[data-test=email]").type("kevokeeffe@gmail.com");
            cy.get("input[data-test=password]").type("123456");
            cy.get("button[type=submit]").click()
            cy.contains('.nav-item', 'All Orders').click()
            cy.wait(1000)

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
        cy.wait(500)
        // Click confirmation button
        cy.get("button")
            .contains("Cancel")
            .click()
        cy.wait(500)
        cy.get("button")
            .contains("OK")
            .click()
        cy.wait(500)
        cy.get("tbody")
            .find("tr")
            .eq(1)
            .find("td")
            .eq(7)
            .find(".btn")
            .click();
        cy.wait(500)
        // Click confirmation button
        cy.get("button")
            .contains("OK Delete it")
            .click()
        cy.wait(500)
        cy.get("button")
            .contains("OK")
            .click()
        cy.wait(500)

        cy.get("tbody")
            .find("tr")
            .should("have.length", 10);
        cy.contains('.nav-item', 'Logout').click()
    });
});
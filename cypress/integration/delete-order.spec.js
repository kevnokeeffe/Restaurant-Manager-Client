describe("Delete an order",()=> {
    it("tests the delete operator", () => {
            cy.visit('/login')
            // enter valid username and password
            cy.get("input[data-test=email]").type("kevokeeffe@gmail.com");
            cy.get("input[data-test=password]").type("123456");
            cy.get("button[type=submit]").click()
            cy.contains('.nav-item', 'Orders').click()
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
        // Click confirmation button
        cy.get("button")
            .contains("Cancel")
            .click()
        cy.get("button")
            .contains("OK")
            .click()
        cy.get("tbody")
            .find("tr")
            .eq(1)
            .find("td")
            .eq(7)
            .find(".btn")
            .click();
        // Click confirmation button
        cy.get("button")
            .contains("OK Delete it")
            .click()
        cy.wait(1000)
        cy.get("button")
            .contains("OK")
            .click()

        cy.get("tbody")
            .find("tr")
            .should("have.length", 10);
        cy.contains('.nav-item', 'Logout').click()
    });
});
describe("Testing user's orders page",()=>{
    it('should login using the UI', () => {
        cy.visit('/login');
        // enter valid username and password
        cy.get("input[data-test=email]").type("kevokeeffe@gmail.com");
        cy.get("input[data-test=password]").type("123456");
        cy.get("button[type=submit]").click();
        cy.contains('.nav-item', "Kevin's Orders").click();
        cy.wait(1000)
    });

    it('should find a heading', () => {
        cy.get(".vue-title")
            .eq(0)
            .should("contain", "Kevin's Orders");
    });
    it("should display the first 10 orders only", () => {
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

    it("should start at the 11th order on the next page", () => {
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
    it('should logout', () => {
        cy.contains('.nav-item', 'Logout').click()
    });
});

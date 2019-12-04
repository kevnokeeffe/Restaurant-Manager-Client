describe("Register page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080/register");
        if (cy.get(".h4User")
            .should("contain", "Welcome, User!")) {
        } else {
            cy.contains('a', 'Logout').click()
        }
    });
});
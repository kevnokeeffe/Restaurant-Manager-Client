describe("Testing the validity of the route guards", () => {
  it("should redirect you to the login page", () => {
    cy.visit("/order");
    cy.wait(250);
    cy.visit("/order/user");
    cy.wait(250);
    cy.visit("/order/edit");
    cy.wait(250);
    cy.visit("/order/new");
    cy.wait(250);
  });

  it("should redirect you to the home page", () => {
    cy.visit("/login");
    cy.get("input[data-test=email]").type("kevokeeffe@gmail.com");
    cy.get("input[data-test=password]").type("123456");
    cy.get("button[type=submit]").click();
    cy.contains(".nav-item", "Home").click();
    cy.wait(250);
    cy.visit("/register");
    cy.wait(250);
    cy.visit("/login");
    cy.wait(250);
  });
});

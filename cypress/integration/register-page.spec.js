const apiURL =
  "https://restaurant-manager-prod-app.herokuapp.com/api/user/register";
const email = Math.floor(Math.random() * 100000000 + 100000000);

describe("Testing the register page", () => {
  before(() => {
    cy.visit("http://localhost:8080/register");
  });

  it("should show the register header", () => {
    cy.get(".h1")
      .eq(0)
      .should("contain", "Register");
  });

  it("should create a valid account", () => {
    cy.get("input[data-test=fName]").type("Test");
    cy.get("input[data-test=lName]").type("User");
    cy.get("input[data-test=email]").type(`${email}@gmail.com`);
    cy.get("input[data-test=password]").type("123456");
    cy.get("button[type=submit]").click();
    cy.wait(500);
    cy.contains(".nav-item", "Logout").click();
  });
  it("should try create an account with an invalid email", () => {
    cy.visit("http://localhost:8080/register");
    cy.get("input[data-test=fName]").type("Test");
    cy.get("input[data-test=lName]").type("User");
    cy.get("input[data-test=email]").type(`${email}`);
    cy.get("input[data-test=password]").type("123");
    cy.get("button[type=submit]").click();
    cy.wait(500);
  });
  it("should try create an account with an invalid password", () => {
    cy.get("input[data-test=fName]").clear();
    cy.get("input[data-test=lName]").clear();
    cy.get("input[data-test=email]").clear();
    cy.get("input[data-test=password]").clear();
    cy.get("input[data-test=fName]").type("Test");
    cy.get("input[data-test=lName]").type("User");
    cy.get("input[data-test=email]").type(`${email}@gmail.com`);
    cy.get("input[data-test=password]").type("123");
    cy.get("button[type=submit]").click();
    cy.wait(500);
    cy.get(".typo__p")
      .eq(0)
      .should("contain", "Please Enter Valid Details.");
  });

  it("should navigate back to the home page", () => {
    cy.get("input[data-test=fName]").clear();
    cy.get("input[data-test=lName]").clear();
    cy.get("input[data-test=email]").clear();
    cy.get("input[data-test=password]").clear();
    cy.contains(".nav-item", "Home").click();
  });
});

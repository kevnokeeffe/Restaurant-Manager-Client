const apiURL = "https://restaurant-manager-prod-app.herokuapp.com/api/user/register";

describe("Testing the login page", () => {
    before(() => {
        cy.visit("http://localhost:8080/login");
    });

        it("should show the login header", () => {
            cy.get(".h1")
                .eq(0)
                .should("contain", "Login");
        });

        it("should login a user", () =>{
                cy.get("#emailLabel").eq(0).should("contain","Email address");
                cy.get("input[data-test=email]").type("kevokeeffe@gmail.com");
                cy.get("#emailHelp").eq(0).should("contain","We'll never share your email with anyone else.");
                cy.get("#passwordLabel").eq(0).should("contain","Password");
                cy.get("input[data-test=password]").type("123456");
                cy.get("button[type=submit]").click();
            cy.contains('.nav-item', 'Logout').click()
        });

        it("should try log in a user with an invalid email", () =>{
            cy.contains('.nav-item', 'Login').click()
                cy.get("#emailLabel").eq(0).should("contain","Email address");
                cy.get("input[data-test=email]").type("kevokeeffe");
                cy.get("#emailHelp").eq(0).should("contain","We'll never share your email with anyone else.");
                cy.get("#passwordLabel").eq(0).should("contain","Password");
                cy.get("input[data-test=password]").type("123456");
                cy.get("button[type=submit]").click();
        });

    it("should try log in a user with an invalid password", () =>{
        cy.contains('.nav-item', 'Login').click()
        cy.get("#emailLabel").eq(0).should("contain","Email address");
        cy.get("input[data-test=email]").clear()
        cy.get("input[data-test=email]").type("kevokeeffe@gmail.com");
        cy.get("#emailHelp").eq(0).should("contain","We'll never share your email with anyone else.");
        cy.get("#passwordLabel").eq(0).should("contain","Password");
        cy.get("input[data-test=password]").clear()
        cy.get("input[data-test=password]").type("123");
        cy.get("button[type=submit]").click();
        cy.wait(500)
        cy.get(".typo__p").eq(0).should("contain","Please Enter Correct Details.")
    });

    it("should navigate back to the home page",()=>{
        cy.get("input[data-test=email]").clear()
        cy.get("input[data-test=password]").clear()
        cy.contains('.nav-item', 'Home').click()
    });
});
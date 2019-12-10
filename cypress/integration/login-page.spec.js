const apiURL = "https://restaurant-manager-prod-app.herokuapp.com/api/user/register";

describe("Login page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080/login");
        if (cy.get(".h4User")
            .should("contain", "Welcome, User.")) {
        } else {
            cy.contains('.nav-item', 'Logout').click()
        }
    });


    describe("Body of Page", () => {
        it("Shows a header", () => {
            cy.get(".h1")
                .eq(0)
                .should("contain", "Login");
        });
        describe("Login",()=>{
            it("should log in a user", () =>{
                cy.get("#emailLabel").eq(0).should("contain","Email address");
                cy.get("input[data-test=email]").type("kevokeeffe@gmail.com");
                cy.get("#emailHelp").eq(0).should("contain","We'll never share your email with anyone else.");
                cy.get("#passwordLabel").eq(0).should("contain","Password");
                cy.get("input[data-test=password]").type("123456");
                cy.get("button[type=submit]").click();
            });
        });
    });
    });
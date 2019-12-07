const apiURL = "https://restaurant-manager-prod-app.herokuapp.com/api/user/register"

describe("Login page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080/login");
        try{
            cy.contains('nav-link', 'Logout').click()
        }catch{
            console.log("logged out")
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
                cy.get("input[data-test=email]").type("kevokeeffe@gmail.com");
                cy.get("input[data-test=password]").type("123456");
                cy.get("button[type=submit]").click();
            });
        });
    });
    });
// const apiURL = "https://restaurant-manager-prod-app.herokuapp.com/";
// let order = {billId:"1001", userId:"5de128050c31e534203a015f", starter: "Chicken Wings", main: "Beef", desert: "Cheesecake", drink: "Coke", price: 25, message: "Best wishes" }
// let x = 1;
// describe("Manage Orders page", () => {
//     it('adds 20 orders', () => {
//         cy.visit('/login')
//         // enter valid username and password
//         cy.get("input[data-test=email]").type("kevokeeffe@gmail.com");
//         cy.get("input[data-test=password]").type("123456");
//         cy.get("button[type=submit]").click()
//         cy.wait(5000)
//         for(x=1; x <=10; x++){
//             cy.request("POST", apiURL+'/order/add', order);
//         }
         // cy.fixture("orders").then(orders => {
         //
         //    orders.forEach(order => {
         //         cy.request("POST", apiURL, order);
         //     });
         // });
//     });
// });
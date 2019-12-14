# Assignment 2 - Agile Software Practice.

Name: Kevin O'Keeffe

## Client UI.

![Home](./img/Home.png)
>>This is the default home page when a user is logged out. Your options are to register or login. There is a short description of what the web app is about.

![Register](./img/Register.png)
This is the Rregister page. Where a user can sign up.

![Login](./img/Login.png)
This is the login page where the user can login with valid credentials.

![Login Home](./img/HomeLoggedIn.png)
This is the home page the user is presented with when the user is logged in.

![All Orders](./img/AllOrders.png)
This is the all orders page where all the orders from all useres on the database are shown.

![User Orders](./img/UserOrders.png)
This is the page where all the orders for the specif user logged in are shown.

![Create Order](./img/CreateOrder.png)
This page lets the user add an order to the database.

![Edit Order](./img/EditOrder.png)
This page lets the user edit the selected order on the database.


## E2E/Cypress testing.

- Tests execution is being recorded and uploaded to cypress.io.
- Authentication tests, including route guard.
- Selector not covered in class: 'clear()'.

## Web API CI.

GitLab Pages URL of the coverage report for the Web API tests.

https://kevnok.gitlab.com/restaurant-manager-4.0/coverage/lcov-report/

## GitLab CI.

- Deployment of client app to firebase hosting and deployment to surge.
- Uploading video results of Cypress test execution to a cypress.io dashboard.
- Using Cypress Docker image that comes with necessary dependencies to run cypress test in a CI environment.

Stageing Client: [Restaurant Manager Staging Site](http://cool-shake.surge.sh/).

Staging API: [Restaurant Manager API](https://dashboard.heroku.com/apps/restaurant-manager-staging-app).

Production Client: [Restaurant Manager Site](https://restaurantmanagerclient.web.app/).

Production API: [Restaurant Manager API](https://dashboard.heroku.com/apps/restaurant-manager-prod-app).

Client Gitlab Repo: [Restaurant Manager Client](https://gitlab.com/kevnok/restaurant-manager-client-side).

API Gitlab Repo: [Restaurant Manager API](https://gitlab.com/kevnok/restaurant-manager-4.0).

Cypress Dashboard URL: [Cyrpess Recordings](https://dashboard.cypress.io/projects/apx4gn/runs).


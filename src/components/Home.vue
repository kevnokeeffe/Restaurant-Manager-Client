<template>
  <div class="jumbotron jumbotron-fluid custom-bg-dark">
    <div class="container">
      <h1 class="display-4 ml-4 mr-4">Restaurant Manager Client</h1>
      <p class="lead align-content-center ml-4 mr-4">This is a a restaurant manager application, built with MongoDB, ExpressJS, VueJS and NodeJS technologies.</p>
      <hr class="dot my-4">
      <p v-if="$store.state.isLoggedIn" class="line ml-4 mr-4">The options below will help you to begin managing your restaurant.</p>
      <p v-if="!$store.state.isLoggedIn" class="line ml-4 mr-4">Login or register to begin using this application.</p>
      <router-link v-if="$store.state.isLoggedIn" class="btn btn-success btn-lg display:inline ml-4" to="/order">View Orders</router-link>
      <router-link v-if="$store.state.isLoggedIn" class="btn btn-success btn-lg display:inline ml-4" to="/bill">View Bills</router-link>
      <router-link v-if="$store.state.isLoggedIn" class="btn btn-success btn-lg display:inline ml-4" to="/order/new">Place an Order</router-link>
      <router-link v-if="!$store.state.isLoggedIn" class="btn btn-success btn-lg display:inline ml-4" to="/login">Login</router-link>
      <router-link v-if="!$store.state.isLoggedIn" class="btn btn-success btn-lg display:inline ml-4" to="/register">Register</router-link>
    </div>
  </div>
</template>

<style>
  .btn-success{
    background-color: #4fc08d !important;
  }

  .btn-success:hover{
    background-color: #3da978;
  }
</style>
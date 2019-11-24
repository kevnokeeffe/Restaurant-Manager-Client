<template>
  <div class="jumbotron jumbotron-fluid custom-bg-dark">
    <div class="container">
      <h1 class="display-4">Restaurant Manager Client</h1>
      <p class="lead">This is a a restaurant manager application, built with MongoDB, ExpressJS, VueJS and NodeJS technologies.</p>
      <hr class="my-4">
      <p v-if="$store.state.isLoggedIn">Click below to begin managing your restaurant. </p>
      <router-link v-if="$store.state.isLoggedIn" class="btn btn-success btn-lg display:inline ml-4" to="/order">View Orders</router-link>
      <router-link v-if="$store.state.isLoggedIn" class="btn btn-success btn-lg display:inline ml-4" to="/order/new">Place an Order</router-link>
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
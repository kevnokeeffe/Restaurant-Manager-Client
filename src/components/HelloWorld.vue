<template>
  <div class="jumbotron jumbotron-fluid custom-bg-dark">
    <div class="container">
      <h1 class="display-4">Restaurant Manager Client</h1>
      <p class="lead">This is a a restaurant manager application, built with MongoDB, ExpressJS, VueJS and NodeJS technologies.</p>
      <hr class="my-4">
      <p>Click below to begin managing your restaurant. </p>
      <router-link class="btn btn-success btn-lg" to="/order">Place an Order</router-link>
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
<template>
  <div class="d-flex flex-column">
    <div class="mb-4">
      <h1>Orders All</h1>
      <router-link to="/order/new" class="btn btn-success ml-2"
        >Create Order</router-link
      >
    </div>
    <div
      v-if="orders && orders.length > 0"
      class="d-flex flex-wrap justify-content-start"
    >
      <div
        v-for="order in orders"
        v-bind:key="order._id"
        class="card mb-2 ml-2 text-white bg-dark"
        style="width: 18rem;"
      >
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <h5 class="card-title">Bill ID:{{ order.billId }}</h5>
          </div>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as orderService from "../../services/OrderService";

export default {
  name: "OrdersAll",
  data: function() {
    return {
      orders: null,
      currentOrderId: null
    };
  },
  beforeRouteEnter(to, from, next) {
    orderService.getAllOrders().then(res => {
      //console.log(res);
      next(vm => {
        vm.order = res.data.order;
      });
    });
  }
};
</script>

<style scoped></style>

<template>
  <div class="d-flex flex-column">
    <div class="mb-4">
      <h1>Orders All</h1>
      <router-link to="/order/new" class="btn btn-success ml-2"
        >Create Order</router-link
      >
    </div>
    <div
      class="d-flex flex-wrap justify-content-center"
    >
      <div

        class="card  text-white bg-dark"
        style="width: 100%"
      >
        <div class="card-body">
          <div id="app1">
            <v-client-table :columns="columns" :data="orders" :options="options">
            </v-client-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as orderService from "../../services/OrderService";
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: "OrdersAll",
  data: function() {
    return {
      messageTitle:'List of Orders',
      orders: [],
      currentOrderId: null,
      errors: [],
      columns: ['_id', 'starter', 'main', 'desert','drink','price','payed','message'],
      options: {
        headings: {
          _id: 'ID',
          starter: 'Starter',
          main: 'Main',
          desert: 'Dessert',
          drink: 'Drink',
          price: 'Price',
          payed: 'Payed',
          message:'Message'
        }
      }
    };
  },
  // Fetches Donations when the component is created.
  created () {
    this.loadOrders()
  },
  methods: {
    loadOrders: function () {
      orderService.getAllOrders()
              .then(response => {
                // JSON responses are automatically parsed.
                this.orders = response.data
                console.log(this.orders)
              })
              .catch(error => {
                this.errors.push(error)
                console.log(error)
              })
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   orderService.getAllOrders().then(res => {
  //     //console.log(res);
  //     next(vm => {
  //       vm.order = res.data.order;
  //     });
  //   });
  // }
};
</script>

<style scoped>
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
</style>

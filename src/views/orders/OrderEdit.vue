<template v-if="childDataLoaded">
  <div>
    <h1 class="vue-title">Edit Order</h1>
    <template v-if="childDataLoaded">
      <order-form
        :order="order"
        orderBtnTitle="Update Order"
        @order-is-created-updated="updateOrder"
      ></order-form>
    </template>
  </div>
</template>

<script>
import * as orderService from "../../services/OrderService";
import orderForm from "./OrderForm";

export default {
  data() {
    return {
      order: {},
      childDataLoaded: false,
      temp: {},
      messageTitle: " Update Order "
    };
  },
  components: {
    "order-form": orderForm
  },
  created() {
    this.getOrder();
  },
  methods: {
    getOrder: function() {
      orderService
        .fetchOrder(this.$router.params)
        .then(response => {
          this.temp = response.data;
          this.order = this.temp[0];
          this.childDataLoaded = true;
        })
        .catch(error => {
          this.errors.push(error);
          console.log(error);
        });
    },
    updateOrder: function(order, next) {
      orderService
        .putOrder(this.$router.params, order)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          this.errors.push(error);
          console.log(error);
        });
      next(this.$router.push({ path: "/order/user" }));
    }
  }
};
</script>

<style scoped>
form.custom-form {
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}
.vue-title {
  margin-top: 30px;
  text-align: center;
  font-size: 45pt;
  margin-bottom: 20px;
}
</style>

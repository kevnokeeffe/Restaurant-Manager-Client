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
                        <h5 class="card-title">Bill ID:{{orders.userId }}</h5>
                    </div>

<!--                    <h6 class="card-subtitle mb-2 text-muted">-->
<!--                        Created by {{ orders.author.username }}-->
<!--                    </h6>-->
<!--                        {{ orders}}-->

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
                messageTitle:'List of Orders',
                orders: [],
                currentOrderId: null,
                errors: []
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

<style scoped></style>
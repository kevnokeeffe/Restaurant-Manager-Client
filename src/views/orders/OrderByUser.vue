<template>
    <div id="app1">
        <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messageTitle}}</h3>
        <div class="card custom-bg-dark">
            <div class="card-body">
                <v-client-table class="table" :columns="columns" :data="orders" :options="options">
                    <a slot="remove" slot-scope="props" class="btn btn-outline-danger align-items-center btn-sm" @click="deleteOrder(props.row._id)">Delete</a>
                    <a slot="edit" slot-scope="props" class="btn btn-outline-warning btn-sm" @click="editOrder(props.row._id)">Edit</a>
                </v-client-table>
                <router-link v-if="$store.state.isLoggedIn" id="pao" class="btn btn-success btn-lg display:inline ml-4" to="/order/new">Place an Order</router-link>
            </div>
        </div>
        <div v-if="orders && orders.length === 0" class="mt-2">
            <div class="alert alert-info">No orders found! Place an Order :)</div>
        </div>
    </div>
</template>

<script>
    import * as orderService from "../../services/OrderService";
    //import {Event} from 'vue-tables-2'
    //let MyUserID = this.$store.state.userId
    export default {
        name: "OrderByUser",
        data: function () {
            return {
                messageTitle: 'Your Orders',
                orders: [],
                currentOrderId: null,
                errors: [],
                columns: [ 'userId','_id', 'starter', 'main', 'desert', 'drink', 'price', 'message', 'remove', 'edit'],
                options: {
                    perPage: 10,
                    filterable: [],
                    // customFilters: [{
                    //     name: 'filter',
                    //     callback: function (row) {
                    //         //query = MyUserID;
                    //         return row.userId[1] == this.$store.state.userId;
                    //     }
                    // }],
                    headings: {
                        userId: 'User ID',
                        _id: 'ID',
                        starter: 'Starter',
                        main: 'Main',
                        desert: 'Dessert',
                        drink: 'Drink',
                        price: 'Price',
                        remove: 'Remove',
                        message: 'Message',
                        edit: 'Edit'
                    },
                    sortable: [],
                },
                props: ['_id']
            };
        },
        created () {
            this.loadOrders()
        },
        methods: {
            loadOrders: function () {
                orderService.getAllOrders()
                    .then(response => {
                        // JSON responses are automatically parsed.

                        let newOrders = response.data
                        console.log("All orders: ",newOrders)
                        newOrders.forEach((item)=>{
                            console.log("found: ", item)
                            console.log("found user id: ", item.userId)
                            if(item.userId == this.$store.state.userId){
                                this.orders.push(item)
                            }
                        })

                        console.log("End output: ",this.orders)
                    })
                    .catch(error => {
                        this.errors.push(error)
                    })
            },
            filterMyOrders: function (){
            },
        },

    }
</script>

<style scoped>

</style>
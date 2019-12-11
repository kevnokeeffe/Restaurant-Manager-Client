<template>
    <div id="app1">
        <h3 class="vue-title">{{this.$store.state.fName}}{{messageTitle}}</h3>
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
    import Vue from 'vue'
    import VueTables from 'vue-tables-2'

    Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
    export default {
        name: "OrderByUser",
        data: function () {
            return {
                messageTitle: "'s Orders",
                orders: [],
                currentOrderId: null,
                errors: [],
                columns: ['_id', 'starter', 'main', 'desert', 'drink', 'price', 'message', 'remove', 'edit'],
                options: {
                    perPage: 10,
                    filterable: [],
                    headings: {
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
                this.orders = []
                orderService.getAllOrders()
                    .then(response => {
                        let newOrders = response.data
                        console.log("All orders: ",newOrders)
                        newOrders.forEach((item)=>{
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
            editOrder: function (id) {
                const path = `/order/edit`
                orderService.getAllOrders()
                    .then(response => {
                        console.log("response:",response)
                        response.data.forEach((item)=>{
                            if(item._id === id){
                                this.$router.params = item._id
                                this.$router.push(path)}
                            })
                        })
            },

            deleteOrder: function (id) {
                this.$swal({
                    title: 'Are you totaly sure?',
                    text: 'You can\'t Undo this action',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'OK Delete it',
                    cancelButtonText: 'Cancel',
                    showCloseButton: true,
                    showLoaderOnConfirm: true
                }).then((result) => {
                    console.log('SWAL Result : ' + result)
                    if (result.value === true) {
                        orderService.deleteOrder(id)
                            .then(response => {
                                // JSON responses are automatically parsed.
                                this.message = response.data
                                console.log(this.message)
                                //this.$refs.table.data.splice()
                                this.loadOrders()
                                // Vue.nextTick(() => this.$refs.vuetable.refresh())
                                this.$swal('Deleted', 'You successfully deleted this Order ' + JSON.stringify(response.data, null, 5), 'success')
                            })
                            .catch(error => {
                                this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
                                this.errors.push(error)
                                console.log(error)
                            })
                    } else {
                        this.$swal('Cancelled', 'Your Order has not been deleted!', 'info')
                    }
                })
            }

        },

    }
</script>

<style scoped>
    .vue-title {
        margin-top: 30px;
        text-align: center;
        font-size: 45pt;
        margin-bottom: 10px;
    }
    #app1 {
        width: 100%;
        margin: 0 auto;
    }
</style>
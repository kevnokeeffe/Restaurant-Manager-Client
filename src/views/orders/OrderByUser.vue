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
    export default {
        name: "OrderByUser"
    }
</script>

<style scoped>

</style>
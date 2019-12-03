<template v-if="childDataLoaded">
    <div> <h1>Edit Order</h1>
    <order-form :order="order" orderBtnTitle="Update Order"
                   @order-is-created-updated="updateOrder"></order-form>
    </div>
</template>

<script>
    import * as orderService from "../../services/OrderService";
    import orderForm from './OrderForm'

    export default {
        data () {
            return {
                order: {},
                childDataLoaded: false,
                temp: {},
                messageTitle: ' Update Order '
            }
        },
        components: {
            'order-form': orderForm
        },
        created () {
            this.getOrder()
        },
        methods: {
            getOrder: function () {
                orderService.fetchOrder(this.$router.params)
                    .then(response => {
                        this.temp = response.data
                        this.order = this.temp[0]
                        this.childDataLoaded = true
                        console.log('Getting Order in Edit: ' + JSON.stringify(this.order, null, 5))
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            },
            updateOrder: function (order) {
                console.log('Before PUT ' + JSON.stringify(order, null, 5))
                orderService.putOrder(this.$router.params, order)
                    .then(response => {
                        console.log(response)
                        console.log('AFTER PUT ' + JSON.stringify(order, null, 5))
                    })
                    .catch(error => {
                        this.errors.push(error)
                        console.log(error)
                    })
            }
        }
    }
</script>

<style scoped>
    form.custom-form{
        max-width: 40rem;
        display: flex;
        flex-direction:column;
        margin-left: auto;
        margin-right: auto;
    }
</style>
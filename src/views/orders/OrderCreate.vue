<template>
    <div>
        <h1>Create Order</h1>
        <form class="custom-form" v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="inputStarter">Starter</label>
                <input v-model="order.starter" type="text" class="form-control" id="inputStarter" aria-describedby="starterHelp" placeholder="Enter starter">
            </div>
            <div class="form-group">
                <label for="inputMain">Main</label>
                <input v-model="order.main" type="text" class="form-control" id="inputMain" aria-describedby="mainHelp" placeholder="Enter main">
            </div>
            <div class="form-group">
                <label for="inputDessert">Dessert</label>
                <input v-model="order.desert" type="text" class="form-control" id="inputDessert" aria-describedby="dessertHelp" placeholder="Enter dessert">
            </div>
            <div class="form-group">
                <label for="inputDrink">Drink</label>
                <input v-model="order.drink" type="text" class="form-control" id="inputDrink" aria-describedby="drinkHelp" placeholder="Enter drink">
            </div>
            <div class="form-group">
                <label for="inputMessage">Message</label>
                <input v-model="order.message" type="text" class="form-control" id="inputMessage" aria-describedby="messageHelp" placeholder="Enter message">
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-secondary">Submit</button>
            </div>

        </form>
    </div>
</template>

<script>

    import * as orderService from "../../services/OrderService";
    export default {
        name: "order-create",
        data(){
            return{
                order:{
                    starter:'',
                    main:'',
                    desert:'',
                    drink:'',
                    message:''
                }
            }
        },
        methods:{
            onSubmit: async function(event){
                event.preventDefault();
                const request = {
                    order: this.order
                };
                await orderService.createOrder(request);
                await this.$router.push({name: 'orders-all'});
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
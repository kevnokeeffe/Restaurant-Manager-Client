<template>
    <div>
        <h1>Create Order</h1>
        <form class="custom-form" v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="inputStarter">Starter</label>
                <input v-model="starter" type="text" class="form-control" id="inputStarter" aria-describedby="starterHelp" placeholder="Enter starter" required autofocus>
            </div>
            <div class="form-group">
                <label for="inputMain">Main</label>
                <input v-model="main" type="text" class="form-control" id="inputMain" aria-describedby="mainHelp" placeholder="Enter main" required autofocus>
            </div>
            <div class="form-group">
                <label for="inputDessert">Dessert</label>
                <input v-model="desert" type="text" class="form-control" id="inputDessert" aria-describedby="dessertHelp" placeholder="Enter dessert" required autofocus>
            </div>
            <div class="form-group">
                <label for="inputDrink">Drink</label>
                <input v-model="drink" type="text" class="form-control" id="inputDrink" aria-describedby="drinkHelp" placeholder="Enter drink" required autofocus>
            </div>
            <div class="form-group">
                <label for="inputMessage">Message</label>
                <input v-model="message" type="text" class="form-control" id="inputMessage" aria-describedby="messageHelp" placeholder="Enter message">
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
        props: ['orderBtnTitle'],
        data: function(){
            return{
                starter:'',
                main:'',
                desert:'',
                drink:'',
                payed: false,
                price: 25.50,
                message:''

            }
        },
        methods:{
            onSubmit: async function(event){
                event.preventDefault();
                const newOrder = {
                    starter:this.starter,
                    main:this.main,
                    desert:this.desert,
                    drink:this.drink,
                    payed:this.payed,
                    price:this.price,
                    message:this.message
                };
                const orderPlace = orderService.createOrder(newOrder);
                await Promise.all([
                    orderPlace,
                ]);
                await this.$router.push({path:'/order'});

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
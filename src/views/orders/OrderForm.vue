<template>
    <div>
        <h1>Create Order</h1>
        <form class="custom-form" v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label class="form-label">Choose Starter</label>
                <select id="starter" name="starter" class="form-control" style="color: black" type="text" v-model="starter">
                    <option style="color: black" value="null" selected disabled hidden>Choose Starter</option>
                    <option style="color: black" value="Chicken Wings">Chicken Wings</option>
                    <option style="color: black" value="Soup">Soup</option>
                    <option style="color: black" value="Garlic Mushrooms">Garlic Mushrooms</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Choose a Main Course</label>
                <select id="main" name="main" class="form-control" style="color: black " type="text" v-model="main">
                    <option style="color: black" value="null" selected disabled hidden>Choose Main</option>
                    <option style="color: black" value="Beef">Beef</option>
                    <option style="color: black" value="Chicken">Chicken</option>
                    <option style="color: black" value="Gourmet Burger">Gourmet Burger</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Choose a Dessert</label>
                <select id="dessert" name="dessert" class="form-control" style="color: black " type="text" v-model="desert">
                    <option style="color: black" value="null" selected disabled hidden>Choose Dessert</option>
                    <option style="color: black" value="Brownie">Brownie</option>
                    <option style="color: black" value="Ice Cream">Ice Cream</option>
                    <option style="color: black" value="Cheese Cake">Cheese Cake</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Choose a Dessert</label>
                <select id="drink" name="drink" class="form-control" style="color: black " type="text" v-model="drink">
                    <option style="color: black" value="null" selected disabled hidden>Choose Drink</option>
                    <option style="color: black" value="Coke">Coke</option>
                    <option style="color: black" value="Wine">Wine</option>
                    <option style="color: black" value="Beer">Beer</option>
                    <option style="color: black" value="Water">Water</option>
                </select>
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

            },

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
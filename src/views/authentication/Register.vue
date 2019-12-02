<template>
    <div>
        <h1>Register Route</h1>
        <form class="custom-form" v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="inputFirstName">First Name</label>
                <input v-model="fName" type="text" class="form-control" id="inputFirstName" aria-describedby="emailHelp" placeholder="Enter first name" required autofocus >
            </div>
            <div class="form-group">
                <label for="inputLastName">Last Name</label>
                <input v-model="lName" type="text" class="form-control" id="inputLastName" aria-describedby="emailHelp" placeholder="Enter last name" required autofocus >
            </div>
            <div class="form-group">
                <label for="inputEmail">Email address</label>
                <input v-model="email" type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" required autofocus >
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="inputPassword">Password</label>
                <input v-model="password" type="password" id="inputPassword" class="form-control"  placeholder="Password" required>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-secondary">Register</button>
            </div>

        </form>
    </div>
</template>

<script>
    import * as auth from '../../services/AuthService';
    export default {
        name: "Register",
        data: function(){
            return{
                fName:'',
                lName:'',
                email:'',
                password:''
            }
        },
        methods:{
            onSubmit: async function(){
            const user = {
                fName:this.fName,
                lName:this.lName,
                email:this.email,
                password:this.password
                };
                const registerPromise = auth.registerUser(user);
                await Promise.all([
                    registerPromise,
                ]);
                const loginPromise  = auth.login(user);
                await Promise.all([
                    loginPromise
                ]);
                await this.$router.push({path:'/'});
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
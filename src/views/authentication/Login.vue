<template>
    <div>
    <h1>Login Route</h1>
    <form class="custom-form" v-on:submit="onSubmit">
        <div class="form-group">
            <label for="inputEmail">Email address</label>
            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" required autofocus >
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="inputPassword">Password</label>
            <input type="password" id="inputPassword" class="form-control"  placeholder="Password" required>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-secondary">Submit</button>
        </div>

    </form>
    </div>
</template>

<script>
    import * as auth from '../../services/AuthService';
    export default {
        name: "Login",
        methods:{
            onSubmit:function(event){
                event.preventDefault();
                auth.login();
                this.$router.push({name: 'home'});
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
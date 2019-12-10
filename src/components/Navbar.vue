<template>
    <header>
        <nav id="nav" @blur="close"  toggleable="md" class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark" >
            <router-link to="/" class="navbar-brand">
                <img style="max-height:25px " alt="Vue logo" src="../assets/logo.png">
                Restaurant Manager
            </router-link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                    <div>
                    <li class="nav-item active">
                        <router-link to="/" exact>
                        <router-link to="/" class="nav-link" exact>
                            Home
                        </router-link>
                        </router-link>
                    </li>
                    </div>
                    <div>
                    <li v-if="$store.state.isLoggedIn" class="nav-item">
                        <router-link to="/order" class="nav-link" exact>
                            All Orders
                        </router-link>
                    </li>
                    </div>
                    <div>
                    <li v-if="$store.state.isLoggedIn" class="nav-item">
                        <router-link to="/order/user" class="nav-link" exact>
                            {{this.$store.state.fName}}'s Orders
                        </router-link>
                    </li>
                    </div>
                    <div>
                    <li v-if="!$store.state.isLoggedIn" class="nav-item">
                        <router-link to="/register" class="nav-link" exact>
                            Register
                        </router-link>
                    </li>
                    </div>
                    <div>
                    <li v-if="!$store.state.isLoggedIn" class="nav-item">
                        <router-link to="/login" class="nav-link" exact>
                            Login
                        </router-link>
                    </li>
                    </div>
                    <div>
                    <li v-if="$store.state.isLoggedIn" class="nav-item">
                           <a class="nav-link" v-on:click.prevent="logout()" href="#" >Logout</a>
                    </li>
                    </div>
                    <div>
                    <li v-if="!$store.state.isLoggedIn" id="nli" class="h4User">
                            <a> Welcome, User.</a>
                    </li>
                    </div>
                    <div>
                        <li v-if="$store.state.isLoggedIn" id="yli" class="h4User">
                            <a> Welcome, {{this.$store.state.fName}} {{this.$store.state.lName}}</a>
                        </li>
                    </div>

                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import * as auth from '../services/AuthService';

    export default {
        name: 'Navbar',
        methods:{
            logout: function() {
            auth.logout();
            const path = `/`
                if (this.$route.path !== path) this.$router.push(path)
            },
            close() {
                setTimeout(() => {
                    this.state = false;
                }, 200);
            }
        }
    }
</script>

<style>
    .custom-bg-dark{
        background-color: #373F46 !important;
    }
    nav.navbar{
        height: 4rem;
    }
    #yli{

        margin-top: 4%;
        margin-left: 20px;
        font-family: sans-serif;
        align-content: center;
    }
    #nli{

        margin-top: 6.5%;
        margin-left: 20px;
        font-family: sans-serif;
    }
    li.nav-item a{
        text-transform: uppercase;
    }

    @media screen and (max-width: 767px){
        div#navbarCollapse{
            width:100% ;
            position: fixed;
            top:75px;
            left:0;
            padding-left: 20px;
            padding-bottom: 5px;
            background-color: #373F46;
        }
    }
</style>
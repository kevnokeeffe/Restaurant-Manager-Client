<template>
    <header>
        <nav id="nav" class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
            <router-link to="/" class="navbar-brand">
                <img style="max-height:25px " alt="Vue logo" src="../assets/logo.png">
                Restaurant Manager
            </router-link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link" exact>
                            <router-link to="/" class="nav-link" exact>
                            Home
                            </router-link>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/order" class="nav-link" exact>
                            <router-link to="/order" class="nav-link" exact>
                            Orders
                            </router-link>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link" exact>
                            <router-link to="/register" class="nav-link" exact>
                            Register
                            </router-link>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link" exact>
                            <router-link to="/login" class="nav-link" exact>
                            Login
                            </router-link>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/logout" class="nav-link" exact>
                            <router-link to="/logout" class="nav-link" exact>
                           Logout
                            </router-link>
                        </router-link>
                    </li>
                    <li class="nav-item">

                            <h3>Welcome, {{this.$store.state.fName}}!</h3>
                    </li>

                </ul>
            </div>
        </nav>
    </header>
</template>

<style>
    .custom-bg-dark{
        background-color: #373F46 !important;
    }
    nav.navbar{
        height: 4rem;
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
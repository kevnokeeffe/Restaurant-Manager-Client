<template>
    <header>
        <nav id="nav" class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
            <a class="navbar-brand" href="#">
                <img style="max-height:25px " alt="Vue logo" src="../assets/logo.png">
                Restaurant Manager</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Orders</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Register</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Logout</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Kevin</a>
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

    a.navbar-brand{
        text-transform: uppercase;
        letter-spacing: 3px;
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
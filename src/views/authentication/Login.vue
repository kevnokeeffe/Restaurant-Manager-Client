<template>
    <div>
    <h1 class="h1">Login</h1>
    <form class="custom-form" v-on:submit.prevent="onSubmit">
        <div class="form-group">
            <label id="emailLabel" for="inputEmail">Email address</label>
            <input data-test=email v-model="email" type="email" class="form-control" :class="{ 'is-invalid': submitted && this.$v.email.$error }" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" required autofocus >
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            <div v-if="submitted && this.$v.email" class="invalid-feedback">
                <span v-if="!this.$v.email.email">* Email is invalid!</span>
            </div>
        </div>
        <div class="form-group">
            <label id="passwordLabel" for="inputPassword">Password</label>
            <input data-test=password v-model="password" type="password" id="inputPassword" class="form-control" :class="{ 'is-invalid': submitted && this.$v.password.$error }" placeholder="Password" required>
            <div v-if="submitted && this.$v.password.$error" class="invalid-feedback">
                <span v-if="!this.$v.password.minLength">* Password must be at least 6 characters long!</span>
            </div>
        </div>
        <div class="form-group">
            <button :disabled="buttonDisabled()" type="submit" class="btn btn-secondary">Submit</button>
        </div>
        <p class="typo__p" v-if="submitStatus === 'OK'">Logged in!</p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Enter Correct Details.</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Logging in...</p>
    </form>
    </div>
</template>

<script>
    import * as auth from '../../services/AuthService';
    import {minLength} from "vuelidate/lib/validators";
    export default {
        name: "Login",
        data(){
            return{
                email : '',
                password: '',
                submitted: false,
                submitStatus: null,
                errorMsg: null
            }
        },
        validations: {
            message: {
                minLength: minLength(0)
            },
        },
        methods:{
            onSubmit: async function(event){
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                }else {
                    this.submitStatus = 'PENDING'
                    try {
                        event.preventDefault();
                        const user = {
                            email: this.email,
                            password: this.password
                        };
                        const loginPromise = auth.login(user)
                        await Promise.all([
                            loginPromise
                        ]);
                        await this.$router.push({path: '/'});
                        this.submitStatus = 'OK'
                    }catch{this.submitStatus = 'ERROR'}
                }
            },
            buttonDisabled: function () {
                return (!this.email || !this.password )
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
.h1 {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 20px;
}
</style>
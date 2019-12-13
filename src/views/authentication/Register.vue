<template>
  <div>
    <h1 class="h1">Register</h1>
    <form class="custom-form" v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="inputFirstName">First Name</label>
        <input
          data-test="fName"
          v-model="fName"
          type="text"
          class="form-control"
          id="inputFirstName"
          aria-describedby="emailHelp"
          placeholder="Enter first name"
          pattern="^[a-zA-Z0-9]+$"
          required
          autofocus
        />
      </div>
      <div class="form-group">
        <label for="inputLastName">Last Name</label>
        <input
          data-test="lName"
          v-model="lName"
          type="text"
          class="form-control"
          id="inputLastName"
          aria-describedby="emailHelp"
          placeholder="Enter last name"
          required
          autofocus
        />
      </div>
      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input
          data-test="email"
          v-model="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': submitted && this.$v.email.$error }"
          id="inputEmail"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
          autofocus
        />
        <div v-if="submitted && this.$v.email" class="invalid-feedback">
          <span v-if="!this.$v.email.email">* Email is invalid!</span>
        </div>
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input
          data-test="password"
          v-model="password"
          type="password"
          id="inputPassword"
          class="form-control"
          :class="{ 'is-invalid': submitted && this.$v.password.$error }"
          placeholder="Password"
          aria-describedby="passwordHelp"
          required
          autofocus
        />
        <div
          v-if="submitted && this.$v.password.$error"
          class="invalid-feedback"
        >
          <span v-if="!this.$v.password.minLength"
            >* Password must be at least 6 characters long!</span
          >
        </div>
        <small id="passwordHelp" class="form-text text-muted"
          >Password must be at least 6 characters long.</small
        >
      </div>
      <div class="form-group">
        <button
          :disabled="buttonDisabled()"
          type="submit"
          class="btn btn-secondary"
        >
          Register
        </button>
      </div>
      <p class="typo__p" v-if="submitStatus === 'OK'">User Created!</p>
      <p class="typo__p" v-if="submitStatus === 'ERROR'">
        Please Enter Valid Details.
      </p>
      <p class="typo__p" v-if="submitStatus === 'PASSWORD'">
        Password must be at least 6 characters long.
      </p>
      <p class="typo__p" v-if="submitStatus === 'PENDING'">Registering...</p>
    </form>
  </div>
</template>

<script>
import * as auth from "../../services/AuthService";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "Register",
  data: function() {
    return {
      fName: "",
      lName: "",
      email: "",
      password: "",
      submitStatus: null
    };
  },
  methods: {
    onSubmit: async function() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        try {
          const user = {
            fName: this.fName,
            lName: this.lName,
            email: this.email,
            password: this.password
          };
          const registerPromise = auth.registerUser(user);
          await Promise.all([registerPromise]);
          const loginPromise = auth.login(user);
          await Promise.all([loginPromise]);
          await this.$router.push({ path: "/" });
        } catch {
          if (this.password.length != this.password.minLength) {
            this.submitStatus = "PASSWORD";
          } else {
            this.submitStatus = "ERROR";
          }
        }
      }
    },
    buttonDisabled: function() {
      return !this.email || !this.fName || !this.lName || !this.password;
    }
  },
  validations: {
    email: { required, email },
    password: { required, c: minLength(6) }
  }
};
</script>

<style scoped>
form.custom-form {
  max-width: 40rem;
  display: flex;
  flex-direction: column;
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

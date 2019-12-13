<template>
  <div>
    <form class="custom-form" v-on:submit.prevent="submit">
      <div class="form-group">
        <label class="form-label">Choose Starter</label>
        <select
          id="starter"
          name="starter"
          class="form-control"
          style="color: black"
          type="text"
          v-model="starter"
        >
          <option style="color: black" value="null" selected disabled hidden
            >Choose Starter</option
          >
          <option style="color: black" value="Chicken Wings"
            >Chicken Wings</option
          >
          <option style="color: black" value="Soup">Soup</option>
          <option style="color: black" value="Garlic Mushrooms"
            >Garlic Mushrooms</option
          >
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Choose a Main Course</label>
        <select
          id="main"
          name="main"
          class="form-control"
          style="color: black "
          type="text"
          v-model="main"
        >
          <option style="color: black" value="null" selected disabled hidden
            >Choose Main</option
          >
          <option style="color: black" value="Beef">Beef</option>
          <option style="color: black" value="Chicken">Chicken</option>
          <option style="color: black" value="Gourmet Burger"
            >Gourmet Burger</option
          >
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Choose a Dessert</label>
        <select
          id="dessert"
          name="dessert"
          class="form-control"
          style="color: black "
          type="text"
          v-model="desert"
        >
          <option style="color: black" value="null" selected disabled hidden
            >Choose Dessert</option
          >
          <option style="color: black" value="Brownie">Brownie</option>
          <option style="color: black" value="Ice Cream">Ice Cream</option>
          <option style="color: black" value="Cheese Cake">Cheese Cake</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Choose a Drink</label>
        <select
          id="drink"
          name="drink"
          class="form-control"
          style="color: black "
          type="text"
          v-model="drink"
        >
          <option style="color: black" value="null" selected disabled hidden
            >Choose Drink</option
          >
          <option style="color: black" value="Coke">Coke</option>
          <option style="color: black" value="Wine">Wine</option>
          <option style="color: black" value="Beer">Beer</option>
          <option style="color: black" value="Water">Water</option>
        </select>
      </div>
      <div class="form-group">
        <label for="inputMessage">Message</label>
        <input
          v-model="message"
          type="text"
          class="form-control"
          id="inputMessage"
          aria-describedby="messageHelp"
          placeholder="Enter message"
        />
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-secondary">Submit</button>
      </div>
      <p class="typo__p" v-if="submitStatus === 'OK'">Order Processed!</p>
      <p class="typo__p" v-if="submitStatus === 'ERROR'">
        Please Fill in the Form Correctly.
      </p>
      <p class="typo__p" v-if="submitStatus === 'PENDING'">Processing...</p>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import VueForm from "vueform";
import Vuelidate from "vuelidate";
import { minLength } from "vuelidate/lib/validators";

Vue.use(VueForm, {
  inputClasses: {
    valid: "form-control-success",
    invalid: "form-control-danger"
  }
});

Vue.use(Vuelidate);

export default {
  name: "FormData",
  props: ["orderBtnTitle", "order"],
  data() {
    return {
      messageTitle: " Order ",
      userId: this.$store.state.userId,
      starter: this.order.starter,
      main: this.order.main,
      desert: this.order.desert,
      drink: this.order.drink,
      message: this.order.message,
      submitStatus: null
    };
  },
  validations: {
    message: {
      minLength: minLength(0)
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
          let order = {
            userId: this.$store.state.userId,
            starter: this.starter,
            main: this.main,
            desert: this.desert,
            drink: this.drink,
            message: this.message
          };
          this.order = order;
          this.$emit("order-is-created-updated", this.order);
        }, 500);
      }
    }
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
</style>

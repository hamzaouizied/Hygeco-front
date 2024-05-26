<template>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div
              class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0"
            >
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">Sign Up</h4>
                  <p class="mb-0">Enter your details to sign up</p>
                </div>
                <div class="card-body">
                  <form @submit.prevent="registerUser">
                    <div class="mb-3">
                      <argon-input
                        id="name"
                        v-model="state.name"
                        type="text"
                        placeholder="Name"
                        name="name"
                        size="lg"
                      />
                    </div>
                    <div class="mb-3">
                      <argon-input
                        id="email"
                        v-model="state.email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        size="lg"
                      />
                    </div>
                    <div class="mb-3">
                      <argon-input
                        id="password"
                        v-model="state.password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        size="lg"
                      />
                    </div>
                    <div class="mb-3">
                      <argon-input
                        id="password_confirmation"
                        v-model="state.password_confirmation"
                        type="password"
                        placeholder="Confirm Password"
                        name="password_confirmation"
                        size="lg"
                      />
                    </div>
                    <div class="text-center">
                      <argon-button
                        class="mt-4"
                        variant="gradient"
                        color="success"
                        full-width
                        size="lg"
                      >
                        Sign up
                      </argon-button>
                    </div>
                  </form>
                  <div v-if="state.validationErrors.general" class="alert alert-danger mt-3">
                    {{ state.validationErrors.general }}
                  </div>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Already have an account?
                    <router-link
                      :to="{ name: 'Signin Illustration' }"
                      class="text-success text-gradient font-weight-bold"
                    >
                      Sign in
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column"
            >
              <div
                class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                :style="{
                  backgroundImage:
                    'url(' +
                    'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-ill.jpg' +
                    ')',
                  backgroundSize: 'cover',
                }"
              >
                <span class="mask bg-gradient-success opacity-6"></span>
                <h4 class="mt-5 text-white font-weight-bolder position-relative">
                  Your journey starts here
                </h4>
                <p class="text-white position-relative">
                  Just as it takes a company to sustain a product, it takes a community to sustain a protocol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script>
import { onBeforeMount, onBeforeUnmount, reactive, watch } from "vue";
import { useStore } from "vuex";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import axios from "axios";

export default {
  components: {
    ArgonInput,
    ArgonButton,
  },
  setup() {
    const store = useStore();
    const body = document.getElementsByTagName("body")[0];
    const toggleDefaultLayout = () => store.commit("toggleDefaultLayout");

    onBeforeMount(() => {
      store.state.hideConfigButton = true;
      toggleDefaultLayout();
      body.classList.remove("bg-gray-100");
    });

    onBeforeUnmount(() => {
      store.state.hideConfigButton = false;
      toggleDefaultLayout();
      body.classList.add("bg-gray-100");
    });

    const state = reactive({
      name: "", // Adding the name field
      email: "",
      password: "",
      password_confirmation: "",
      validationErrors: {},
      isSubmitting: false,
    });

    const registerUser = async () => {
      // Check if passwords match
      if (state.password !== state.password_confirmation) {
        state.validationErrors = { general: "Passwords do not match" };
        return;
      }

      const formData = {
        name: state.name, // Include the name field in the form data
        email: state.email,
        password: state.password,
        password_confirmation: state.password_confirmation,
      };
      state.isSubmitting = true;

      try {
        const response = await axios.post("https://hygeco-back.test/api/auth/register", formData);

        if (response && response.data) {
          console.log("Registration successful:", response.data);
          // Redirect or perform other actions upon successful registration
          // e.g., this.$router.push({ name: 'Dashboard' });
        } else {
          console.error("Unexpected response structure:", response);
          state.validationErrors = { general: "Unexpected response from the server" };
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.log("Registration failed:", error.response.data);
          state.validationErrors = error.response.data; // Assuming the error response contains validation errors
        } else if (error.message) {
          console.error("Registration error:", error.message);
          state.validationErrors = { general: error.message };
        } else {
          console.error("Registration error:", error);
          state.validationErrors = { general: "An unknown error occurred" };
        }
      } finally {
        state.isSubmitting = false;
      }
    };

    // Add the watcher here
    watch(
      () => state.password_confirmation,
      (newpassword_confirmation) => {
        if (state.password && state.password !== newpassword_confirmation) {
          state.validationErrors = { general: "Passwords do not match" };
        } else {
          state.validationErrors = {};
        }
      }
    );

    return {
      state,
      registerUser,
    };
  },
};
</script>


<script>
import { onBeforeMount, onBeforeUnmount, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import axios from 'axios';

export default {
  components: {
    ArgonInput,
    ArgonSwitch,
    ArgonButton
  },
  setup() {
    const store = useStore();
    const router = useRouter();
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
      email: '',
      password: '',
      validationErrors: {},
      isSubmitting: false,
    });

    const login = async () => {
      const formData = {
        email: state.email,
        password: state.password,
      };
      state.isSubmitting = true;
      try {
        console.log('Sending login request:', formData); // Log the form data
        const response = await axios.post('https://hygeco-back.test/api/auth/login', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response && response.data) {
          const token = response.data.token;
          localStorage.setItem('token', token);
          console.log("Login successful");
          // Redirect to the admin dashboard
          router.push({ name: 'Dashboard admin' });
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.log("Unauthorized: Invalid email or password");
          state.validationErrors = { general: "Invalid email or password" };
        } else if (error.response && error.response.data && error.response.data.errors) {
          console.log("Login failed", error.response.data.errors);
          state.validationErrors = error.response.data.errors;
        } else if (error.message) {
          console.error("Login error:", error.message);
          state.validationErrors = { general: error.message };
        } else {
          console.error("Login error:", error);
          state.validationErrors = { general: "An unknown error occurred" };
        }
      } finally {
        state.isSubmitting = false;
      }
    };

    return {
      state,
      login,
    };
  },
};

</script>

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
                  <h4 class="font-weight-bolder">Sign In</h4>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <form @submit.prevent="login">
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
                    <argon-switch id="rememberMe" name="rememberMe">
                      Remember me
                    </argon-switch>
                    <div class="text-center">
                      <argon-button
                        class="mt-4"
                        variant="gradient"
                        color="success"
                        full-width
                        size="lg"
                        >Sign in</argon-button
                      >
                    </div>
                  </form>
                  <div v-if="state.validationErrors.general" class="alert alert-danger mt-3">
                    {{ state.validationErrors.general }}
                  </div>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Don't have an account?
                    <router-link
                      :to="{ name: 'Signup Illustration' }"
                      class="text-success text-gradient font-weight-bold"
                      >Sign up</router-link
                    >
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
                    'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg' +
                    ')',
                  backgroundSize: 'cover',
                }"
              >
                <span class="mask bg-gradient-success opacity-6"></span>

                <h4
                  class="mt-5 text-white font-weight-bolder position-relative"
                >
                  "Attention is the new currency"
                </h4>
                <p class="text-white position-relative">
                  The more effortless the writing looks, the more effort the
                  writer actually put into the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script setup>
import { ref } from "vue";
import ArgonAlert from "@/components/ArgonAlert.vue";
import ArgonSnackbar from "@/components/ArgonSnackbar.vue";

const snackbar = ref();
const closeSnackbar = () => {
  snackbar.value = null;
};
</script>
<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <div class="card mt-4">
          <div class="card-header p-3">
            <h5 class="mb-0">Alerts</h5>
          </div>
          <div class="card-body p-3 pb-0">
            <argon-alert class="font-weight-light" color="primary" dismissible>
              A simple primary alert with
              <a href="#" class="alert-link text-white">an example link</a>
              . Give it a click if you like.
            </argon-alert>
            <argon-alert
              class="font-weight-light"
              color="secondary"
              dismissible
            >
              A simple primary alert with
              <a href="#" class="alert-link text-white">an example link</a>
              . Give it a click if you like.
            </argon-alert>
            <argon-alert class="font-weight-light" color="success" dismissible>
              A simple primary alert with
              <a href="#" class="alert-link text-white">an example link</a>
              . Give it a click if you like.
            </argon-alert>
            <argon-alert class="font-weight-light" color="danger" dismissible>
              A simple primary alert with
              <a href="#" class="alert-link text-white">an example link</a>
              . Give it a click if you like.
            </argon-alert>
            <argon-alert class="font-weight-light" color="warning" dismissible>
              A simple primary alert with
              <a href="#" class="alert-link text-white">an example link</a>
              . Give it a click if you like.
            </argon-alert>
            <argon-alert class="font-weight-light" color="info" dismissible>
              A simple primary alert with
              <a href="#" class="alert-link text-white">an example link</a>
              . Give it a click if you like.
            </argon-alert>
            <argon-alert class="font-weight-light" color="light" dismissible>
              A simple primary alert with
              <a href="#" class="alert-link text-white">an example link</a>
              . Give it a click if you like.
            </argon-alert>
            <argon-alert color="dark" dismissible>
              A simple primary alert with
              <a href="#" class="alert-link text-white">an example link</a>
              . Give it a click if you like.
            </argon-alert>
          </div>
        </div>
        <div class="card mt-4">
          <div class="card-header p-3">
            <h5 class="mb-0">Notifications</h5>
            <p class="text-sm mb-0">
              Notifications on this page use Toasts from Bootstrap. Read more
              details
              <a
                href="https://getbootstrap.com/docs/5.0/components/toasts/"
                target="
          "
                >here</a
              >.
            </p>
          </div>
          <div class="card-body p-3">
            <div class="row">
              <div class="col-lg-3 col-sm-6 col-12">
                <button
                  class="btn bg-success w-100 mb-0 toast-btn text-white"
                  type="button"
                  data-target="successToast"
                  @click="snackbar = 'success'"
                >
                  Success Notification
                </button>
              </div>
              <div class="col-lg-3 col-sm-6 col-12 mt-sm-0 mt-2">
                <button
                  class="btn bg-info w-100 mb-0 toast-btn text-white"
                  type="button"
                  data-target="infoToast"
                  @click="snackbar = 'info'"
                >
                  Info Notification
                </button>
              </div>
              <div class="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-2">
                <button
                  class="btn bg-warning w-100 mb-0 toast-btn text-white"
                  type="button"
                  data-target="warningToast"
                  @click="snackbar = 'warning'"
                >
                  Warning Notification
                </button>
              </div>
              <div class="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-2">
                <button
                  class="btn bg-danger w-100 mb-0 toast-btn text-white"
                  type="button"
                  data-target="dangerToast"
                  @click="snackbar = 'danger'"
                >
                  Danger Notification
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="position-fixed bottom-1 end-1 z-index-2">
      <argon-snackbar
        v-if="snackbar === 'success'"
        title="Argon Dashboard"
        date="11 mins ago"
        description="Hello, world! This is a notification message."
        :icon="{ component: 'ni ni-check-bold', color: 'white' }"
        color="success"
        :close-handler="closeSnackbar"
      />
      <argon-snackbar
        v-if="snackbar === 'info'"
        title="Argon Dashboard"
        date="11 mins ago"
        description="Hello, world! This is a notification message."
        :icon="{ component: 'ni ni-bell-55', color: 'info' }"
        color="white"
        :close-handler="closeSnackbar"
      />
      <argon-snackbar
        v-if="snackbar === 'warning'"
        title="Argon Dashboard"
        date="11 mins ago"
        description="Hello, world! This is a notification message."
        :icon="{ component: 'ni ni-spaceship', color: 'white' }"
        color="warning"
        :close-handler="closeSnackbar"
      />
      <argon-snackbar
        v-if="snackbar === 'danger'"
        title="Argon Dashboard"
        date="11 mins ago"
        description="Hello, world! This is a notification message."
        :icon="{ component: 'ni ni-notification-70', color: 'danger' }"
        color="white"
        :close-handler="closeSnackbar"
      />
    </div>
  </div>
</template>

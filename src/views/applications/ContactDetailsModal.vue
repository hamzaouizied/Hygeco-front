<template>
    <div v-if="show" class="modal fade show d-block" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <!-- modal content -->
      <div class="modal-header">
        <h5 class="modal-title" >Contact Details</h5>
        <button type="button" class="close" @click="close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> 
      <div class="modal-body">
        <p><strong>First Name:</strong> {{ contact.first_name }}</p>
        <p><strong>Address:</strong> {{ contact.address }}</p>
        <p><strong>Email:</strong> {{ contact.email }}</p>
        <p><strong>Service:</strong> {{ contact.service }}</p>
        <p><strong>Object:</strong> {{ contact.object }}</p>
        <p><strong>Created At:</strong> {{ contact.created_at }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="close">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show: Boolean,
      contact: Object,
    },
    emits: ['close'],
    methods: {
      close() {
        this.$emit('close');
      },
    },
  }
  </script>
  
  <style scoped>
  .modal {
    background-color: rgba(0, 0, 0, 0.5);
  }
  </style>
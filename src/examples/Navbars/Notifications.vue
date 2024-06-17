<template>
    <div v-if="show" class="modal fade show d-block" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Notification Details</h5>
            <button type="button" class="close" @click="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p><strong>Message:</strong> {{ notification.data.message }}</p>
            <p><strong>Email:</strong> {{ notification.data.email }}</p>
            <p><strong>Note:</strong> {{ notification.data.note }}</p>
            <p><strong>Created At:</strong> {{ notification.created_at }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="close">Close</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  
  const { show, notification } = defineProps({
    show: Boolean,
    notification: Object,
  });
  
  const emit = defineEmits(['close']);
  
  const close = () => {
    emit('close');
  };
  </script>
  
  <style scoped>
  .modal {
    background-color: rgba(0, 0, 0, 0.5);
  }
  </style>
  
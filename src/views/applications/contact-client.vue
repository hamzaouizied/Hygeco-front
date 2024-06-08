<template>
    <div class="py-4 container-fluid">
      <div class="mt-4 row">
        <div class="col-12">
          <div class="card">
            <!-- Card header -->
            <div class="card-header">
              <h5 class="mb-0">List des Contacts</h5>
              <p class="mb-0 text-sm">
                Rh, Buanderie, Menage, finance
              </p>
            </div>
            <div class="table-responsive">
              <table id="datatable-basic" class="table table-flush">
                <thead class="thead-light">
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nom</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Address</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Email</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Service</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Objet</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">created-at</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Rows will be added by DataTable initialization -->
                </tbody>
              </table>
            </div>
            <div class="card-footer">
              <input type="date" v-model="startDate" />
              <input type="date" v-model="endDate" />
              <button @click="filterByDate">Filter by date range</button>
            </div>
          </div>
        </div>
      </div>
  
      <contact-modal :show="showModal" :contact="selectedContact" @close="closeModal" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { DataTable } from "simple-datatables";
  import ContactModal from "./ContactDetailsModal.vue";
  
  export default {
    components: {
      ContactModal
    },
    data() {
      return {
        contacts: [],
        startDate: null,
        endDate: null,
        showModal: false,
        selectedContact: null,
      }
    },
    mounted() {
      this.fetchContacts();
    },
    methods: {
      async fetchContacts() {
        const token = localStorage.getItem('token');
        await axios.request({
          headers: {
            Authorization: `Bearer ${token}`
          },
          method: "GET",
          url: `https://hygeco-back.test/api/auth/contacts`
        }).then(response => {
          this.contacts = response.data;
          this.initDataTable();
        });
      },
      initDataTable() {
        if (this.contacts.length > 0) {
          const tableRows = this.contacts.map(contact => {
            return [
              contact.first_name, 
              contact.address, 
              contact.email, 
              contact.service, 
              contact.object, 
              contact.created_at,
              `<td class="text-sm">
              <i class="fas fa-eye text-secondary" @click="showContact(${contact.id})"></i>
             
              <i class="fas fa-trash text-secondary"></i>
            </td>`
            ];
          });
  
          this.$nextTick(() => {
            const dataTableBasic = new DataTable("#datatable-basic", {
              searchable: true,
              fixedHeight: true,
            });
            dataTableBasic.rows.add(tableRows);
          });
        }
      },
      showContact(contactId) {
      this.selectedContact = this.contacts.find(contact => contact.id === contactId);
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedContact = null;
    },
      filterByDate() {
        if (this.startDate && this.endDate) {
          const filteredContacts = this.contacts.filter(contact => {
            const contactDate = new Date(contact.created_at);
            const startDate = new Date(this.startDate);
            const endDate = new Date(this.endDate);
            return contactDate >= startDate && contactDate <= endDate;
          });
  
          // Clear the table body
          const tableBody = document.getElementById("datatable-basic").getElementsByTagName("tbody")[0];
          tableBody.innerHTML = "";
  
          // Add the filtered rows to the table body
          filteredContacts.forEach(contact => {
            const row = tableBody.insertRow();
            row.innerHTML = `
            <td>${contact.first_name}</td>
            <td>${contact.address}</td>
            <td>${contact.email}</td>
            <td>${contact.service}</td>
            <td>${contact.object}</td>
            <td>${contact.created_at}</td>
            <td class="text-sm">
              <i class="fas fa-eye text-secondary" @click="showContact(${contact.id})"></i>
              
              <i class="fas fa-trash text-secondary"></i>
            </td>
          `;
          });
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .modal {
    background-color: rgba(0, 0, 0, 0.5);
  }
  </style>
  
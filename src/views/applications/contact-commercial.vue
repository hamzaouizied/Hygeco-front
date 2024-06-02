<template>
    <div class="py-4 container-fluid">
        <div class="mt-4 row">
            <div class="col-12">
                <div class="card">
                    <!-- Card header -->
                    <div class="card-header">
                        <h5 class="mb-0">List des Contacts Commercial</h5>
                        <p class="mb-0 text-sm">
                            Rh, Buanderie, Menage, finance
                        </p>
                    </div>
                    <div class="table-responsive">
                        <table id="datatable-basic" class="table table-flush">
                            <thead class="thead-light">
                                <tr>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Nom Entreprise
                                    </th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Email
                                    </th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Telephone
                                    </th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Nom Responsable
                                    </th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Rue
                                    </th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Unite
                                    </th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Ville
                                    </th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Province
                                    </th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        Code Postal
                                    </th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <!-- <tr v-for="(contact, index) in contacts" :key="index">
                                    <td>{{ contact.first_name }}</td>
                                    <td>{{ contact.address }}</td>
                                    <td>{{ contact.email }}</td>
                                    <td>{{ contact.service }}</td>
                                    <td>{{ contact.note }}</td>
                                    <td>
                                        
                                    </td>
                                </tr> -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { DataTable } from "simple-datatables";


export default {
    data() {
        return {
            contacts: []
        }
    },
    mounted() {
        this.fetchContacts()
    },
    methods: {
        async fetchContacts() {  
            const token = localStorage.getItem('token')
            await axios.request({
                headers: {
                    Authorization: `Bearer ${token}`
                },
                method: "GET",
                url: `https://hygeco-back.test/api/auth/contacts-commercial`
            }).then(response => {
                this.contacts = response.data;
                this.initDataTable();
            });
        },


        initDataTable() {
  if (this.contacts.length > 0) {
    const tableRows = this.contacts.map(contact => {
      // assuming contact has properties like name, email, phone, etc.
      return [contact.nom_entreprise, contact.email, contact.telephone, contact.nom_responsable, contact.rue,contact.unite,contact.ville,contact.province,contact.code_postal]; // add more columns as needed
    });

    this.$nextTick(() => {
      const dataTableBasic = new DataTable("#datatable-basic", {
        searchable: true,
        fixedHeight: true,
      });
      dataTableBasic.rows.add(tableRows);
    });
  }
}
    }
}
</script>
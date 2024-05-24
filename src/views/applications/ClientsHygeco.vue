<script setup>
import { onMounted } from "vue";
import { DataTable } from "simple-datatables";

const getData = async () => {
  const response = await fetch("https://dummyjson.com/users");
  const { users } = await response.json();
  return users;
};
onMounted(async () => {
  const result = await getData();

  if (result.length > 0) {
    const dataTableBasic = new DataTable("#datatable-basic", {
      searchable: true,
      fixedHeight: true,
    });

    const tableRows = result.map((obj) => {
  const { firstName, lastName, email, company , phone,address} = obj;
  const fullAddress = `${address.address}, ${address.city}, ${address.state}, ${address.country}`;
//    const position = `${company.title}`;
   const ville = `${company.address.country}`;

  return [
    firstName,
    lastName,
    email,
    phone,
    fullAddress,
    ville,
    `
      <span class="mr-2">
        <i class="fas fa-plus"></i> 
      </span>
      <span class="mr-2">
        <i class="fas fa-edit"></i> 
      </span>
      <span>
        <i class="fas fa-trash"></i> 
      </span>
    `,
  ];
});

    if (tableRows) {
      dataTableBasic.rows.add(tableRows);
    }
  }
  // eslint-disable-next-line no-unused-vars
//   const dataTableSearch = new DataTable("#datatable-search", {
//     searchable: true,
//     fixedHeight: true,
//   });
});
</script>
<template>
  <div class="py-4 container-fluid">
    <div class="mt-4 row">
      <div class="col-12">
        <div class="card">
          <!-- Card header -->
          <div class="card-header">
            <h5 class="mb-0">List des Clients</h5>
            <!-- <p class="mb-0 text-sm">
              Rh, Buanderie, Menage, finance
            </p> -->
          </div>
          <div class="table-responsive">
            <table id="datatable-basic" class="table table-flush">
              <thead class="thead-light">
                <tr>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Prenom
                  </th>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Nom
                  </th>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Email
                  </th>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Telephone
                  </th>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Post
                  </th>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Pays
                  </th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                  Actions
                </th> 

                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
    
  </div>
</template>

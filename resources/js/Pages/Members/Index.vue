<template>
  <div>
    <Head title="Members" />
    <h1 class="mb-8 text-3xl font-bold">Soci</h1>
    <DataTable :value="members" :paginator="true" :rows="10" rowHover showGridlines filterDisplay="menu" :filters="filters" :globalFilterFields="['id', 'name', 'surname', 'fiscal_code', 'email']" selectionMode="single" @rowSelect="onRowSelect">
      <template #header>
        <div class="flex justify-between">
          <Button type="button" icon="pi pi-filter-slash" label="Svuota filtri" class="p-button-outlined" @click="clearFilter()" />
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="filters['global'].value" placeholder="Ricerca" />
          </span>
          <Button label="Nuovo socio" icon="pi pi-plus" iconPos="right" @click="$inertia.visit('/members/create')" />
        </div>
      </template>
      <Column v-for="col of columns" :field="col.field" :header="col.header" :sortable="col.sortable" :filterField="col.field" :key="col.field">
        <template #filter="{ filterModel, filterCallback }">
          <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" />
        </template>
      </Column>
      <Column>
        <template #body>
          <i class="pi pi-chevron-right" style="color: gray" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import { Head } from '@inertiajs/inertia-vue3'
import Layout from '@/Shared/Layout'
import { FilterMatchMode, FilterOperator } from 'primevue/api'

export default {
  components: {
    Head,
  },
  layout: Layout,
  props: ['members'],
  data() {
    return {
      filters: null,
      columns: [
        { field: 'id', header: 'ID', sortable: true },
        { field: 'name', header: 'Nome', sortable: true },
        { field: 'surname', header: 'Cognome', sortable: true },
        { field: 'fiscal_code', header: 'Codice Fiscale', sortable: true },
        { field: 'email', header: 'Email', sortable: true },
      ],
    }
  },
  created() {
    this.initFilters()
  },
  methods: {
    clearFilter() {
      this.initFilters()
    },
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        id: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        surname: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        fiscal_code: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        email: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
      }
    },
    onRowSelect(event) {
      this.$inertia.visit('members/'+event.data.id+'/edit');
    },
  },
}
</script>
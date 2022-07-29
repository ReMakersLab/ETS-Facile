<template>
  <div>
    <Head title="Members" />
    <h1 class="mb-8 text-3xl font-bold">Members</h1>
    <DataTable :value="members" :paginator="true" :rows="10" showGridlines filterDisplay="menu" :filters="filters" :globalFilterFields="['id', 'name', 'surname', 'fiscal_code', 'email']">
      <template #header>
        <div class="flex justify-between">
          <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined" @click="clearFilter()" />
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
          </span>
          <Button label="New member" icon="pi pi-plus" iconPos="right" @click="$inertia.visit('/members/create')" />
        </div>
      </template>
      <Column v-for="col of columns" :field="col.field" :header="col.header" :sortable="col.sortable" :filterField="col.field" :key="col.field">
        <template #filter="{ filterModel, filterCallback }">
          {{ filterModel }}
          <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" />
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
  props: ['members'],
  data() {
    return {
      filters: null,
      columns: [
        { field: 'id', header: 'Card ID', sortable: true },
        { field: 'name', header: 'Name', sortable: true },
        { field: 'surname', header: 'Surname', sortable: true },
        { field: 'fiscal_code', header: 'Fiscal Code', sortable: true },
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
        id: { value: null, matchMode: FilterMatchMode.EQUALS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        surname: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        fiscal_code: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        email: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
      }
    },
  },
  layout: Layout,
}
</script>
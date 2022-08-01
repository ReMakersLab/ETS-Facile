<template>
  <div>
    T: {{transactions}} <br>
    M: {{members}}
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
  props: ['transactions','members'],
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
    onRowSelect(event) {
      this.$inertia.visit('members/'+event.data.id+'/edit');
    },
  },
  layout: Layout,
}
</script>
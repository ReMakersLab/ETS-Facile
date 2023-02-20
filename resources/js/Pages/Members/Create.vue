<template>
  <div>
    <Head title="Nuovo Socio" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" href="/members">Soci</Link>
      <span class="text-indigo-400 font-medium">/</span> Nuovo
    </h1>
    <div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
      <form @submit.prevent="store">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <text-input v-model="form.name" :error="form.errors.name" class="pb-8 pr-6 w-full lg:w-1/2" label="Nome" />
          <text-input v-model="form.surname" :error="form.errors.surname" class="pb-8 pr-6 w-full lg:w-1/2" label="Cognome" />
          <text-input v-model="form.email" :error="form.errors.email" class="pb-8 pr-6 w-full lg:w-1/2" label="Email" />
          <calendar-input v-model="form.birth_date" :error="form.errors.birth_date" class="pb-8 pr-6 w-full lg:w-1/2" label="Data di Nascita" :maxDate="new Date()" dateFormat="dd/mm/yy"/>
          <text-input v-model="form.fiscal_code" :error="form.errors.fiscal_code" class="pb-8 pr-6 w-full lg:w-1/2" label="Codice Fiscale" />
          <text-input v-model="form.country" :error="form.errors.country" class="pb-8 pr-6 w-full lg:w-1/2" label="Paese" />
          <text-input v-model="form.region" :error="form.errors.region" class="pb-8 pr-6 w-full lg:w-1/2" label="Provincia/Stato" />
          <text-input v-model="form.city" :error="form.errors.city" class="pb-8 pr-6 w-full lg:w-1/2" label="Comune" />
          <text-input v-model="form.postal_code" :error="form.errors.postal_code" class="pb-8 pr-6 w-full lg:w-1/2" label="Codice Postale" />
          <text-input v-model="form.address" :error="form.errors.address" class="pb-8 pr-6 w-full lg:w-1/2" label="Indirizzo" />
          <text-input v-model="form.phone" :error="form.errors.phone" class="pb-8 pr-6 w-full lg:w-1/2" label="Cellulare" />
          <text-input v-model="form.tel" :error="form.errors.tel" class="pb-8 pr-6 w-full lg:w-1/2" label="Telefono" />
          <div class="field-checkbox pb-8 pr-6 w-full lg:w-1/2">
            <label for="approved">Approvato: </label>
            <checkbox inputId="approved" v-model="form.approved" :binary="true"/>
          </div>
        </div>
        <div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Salva</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/inertia-vue3'
import Layout from '@/Shared/Layout'
import TextInput from '@/Shared/TextInput'
import CalendarInput from '@/Shared/CalendarInput'
import SelectInput from '@/Shared/SelectInput'
import LoadingButton from '@/Shared/LoadingButton'

export default {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    CalendarInput,
  },
  layout: Layout,
  remember: 'form',
  data() {
    return {
      form: this.$inertia.form({
        name: null,
        surname: null,
        email: null,
        birth_date: null,
        fiscal_code: null,
        phone: null,
        tel: null,
        address: null,
        city: null,
        region: null,
        country: null,
        postal_code: null,
        approved: null,
      }),
    }
  },
  methods: {
    store() {
      this.form.post('/members')
    },
  },
}
</script>

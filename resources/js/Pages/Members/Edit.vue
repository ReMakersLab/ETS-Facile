<template>
  <div>
    <Head :title="form.name" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" href="/members">Soci</Link>
      <span class="text-indigo-400 font-medium">/</span>
      {{ form.name }}
    </h1>
    <trashed-message v-if="member.deleted_at" class="mb-6" @restore="restore"> Questo socio è stato rimosso. </trashed-message>
    <div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
      <form @submit.prevent="update">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <text-input v-model="form.card_number" readonly class="pb-8 pr-6 w-full" label="N° Tessera" />
          <text-input v-model="form.name" :error="form.errors.name" class="pb-8 pr-6 w-full lg:w-1/2" label="Nome" />
          <text-input v-model="form.surname" :error="form.errors.surname" class="pb-8 pr-6 w-full lg:w-1/2" label="Cognome" />
          <text-input v-model="form.email" :error="form.errors.email" class="pb-8 pr-6 w-full lg:w-1/2" label="Email" />
          <calendar-input v-model="form.birth_date" :error="form.errors.birth_date" class="pb-8 pr-6 w-full lg:w-1/2" label="Data di Nascita" :maxDate="new Date()" dateFormat="dd/mm/yy" />
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
            <checkbox inputId="approved" v-model="form.approved" :binary="true" v-if="member.approved ? false : true"/>
            <span v-else><i class="pi pi-check" style="color:green;"></i> Sì</span>
          </div>
        </div>
        <div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">
          <button v-if="!member.deleted_at" class="text-red-600 hover:underline" tabindex="-1" type="button" @click="destroy">Rimuovi socio</button>
          <loading-button :loading="form.processing" class="btn-indigo ml-auto" type="submit">Salva</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/inertia-vue3'
import Icon from '@/Shared/Icon'
import Layout from '@/Shared/Layout'
import TextInput from '@/Shared/TextInput'
import CalendarInput from '@/Shared/CalendarInput'
import SelectInput from '@/Shared/SelectInput'
import LoadingButton from '@/Shared/LoadingButton'
import TrashedMessage from '@/Shared/TrashedMessage'

export default {
  components: {
    Head,
    Icon,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    CalendarInput,
    TrashedMessage,
  },
  layout: Layout,
  props: {
    member: Object,
  },
  computed: {
    formattedBirthDate() {
      if (!this.member.birth_date) return null
      let date = new Date(this.form.birth_date)
      console.log('date', date)
      return date.toLocaleDateString()
    },
  },
  remember: 'form',
  data() {
    return {
      form: this.$inertia.form({
        card_number: this.member.card_number,
        name: this.member.name,
        surname: this.member.surname,
        fiscal_code: this.member.fiscal_code,
        email: this.member.email,
        phone: this.member.phone,
        tel: this.member.tel,
        address: this.member.address,
        city: this.member.city,
        region: this.member.region,
        country: this.member.country,
        postal_code: this.member.postal_code,
        birth_date: new Date(this.member.birth_date).toLocaleDateString(),
        approved: this.member.approved ? true : false
      }),
    }
  },
  methods: {
    update() {
      this.form.put(`/members/${this.member.id}`)
    },
    destroy() {
      this.$confirm.require({
        message: 'Are you sure you want to delete this member?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.$inertia.delete(`/members/${this.member.id}`)
        },
        reject: () => {
          //callback to execute when user rejects the action
        },
      })
    },
    restore() {
      this.$confirm.require({
        message: 'Are you sure you want to restore this member?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.$inertia.put(`/members/${this.member.id}/restore`)
        },
        reject: () => {
          //callback to execute when user rejects the action
        },
      })
    },
  },
}
</script>

<template>
  <div>
    <Head :title="form.name" />
    Member
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" href="/members">members</Link>
      <span class="text-indigo-400 font-medium">/</span>
      {{ form.name }}
    </h1>
    <trashed-message v-if="member.deleted_at" class="mb-6" @restore="restore"> This member has been deleted. </trashed-message>
    <div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
      <form @submit.prevent="update">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <text-input v-model="form.name" :error="form.errors.name" class="pb-8 pr-6 w-full lg:w-1/2" label="Name" />
          <text-input v-model="form.surname" :error="form.errors.surname" class="pb-8 pr-6 w-full lg:w-1/2" label="Surname" />
          <text-input v-model="form.email" :error="form.errors.email" class="pb-8 pr-6 w-full lg:w-1/2" label="Email" />
          <calendar-input v-model="form.birth_date" :error="form.errors.birth_date" class="pb-8 pr-6 w-full lg:w-1/2" label="Birth Date" :maxDate="new Date()" dateFormat="dd/mm/yy" />
          <text-input v-model="form.fiscal_code" :error="form.errors.fiscal_code" class="pb-8 pr-6 w-full lg:w-1/2" label="Fiscal Code" />
          <text-input v-model="form.country" :error="form.errors.country" class="pb-8 pr-6 w-full lg:w-1/2" label="Country" />
          <text-input v-model="form.region" :error="form.errors.region" class="pb-8 pr-6 w-full lg:w-1/2" label="Province/State" />
          <text-input v-model="form.city" :error="form.errors.city" class="pb-8 pr-6 w-full lg:w-1/2" label="City" />
          <text-input v-model="form.postal_code" :error="form.errors.postal_code" class="pb-8 pr-6 w-full lg:w-1/2" label="Postal Code" />
          <text-input v-model="form.address" :error="form.errors.address" class="pb-8 pr-6 w-full lg:w-1/2" label="Address" />
          <text-input v-model="form.phone" :error="form.errors.phone" class="pb-8 pr-6 w-full lg:w-1/2" label="Phone" />
          <text-input v-model="form.tel" :error="form.errors.tel" class="pb-8 pr-6 w-full lg:w-1/2" label="Tel" />
        </div>
        <div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">
          <button v-if="!member.deleted_at" class="text-red-600 hover:underline" tabindex="-1" type="button" @click="destroy">Delete member</button>
          <loading-button :loading="form.processing" class="btn-indigo ml-auto" type="submit">Update member</loading-button>
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

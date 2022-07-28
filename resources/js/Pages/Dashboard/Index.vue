<template>
  <div>
    <Head title="Dashboard" />
    <h1 class="mb-8 text-3xl font-bold">Dashboard</h1>
    <Knob v-model="knobby" />
    <DataTable :value="cars">
      <Column field="vin" header="Vin"></Column>
      <Column field="year" header="Year"></Column>
      <Column field="brand" header="Brand"></Column>
      <Column field="color" header="Color"></Column>
    </DataTable>
    <Chart type="bar" :data="basicData" />
  </div>
</template>

<script>
import { Head } from '@inertiajs/inertia-vue3'
import Layout from '@/Shared/Layout'

export default {
  components: {
    Head,
  },
  data() {
    return {
      knobby: 50,
      cars: [
        {"brand": "Volkswagen", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
        {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
        {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
        {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
        {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
        {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
        {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
        {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
    ],
    basicData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [
					{
						label: 'My First dataset',
						backgroundColor: '#42A5F5',
						data: [65, 59, 80, 81, 56, 55, 40]
					},
					{
						label: 'My Second dataset',
						backgroundColor: '#9CCC65',
						data: [28, 48, 40, 19, 86, 27, 90]
					}
				]
			}
    }
  },
  layout: Layout,
}
</script>

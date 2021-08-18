<template>
  <div>
    <v-row
      class="ml-16 container d-flex"
    >
      <v-col
        sm="6"
        cols="3"
      >
        <v-card-text
          style="font-weight: 400; font-size: 18px"
          class="flex-row"
        >
          Total Executed Quo <span style="font-weight: 800;"> {{ totEx }} </span>
        </v-card-text>
      </v-col>
      <v-col
        sm="6"
        cols="3"
        class="d-flex"
      >
        <v-card-text
          style="font-weight: 400; font-size: 18px"
          class="flex-row"
        >
          Total In Progress Quo <span style="font-weight: 800;"> {{ totIn }} </span>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row
      class="ml-16 container d-flex"
    >
      <v-col
        sm='6'
        cols='2'
        md='5'
        style="padding: 0"
      >
        <v-card
          elevation="2"
          outlined
          class="container"
          style="height: 150px;display: flex; align-items:center; justify-content: center; border-width: 10px 0 0 0; border-style: solid; border-color: Aquamarine;"
        >
          <v-row
            style="justify-content:center"
          >
            <v-col
              sm='3'
              cols="2"
              style="border-width: 0 1px 0 0;border-style: solid; border-color: #b8b8b8; padding: 0"
            >
              <v-card-title
                style="font-size:15px; border-width: 0 0 2px 0; border-style: solid; border-color: green; padding: 0; max-width: 150px"
                class='mt-4 mb-5 mr-4'
              >
                Import Executed
              </v-card-title>
              <v-card-text
                style="font-size:20px; font-weight:bold; padding: 0"
                class='mt-3'
              >
                {{ importEx }}
              </v-card-text>
            </v-col>
            <v-col
              sm='3'
              cols="2"
              class="ml-6 mr-6"
              style="border-width: 0 1px 0 0;border-style: solid; border-color: #b8b8b8; padding: 0"
            >
              <v-card-title
                style="font-size:15px; border-width: 0 0 2px 0; border-style: solid; border-color: orange; padding: 0; max-width: 150px"
                class='mt-4 mb-5 mr-4'
              >
                Export Executed
              </v-card-title>
              <v-card-text
                style="font-size:20px; font-weight:bold; padding: 0"
                class='mt-3'
              >
                {{ exportEx }}
              </v-card-text>
            </v-col>
            <v-col
              sm='3'
              cols="2"
              style="padding: 0"
            >
              <v-card-title
                style="font-size:15px; border-width: 0 0 2px 0; border-style: solid; border-color: blue; padding: 0; max-width: 150px"
                class='mt-4 mb-5'
              >
                Domestic Executed
              </v-card-title>
              <v-card-text
                style="font-size:20px; font-weight:bold; padding: 0"
                class='mt-3'
              >
                {{ domesticEx }}
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col
        sm="1"
        cols='3'
      >
      </v-col>
      <v-col
        sm='6'
        cols='2'
        md='5'
        style="padding: 0"
      >
        <v-card
          elevation="2"
          outlined
          class="container"
          style="height: 150px;display: flex; align-items:center; justify-content: center;border-width: 10px 0 0 0; border-style: solid; border-color: red;"
        >
          <v-row
            style="justify-content:center"
          >
            <v-col
              sm='3'
              cols="2"
              style="border-width: 0 1px 0 0;border-style: solid; border-color: #b8b8b8; padding: 0"
            >
              <v-card-title
                style="font-size:14px; border-width: 0 0 2px 0; border-style: solid; border-color: green; padding: 0; max-width: 150px"
                class='mt-4 mb-5 mr-4'
              >
                Import In Progress
              </v-card-title>
              <v-card-text
                style="font-size:20px; font-weight:bold; padding: 0"
                class='mt-3'
              >
                {{ importIn }}
              </v-card-text>
            </v-col>
            <v-col
              sm='3'
              cols="2"
              class="ml-6 mr-6"
              style="border-width: 0 1px 0 0;border-style: solid; border-color: #b8b8b8; padding: 0"
            >
              <v-card-title
                style="font-size:14px; border-width: 0 0 2px 0; border-style: solid; border-color: orange; padding: 0; max-width: 150px"
                class='mt-4 mb-5 mr-4'
              >
                Export In Progress
              </v-card-title>
              <v-card-text
                style="font-size:20px; font-weight:bold; padding: 0"
                class='mt-3'
              >
                {{ exportIn }}
              </v-card-text>
            </v-col>
            <v-col
              sm='3'
              cols="2"
              style="padding: 0"
            >
              <v-card-title
                style="font-size:14px; border-width: 0 0 2px 0; border-style: solid; border-color: blue; padding: 0; max-width: 150px"
                class='mt-4 mb-5'
              >
                Domestic In Progress
              </v-card-title>
              <v-card-text
                style="font-size:20px; font-weight:bold; padding: 0"
                class='mt-3'
              >
                {{ domesticIn }}
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      class="ml-16 container d-flex"
    >
      <v-col
        sm="9"
        cols="3"
      >
        <v-card-text
          style="font-size:14px; opacity:0; padding: 2px"
        >
          DIVIDER
        </v-card-text>
        <v-card-text
          style="font-weight:bold; font-size:25px"
        >
          Profit Chart
        </v-card-text>
      </v-col>
      <v-col
        sm="2"
        cols="3"
      >
        <v-card-text
          style="font-size:18px; padding: 2px"
        >
          Sort by
        </v-card-text>
        <v-select
          :items="['Jan - Jun 2020', 'Jul - Des 2020']"
          v-model="sort"
          outlined
        >  
        </v-select>
      </v-col>
    </v-row>
    <v-row
      class="ml-16 container d-flex"
    >
      <v-col
        sm="12"
      >
        <chart height="400"></chart>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import chart from '@/components/charts/lineChart.vue'

export default {
  name: 'dashboard',
  components: {
    chart
  },
  meta: {
    crumbs: [
      {
        text: 'Dashboard',
        to: 'marketing/dashboard',
        disabled: false
      }
    ]
  },
  data () {
    return {
      sort: 'Jan - Jun 2020',
      importEx: 0,
      exportEx: 0,
      domesticEx: 0,
      importIn: 0,
      exportIn: 0,
      domesticIn: 0,
      totEx: 0,
      totIn: 0
    }
  },
  methods: {
    async getData () {
      try {
        const response = await this.$axios.get('quotation')
        if (response.status === 200) {
          const { data } = response.data
          data.forEach((el) => {
            if (el.status === 'executed' && el.type === 'import') {
              this.importEx++
              this.totEx++
            } else if (el.status === 'executed' && el.type === 'export') {
              this.exportEx++
              this.totEx++
            } else if (el.status === 'executed' && el.type === 'domestic') {
              this.domesticEx++
              this.totEx++
            } else if (el.status === 'in progress' && el.type === 'import') {
              this.importIn++
              this.totIn++
            } else if (el.status === 'in progress' && el.type === 'export') {
              this.exportIn++
              this.totIn++
            } else if (el.status === 'in progress' && el.type === 'domestic') {
              this.domesticIn++
              this.totIn++
            }
          })
          console.log(data, 'ini data-quotation')
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load all data quotation ${message}`)
      } 
    }
  },
  created() {
    this.getData()
  },
  middleware: 'marketingscl'
}
</script>

<style>

</style>

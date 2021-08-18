<template>
  <div>
    <v-row
      class="ml-10 mr-10"
    >
      <v-col
        sm="1"
        cols="3"
      >
        <p>
          testing
        </p>
        <v-btn
          class="ml-6"
          text
          style="background-color:#ffffff"
          color="error"
          @click="goBack"
        >
          Back
        </v-btn>
      </v-col>
      <v-col
        sm="1"
        cols="3"
      >
        <p>
          testing
        </p>
        <v-btn
          color="primary"
          @click="add"
        >
          Add JO
        </v-btn>
      </v-col>
      <v-col
        sm="2"
        cols="3"
        class="mr-n14"
      >
        <p>
          testing
        </p>
      </v-col>
      <v-col
        sm="1"
        cols="3"
      >
        <p>
          testing
        </p>
      </v-col>
      <v-col
        sm="3"
        cols="3"
      >
      </v-col>
      <v-col
        sm="3"
        cols="3"
      >
        <p>
          testing
        </p>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          outlined
          hide-details
        ></v-text-field>
      </v-col>
      <v-col
        sm="1"
        cols="3"
      >
        <v-card-text
          style="padding: 0px; margin-bottom: 16px;font-size: 18px"
        >
          Row Page
        </v-card-text>
        <v-text-field
          type="number"
          outlined
          v-model="itemsPerPage"
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row
      class="ml-10 mr-10"
    >
      <v-col
        sm="12"
        cols="3"
      >
        <v-data-table
          v-model="selected"
          :headers="headers"
          :single-select="singleSelect"
          :items="filtered"
          :search="search"
          hide-default-footer
          :items-per-page="itemsPerPage"
          item-key="jo_number"
          show-select
        ></v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'add jo',
  meta: {
    crumbs: [
      {
        text: 'Job Order Consolidation',
        to: '/admin/joc',
        disabled: false
      },
      {
        text: 'Add Job Order Consol',
        to: '/admin/joc/data',
        disabled: true
      }
    ]
  },
  middleware: 'adminscl',
  data () {
    return {
      singleSelect: false,
      search: '',
      selected: [],
      itemsPerPage: 10,
      headers: [
        {
          text: 'JO Number',
          align: 'start',
          filterable: false,
          value: 'jo_number',
        },
        { text: 'Customer Name', value: 'customer_name' },
        { text: 'B/L', value: 'bl_number' },
        { text: 'MBL', value: 'mbl_number' },
        { text: 'No. Cont', value: 'no_container' },
        { text: 'Vessel', value: 'jo_number' },
        { text: 'Discharge', value: 'discharge' },
        { text: 'Status', value: 'status' }
      ],
      data: [],
      body: [],
      filtered: [],
      jo: '',
      jo_data: ''
    }
  },
  methods: {
    goBack () {
      this.$router.push({ path: '/admin/joc/data/' + this.$route.query.id })
    },
    async add () {
      this.selected.forEach(el => {
        el.no_quantity = el.no_container
        el.destination = el.delivery
        el.joc_number = this.$route.query.joc
      })
      await this.selected.forEach(el => {
        // try {
        //   const response = this.$axios.post('joc-data', el)
        //   if (response.status === 200) {
        //     console.log(response, 'berhasil ngab, responsenya masuk')
        //     this.$toast.global.app_success('successfully added jo')
        //     this.$router.push({ path: '/admin/joc/data/' + this.$route.query.id })
        //   }
        // }
        // catch (error) {
        //   this.$toast.global.app_error('you have not selected anything')
        //   console.log(error, 'ini errornya bro')
        // }
        return this.$axios.post('joc-data', el)
      })
      if (this.selected.length) {
        this.$toast.global.app_success('successfully added jo')
        this.$router.push({ path: '/admin/joc/data/' + this.$route.query.id })
      }
      else {
        this.$toast.global.app_error('you have not selected anything')
      }
      // console.log(this.selected, 'ini yang kepilih')
      // this.selected.forEach(el => {
      //   el.no_quantity = el.no_container
      //   el.joc_number = this.$route.query.joc
      // this.$toast.global.app_loading()
      // this.selected.forEach(el => {
      //   el.no_quantity = el.no_container
      //   el.joc_number = this.$route.query.joc
      // })
      // try {
      //   await this.selected.forEach(el => {
      //     const response = this.$axios.post('joc-data', el)
      //     if (response.status === 200) {
      //       this.$toast.clear()
      //       const { data } = console.log(data, 'ini hasilnya bila berhasil add jo')
      //     }
      //   })
      // } catch (error) {
      //   const response = error.response.data
      //   const message =
      //     response && response.message && ` , ${response.message}`
      //   this.$toast.global.app_error(`Failed to add job orders, ${message}`)
      // }
    },
    async getAll () {
      try {
        this.$toast.global.app_loading()
        const response = await this.$axios.get('job-order')
        if (response.status === 200) {
          const { data } = response.data
          this.$toast.clear()
          this.jo = data
          this.getData()
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load job orders, ${message}`)
      }
    },
    // async getData () {
    //   try {
    //     const response = await this.$axios.get('job-order')
    //     if (response.status === 200) {
    //       const { data } = response.data
    //       data.forEach((e) => {
    //         e.createdAt = e.createdAt.slice(0, 10)
    //         e.ETA = e.ETA.slice(0, 10)
    //       })
    //       console.log(this.data, 'ini hasil get all')
    //       this.jo_data = data
    //       // this.mergeAll()
    //     }
    //   } catch (error) {
    //     const response = error.response.data
    //     const message =
    //       response && response.message && ` , ${response.message}`
    //     this.$toast.global.app_error(`Failed to load all JO ${message}`)
    //   }
    // },
    async getData () {
      try {
        const response = await this.$axios.get('jo-data')
        if (response.status === 200) {
          const { data } = response.data
          data.forEach((e) => {
            e.createdAt = e.createdAt.slice(0, 10)
            e.ETA = e.ETA.slice(0, 10)
          })
          this.jo_data = data
          this.mergeAll()
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load all JO ${message}`)
      }
    },
    mergeAll () {
      console.log('fungsi merge kepanggil')
      function callback (This) { This.filter() }
      this.jo_data.map((el) => {
        const temp = this.jo.find(obj => (obj.jo_number === el.jo_number))
        if (temp) {
          this.$toast.clear()
          el.gross_profit_idr = 0
          el.gross_profit_usd = 0
          el.id_jo = temp.id
          el.joPayRequest = temp.joPayRequest
          el.joPayRequest.map(e => {
            e.totalCostUSD = 0
            e.totalCostIDR = 0
            if (e.CostPayRequests) {
              e.CostPayRequests.forEach(i => {
                if (i.currency === 'USD') {
                  e.totalCostUSD += i.price * i.quantity
                  el.gross_profit_usd -= e.totalCostUSD
                } else {
                  e.totalCostIDR += i.price * i.quantity
                  el.gross_profit_idr -= e.totalCostIDR
                }
              })
            }
          })
          el.joDebitNote = temp.joDebitNote
          el.joDebitNote.map(e => {
            e.totalCostUSD = 0
            e.totalCostIDR = 0
            if (e.DebitNoteCosts) {
              e.DebitNoteCosts.forEach(i => {
                if (i.currency === 'USD') {
                  e.totalCostUSD += i.price * i.quantity
                  el.gross_profit_usd += e.totalCostUSD
                } else {
                  e.totalCostIDR += i.price * i.quantity
                  el.gross_profit_idr += e.totalCostIDR
                }
              })
            }
          })
          el.invoice = temp.invoice
          el.invoice.forEach(e => {
            e.totalCostUSD = 0
            e.totalCostIDR = 0
            if (!e.InvoiceCosts) {
              e.totalCostUSD = 5000
              el.gross_profit_usd += e.totalCostUSD
              e.totalCostIDR = 71265000
              el.gross_profit_idr += e.totalCostIDR
            } else {
              e.InvoiceCosts.forEach(i => {
                if (i.currency === 'USD') {
                  e.totalCostUSD += i.price * i.quantity
                  el.gross_profit_usd -= e.totalCostUSD
                } else {
                  e.totalCostIDR += i.price * i.quantity
                  el.gross_profit_idr -= e.totalCostIDR
                }
              })
            }
          })
          el.joCreditNote = temp.joCreditNote
          el.joCreditNote.map(e => {
            e.totalCostUSD = 0
            e.totalCostIDR = 0
            if (e.CreditNoteCosts) {
              e.CreditNoteCosts.forEach(i => {
                if (i.currency === 'USD') {
                  e.totalCostUSD += i.price * i.quantity
                  el.gross_profit_usd -= e.totalCostUSD
                } else {
                  e.totalCostIDR += i.price * i.quantity
                  el.gross_profit_idr -= e.totalCostIDR
                }
              })
            }
          })
          el.customer_name = temp.customer_name
          el.joData = temp.joData
          this.body.push(el)
          // callback(this)
        }
        console.log(el, 'ini data table')
        return el
      })
      Promise.all(this.jo_data).then(callback(this))
    },
    async getJoc () {
      try {
        const response = await this.$axios.get('job-consol/' + this.$route.query.id)
        if (response.status === 200) {
          const { data } = response.data
          console.log(data, 'ini data get by id')
          this.data = data.jocData
          this.getAll()
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load JOC ${message}`)
      }
    },
    filter () {
      this.filtered = []
      console.log(this.body, 'ini data yang ada')
      console.log(this.data, 'ini data dari getJOC')
      // this.filtered = this.body.filter(el => !this.data.includes(el))
      if (this.data.length > 0) {
        console.log('ternyata dia ngefilter bro')
        // this.body.forEach(el => {
        //   this.data.forEach(e => {
        //     if (el.jo_number !== e.jo_number) {
        //       this.filtered.push(el)
        //       console.log(this.filtered, 'ini hasil filter')
        //     }
        //   })
        // })
        this.filtered = this.body.filter((el) => !this.data.find((e) => el.jo_number === e.jo_number))
      } else {
        console.log('dia masuknya kesini')
        this.filtered = this.body
      }
    }
  },
  created () {
    this.getJoc()
  }
}
</script>

<style>

p{
  opacity: 0;
}
</style>

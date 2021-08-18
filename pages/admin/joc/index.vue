<template>
  <div>
    <v-row>
      <v-col
        class="display-flex"
        sm="6"
        col='12'
      >
      <!-- filter data (butuh api) -->
        <v-card
          class="mx-auto mb-5"
          max-width="80%"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">
                FILTER DATA
              </div>
              <v-list-item-title class="headline mb-1">
                Filter by
              </v-list-item-title>
              <!-- <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> -->
              <!-- <v-col
                class="d-flex"
                cols="3"
                sm="6"
              > -->
              <v-row align="centre">
                <v-col
                  class="d-flex"
                  cols="3"
                  sm="3"
                >
                  <v-card-subtitle class="mb-n12 ml-n4"> Branch Office </v-card-subtitle>
                </v-col>
                <v-col
                  class="d-flex"
                  cols="3"
                  sm="3"
                >
                  <v-card-subtitle class="mb-n12 ml-n4"> ETD </v-card-subtitle>
                </v-col>
                <v-col
                  class="d-flex"
                  cols="3"
                  sm="3"
                >
                  <v-card-subtitle class="mb-n12 ml-n4"> ETA </v-card-subtitle>
                </v-col>
                <v-col
                  class="d-flex"
                  cols="3"
                  sm="3"
                >
                  <v-card-subtitle class="mb-n12 ml-n4" style="opacity: 0"> Type </v-card-subtitle>
                </v-col>
              </v-row>
              <v-row align="centre">
                <v-col
                  class="d-flex"
                  cols="3"
                  sm="3"
                >
                  <v-select
                    :items="items"
                    outlined
                  ></v-select>
                </v-col>
                <v-col
                class="d-flex"
                cols="3"
                sm="3"
                >
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="filterEtd"
                        label="dd/mm/yy"
                        clearable
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="filterEtd"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="menu = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col
                  class="d-flex"
                  cols="3"
                  sm="3"
                  >
                  <v-menu
                    ref="menu2"
                    v-model="menu2"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="filterEta"
                        hide-details="true"
                        clearable
                        label="dd/mm/yy"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="filterEta"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="menu2 = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu2.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col
                  class="d-flex"
                  cols="3"
                  sm="3"
                >
                  <v-btn
                    depressed
                    color="primary"
                    class="mt-3"
                    @click.prevent="submit_filter"
                  >
                    Filter now
                  </v-btn>
                </v-col>
              </v-row>
            <!-- </v-col> -->
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        class="d-flex mx-auto"
        sm="12"
        cols="12"
      >
        <v-card
          class="mx-auto mb-5 flex-container"
          width="90%"
          outlined
          style="background-color:#f5f5fb; border:0px;"
        >
          <v-row>
            <v-col
              sm="10"
              cols="12"
            >
              <p style="opacity: 0"> DIVIDER </p>
              <NuxtLink to='/admin/joc/create'>
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  height="56px"
                >
                  Add New
                  <v-icon class="ml-2">
                    mdi-plus-circle
                  </v-icon>
                </v-btn>
              </NuxtLink>
            </v-col>
            <v-col
              sm="2"
              cols="12"
            >
              <p> Row page </p>
              <v-text-field
                type="number"
                outlined
                v-model="itemsPerPage"
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <!-- <base-alert :status="true">
        test
      </base-alert> -->
    </v-row>
    <v-row>
      <v-col
        class="display-flex"
        sm="12"
        col='12'
      >
        <v-card
          class="mx-auto mb-5"
          max-width="90%"
          outlined
        >
          <v-card-title>
            Job order consolidation
            <!-- data dari table job order masih di hard code -->
            <v-spacer></v-spacer>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="filtered"
            :items-per-page="itemsPerPage"
            :loading="items"
            :search="search"
            style="width: 100%"
          >
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon
                small
                @click="editItem(item.id)"
              >
                mdi-pencil
              </v-icon>
              |
              <v-icon
                small
                @click="printItem(item)"
              >
                mdi-printer
              </v-icon>
              |
              <v-dialog
                v-model="dialog_delete"
                persistent
                :retain-focus="false"
                max-width="270px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    small
                    @click="deleteItem(item.id)"
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-delete
                  </v-icon>
                </template>
                    <!-- modal untuk update cost -->
                  <v-card
                    style='overflow:hidden;'
                  >
                    <v-form
                      @submit.prevent="destroyItem"
                    >
                    <v-card-title style="text-align-last: center; text-align: justify;" class="headline">
                      Are you sure to delete this item?
                    </v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog_delete = false"
                      >
                        Close
                      </v-btn>
                      <v-btn
                        color="red darken-1"
                        text
                        type="submit"
                      >
                        Yes
                      </v-btn>
                    </v-card-actions>
                    </v-form>
                  </v-card>
                </v-dialog>
            </template>
            <template v-slot:[`item.detail`]="{ item: { id } }">
              <v-btn
                text
                nuxt
                exact
                @click='detail(id)'
                class="text-capitalize"
              >
                Detail
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <!-- <base-modal>
      <template slot="body">
        test
      </template>
      <template slot="footer">
        test
      </template>
    </base-modal> -->
  </div>
</template>

<script>
export default {
  name: 'Job Order Consolidation',
  meta: {
    crumbs: [
      {
        text: 'Job Order Consolidation',
        to: '/admin/joc',
        disabled: false
      }
    ]
  },
  middleware: 'adminscl',
  methods: {
    async destroyItem () {
      try {
        const response = await this.$axios.delete('job-consol/' + this.id)
        if (response.status === 200) {
          this.dialog_delete = false
          this.getAll()
          this.$toast.global.app_success('successfully deleted job consol')
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to delete job consol, ${message}`)
      }
    },
    async getAll () {
      try {
        this.$toast.global.app_loading()
        const response = await this.$axios.get('job-consol')
        if (response.status === 200) {
          const { data } = response.data
          this.$toast.clear()
          console.log(data, 'ini hasil get all')
          data.forEach(el => {
            el.ETD = el.ETD.slice(0, 10)
            el.ETA = el.ETA.slice(0, 10)
            let etd = new Date(el.ETD)
            let formatted_date = etd.getDate() + "-" + (etd.getMonth() + 1) + '-' + etd.getFullYear()
            console.log(formatted_date, 'ini etd artifisial')
            el.FORMATTED_DATE = formatted_date
          });
          this.info = data
          this.submit_filter()
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load job orders, ${message}`)
      }
    },
    async getBranch () {
      try {
        const response = await this.$axios.get('data-branch')
        if (response.status === 200) {
          const { data } = response.data
          this.$toast.clear()
          console.log(data, 'ini hasil get all')
          data.forEach(el => {
            this.branch.push(el.branch_office_name)
          });
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load job orders, ${message}`)
      }
    },
    submit_filter () {
      
      console.log(this.filterEta, 'ini filter eta nya')
      console.log(this.filterEtd, 'ini filter etd nya')
      console.log(this.filterer, 'ini patokkan filter')
      // bikin search field yang patokkannya dari filterer (headers table)
      if (this.filterEta && !this.filterEtd && !this.filterBO) {
        this.filtered = this.info.filter((el) => el.ETA == this.filterEta)
      } else if (this.filterEtd && !this.filterEta && !this.filterBO) {
        this.filtered = this.info.filter((el) => el.ETD == this.filterEtd)
      } else if (this.filterEtd && this.filterEta && !this.filterBO) {
        this.filtered = this.info.filter((el) => el.ETD == this.filterEtd && el.ETA === this.filterEta)
      } else if (this.filterEtd && this.filterEta && this.filterBO) {
        this.filtered = this.info.filter((el) => el.ETD == this.filterEtd && el.ETA === this.filterEta && el.branch_office === this.filterBO)
      } else if (this.filterBO && !this.filterEta && !this.filterEtd) {
        this.filtered = this.info.filter((el) => el.branch_office == this.filterBO)
      } else if (this.filterBO && this.filterEta && !this.filterEtd) {
        this.filtered = this.info.filter((el) => el.branch_office == this.filterBO && el.ETA === this.filterEta)
      } else if (this.filterBO && this.filterEtd && !this.filterEta) {
        this.filtered = this.info.filter((el) => el.branch_office == this.filterBO && el.ETD === this.filterEtd)
      // } else if (this.search) {
      //   const head = this.filterer
      //   this.filtered = this.info.filter((el) => el.head === this.filterBO && el.ETD === this.filterEtd)
      } else {
        this.filtered = this.info
      }
    },
    // submit_filter () {
    //   if (this.filterEta) {
        
    //   } if (this.filterEtd) {

    //   } if (this.filterBO) {

    //   } if (this.search) {

    //   } else {
    //     this.filtered = this.info
    //   }
    // },
    detail (id) {
      console.log(id, 'ini id bawaan')
      this.$router.push({ path: '/admin/joc/data/' + id })
    },
    editItem (id) {
      this.$router.push({ path: '/admin/joc/edit/' + id })
    },
    deleteItem (id) {
      console.log(id, 'ini idnya bro')
      this.id = id
    }
  },
  data () {
    return {
      id: 0,
      dialog_delete: false,
      info: [],
      filterer: '',
      filterEta: '',
      filterEtd: '',
      filterBO: '',
      itemsPerPage: 10,
      menu: false,
      menu2: false,
      search: '',
      filtered: [],
      branch: [],
      headers: [
        {
          text: '#JOC.No',
          align: 'start',
          filterable: false,
          value: 'joc_number',
        },
        { text: 'MBL Number', value: 'no_mbl' },
        { text: 'Agent Name', value: 'agent' },
        { text: 'Type', value: 'type' },
        { text: 'ETD', value: 'FORMATTED_DATE' },
        { text: 'JO', value: 'quantity' },
        { text: 'Created', value: 'creator' },
        { text: 'Action', value: 'actions'},
        { text: '', value: 'detail'}
      ]
    }
  },
  created () {
    this.getAll()
    this.getBranch()
  }
}
</script>

<style>

</style>

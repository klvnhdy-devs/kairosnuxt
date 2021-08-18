<template>
  <div
    class="mb-10"
  >
    <v-form
      @submit.prevent="create"
    > 
      <v-row>
        <v-col
          sm='12'
          cols='3'
        >
          <v-card
            class="mx-auto"
            width="90%"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div
                  class="headline mb-3 mt-5"
                  style="color: #3273dc; font-weight: bold;"
                >
                  Quotation
                  <v-divider class="mt-5"></v-divider>
                  <!-- <p
                    class="overline"
                    style="color: black;"
                  >
                    No. Consol: -
                  </p> -->
                </div>
                <v-row>
                  <v-col
                    sm='6'
                    cols='3'
                    style="height: 536px;"
                  >
                    <v-row
                      style="height: 536px;"
                    >
                      <v-col
                        sm='6'
                        cols='3'
                      >
                        <v-card-text
                          style="padding: 1px; font-size: 18px"
                        >
                          #Quote Nox:
                        </v-card-text>
                        <!-- <v-radio-group
                          v-model="form.type"
                          row
                          class="mb-5"
                        >
                          <v-radio
                            label="Import"
                            value="import"
                          ></v-radio>
                          <v-radio
                            label="export"
                            value="export"
                          ></v-radio>
                        </v-radio-group> -->
                        <v-text-field
                          outlined
                          disabled
                          label="---Auto---"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col
                        sm='6'
                        cols='3'
                      >
                        <v-card-text
                          style="padding: 1px; font-size: 18px"
                        >
                          Quote Date
                        </v-card-text>
                        <!-- <v-radio-group
                          v-model="form.type"
                          row
                          class="mb-5"
                        >
                          <v-radio
                            label="Import"
                            value="import"
                          ></v-radio>
                          <v-radio
                            label="export"
                            value="export"
                          ></v-radio>
                        </v-radio-group> -->
                        <v-menu
                          v-model="menu"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              outlined
                              v-bind="attrs"
                              v-on="on"
                              disabled
                              v-model="date"
                            >
                            </v-text-field>
                          </template>
                          <v-date-picker
                            v-model="date"
                            @input="menu = false"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col
                        sm='12'
                        cols='3'
                      >
                        <v-card-text
                          style="padding: 1px; font-size: 18px"
                        >
                          Subject
                        </v-card-text>
                        <v-textarea
                          outlined
                          row-height="161px"
                          v-model="form.subject"
                        >
                        </v-textarea>
                        <!-- <v-text-field
                          class="mb-7"
                          v-model="form.no_bl"
                          :rules="rules"
                          hide-details="auto"
                          outlined
                        ></v-text-field> -->
                      </v-col>
                      <!-- <v-col
                        sm='6'
                        cols='3'
                      > -->
                        <!-- <v-card-text
                          style="padding: 1px; font-size: 18px"
                        >
                          No. MBL
                        </v-card-text>
                        <v-text-field
                          class="mb-7"
                          v-model="form.no_mbl"
                          :rules="rules"
                          hide-details="auto"
                          outlined
                        ></v-text-field> -->
                      <!-- </v-col> -->
                      <v-col
                        sm='6'
                        cols='3'
                      >
                        <v-card-text
                          style="padding: 1px; font-size: 18px"
                        >
                          Type
                        </v-card-text>
                        <v-select
                          class="mb-5"
                          v-model="form.type"
                          :items="type"
                          :rules="rules"
                          hide-details="auto"
                          outlined
                        ></v-select>
                      </v-col>
                      <v-col
                        sm='6'
                        cols='3'
                      >
                        <v-card-text
                          style="padding: 1px; font-size: 18px; opacity: 0"
                        >
                          DIVIDER
                        </v-card-text>
                        <v-select
                          class="mb-5"
                          v-model="form.consol"
                          :items="type2"
                          :rules="rules"
                          hide-details="auto"
                          outlined
                        ></v-select>
                      </v-col>
                      <!-- <v-col
                        sm='12'
                        cols='3'
                      >
                        <v-card-text
                          style="padding: 1px; font-size: 18px"
                        >
                          No. Container
                        </v-card-text>
                        <v-text-field
                          class="mb-10"
                          v-model="form.no_container"
                          :rules="rules"
                          hide-details="auto"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col
                        sm='10'
                        cols='3'
                      >
                        <v-card-text
                          style="padding: 1px; font-size: 18px"
                        >
                          Type Container
                        </v-card-text>
                        <v-text-field
                          class="mb-5"
                          v-model="form.type_container"
                          :rules="rules"
                          hide-details="auto"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col
                        sm='2'
                        cols='3'
                      >
                        <v-card-text
                          style="padding: 1px; font-size: 18px; opacity: 0"
                        >
                          Divider
                        </v-card-text>
                        <v-select v-model="form.qty_container" :items="qty" outlined></v-select>
                      </v-col> -->
                    </v-row>
                  </v-col>
                  <v-col
                    sm='6'
                    cols="3"
                  >
                    <v-row
                      style="height: 536px;"
                    >
                      <v-col
                        sm='6'
                        cols="1"
                      >
                        <v-card-text
                          style="padding: 1px; font-size: 18px;"
                        >
                          Expires Date
                        </v-card-text>
                        <v-menu
                          v-model="menu2"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              outlined
                              v-bind="attrs"
                              readonly
                              v-on="on"
                              v-model="form.expires_date"
                            >
                            </v-text-field>
                          </template>
                          <v-date-picker
                            v-model="form.expires_date"
                            @input="menu2 = false"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col
                        sm='6'
                        cols="3"
                      >
                        <v-card-text
                          style="padding: 1px; font-size: 18px;"
                        >
                          Terms of payment
                        </v-card-text>
                        <v-select
                          v-model="form.terms_payment"
                          :items="terms"
                          outlined
                        ></v-select>
                      </v-col>
                      <v-col
                        sm='6'
                        cols="1"
                      >
                        <v-card-text
                          style="padding: 1px; font-size: 18px;"
                        >
                          ETD/ETA
                        </v-card-text>
                        <v-menu
                          v-model="menu3"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              outlined
                              v-bind="attrs"
                              readonly
                              v-on="on"
                              v-model="form.etd"
                            >
                            </v-text-field>
                          </template>
                          <v-date-picker
                            v-model="form.etd"
                            @input="menu3 = false"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col
                        sm='6'
                        cols="3"
                      >
                        <v-card-text
                          style="padding: 1px; font-size: 18px;"
                        >
                          Kurs
                        </v-card-text>
                        <v-text-field
                          type="number"
                          v-model="form.kurs"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col
                        sm='12'
                        cols="3"
                      >
                        <v-card-text
                          style="padding: 1px; font-size: 18px;"
                        >
                          Destination Origin
                        </v-card-text>
                        <v-select
                          v-model="form.destination_origin"
                          :items="ports"
                          outlined
                        ></v-select>
                      </v-col>
                      <v-col
                        sm="12"
                        cols="3"
                      >
                        <v-card-text
                          style="padding: 1px; font-size: 18px;"
                        >
                          Customer Name
                        </v-card-text>
                        <v-select
                          v-model="form.customer_name"
                          :items="customers"
                          outlined
                        ></v-select>
                      </v-col>
                      <!-- <v-col
                        sm="4"
                        cols="3"
                      >
                        <v-card-text
                          style="padding: 1px; font-size: 18px;"
                        >
                          ETA
                        </v-card-text>
                        <v-menu
                          ref="eta"
                          v-model="eta"
                          :close-on-content-click="true"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="form.eta"
                              prepend-icon="mdi-calendar"
                              readonly
                              label="dd/mm/yy"
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            ref="picker"
                            v-model="form.eta"
                            :min="form.etd"
                            @change="save"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col
                        sm="4"
                        cols="3"
                      >
                        <v-card-text
                          style="padding: 1px; font-size: 18px;"
                        >
                          Quantity
                        </v-card-text>
                        <v-text-field v-model="form.quantity" type="number" outlined></v-text-field>
                      </v-col> -->
                    </v-row>
                    <!-- <v-row>
                      <v-col
                        sm="3"
                        cols="3"
                      >
                        <v-card-text
                          style="padding: 1px; font-size: 18px;"
                        >
                          Weight
                        </v-card-text>
                        <v-text-field v-model="form.weight" type="number" outlined></v-text-field>
                      </v-col>
                      <v-col
                        sm="3"
                        cols="3"
                      >
                        <v-card-text
                          style="padding: 1px; font-size: 18px;"
                        >
                          Measurement
                        </v-card-text>
                        <v-text-field v-model="form.measurement" type="number" outlined></v-text-field>
                      </v-col>
                    </v-row> -->
                  </v-col>
                </v-row>
                <hr>
                <v-row
                  class="mt-5"
                  v-if="form.type === 'import'"
                >
                  <v-col
                    sm='12'
                    cols='3'
                  >
                    <v-btn color="primary">List plafond<v-icon>mdi-chat-outline</v-icon></v-btn>
                  </v-col>
                  <v-col
                    sm="3"
                    cols="2"
                  >
                    <v-card-text
                      style="padding: 1px; font-size: 18px;"
                    >
                      Others <span style="font-weight: bold;">(USD/set)</span>
                    </v-card-text>
                    <v-text-field
                      type="number"
                      v-model="form.others"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    sm="3"
                    cols="2"
                  >
                    <v-card-text
                      style="padding: 1px; font-size: 18px;"
                    >
                      CFS <span style="font-weight: bold;">(USD/CBM)</span>
                    </v-card-text>
                    <v-text-field
                      v-model="form.CFS"
                      type="number"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    sm="3"
                    cols="2"
                  >
                    <v-card-text
                      style="padding: 1px; font-size: 18px;"
                    >
                      Mechanic <span style="font-weight: bold;">(IDR/CBM)</span>
                    </v-card-text>
                    <v-text-field
                      v-model="form.Mechanic"
                      type="number"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    sm="3"
                    cols="2"
                  >
                    <v-card-text
                      style="padding: 1px; font-size: 18px;"
                    >
                      Adm <span style="font-weight: bold;">(IDR/BL)</span>
                    </v-card-text>
                    <v-text-field
                      v-model="form.Adm"
                      type="number"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    sm="3"
                    cols="2"
                  >
                    <v-card-text
                      style="padding: 1px; font-size: 18px;"
                    >
                      Ocean Freight
                    </v-card-text>
                    <v-text-field
                      v-model="form.ocean_freight"
                      type="number"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row
                  class="mt-5"
                  v-else-if="form.type === 'export'"
                >
                  <v-col
                    sm="3"
                    cols="2"
                  >
                    <v-card-text
                      style="padding: 1px; font-size: 18px;"
                    >
                      Agent Rate <span style="font-weight: bold;">(USD)</span>
                    </v-card-text>
                    <v-text-field
                      type="number"
                      v-model="form.agen_rate"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    sm="3"
                    cols="2"
                  >
                    <v-card-text
                      style="padding: 1px; font-size: 18px;"
                    >
                      Special Rate <span style="font-weight: bold;">(USD)</span>
                    </v-card-text>
                    <v-text-field
                      v-model="form.special_rate"
                      type="number"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col
                    sm="3"
                    cols="2"
                  >
                    <v-card-text
                      style="padding: 1px; font-size: 18px;"
                    >
                      LSS <span style="font-weight: bold;">(USD)</span>
                    </v-card-text>
                    <v-text-field
                      v-model="form.LSS"
                      type="number"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <!-- <v-btn
                outlined
                rounded
                text
              >
                Button
              </v-btn> -->
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          sm='12'
          cols='3'
        >
          <v-card
            class="mx-auto"
            width="90%"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div
                  class="headline mb-3 mt-5"
                  style="color: #3273dc; font-weight: bold;"
                >
                  Deskripsi
                  <v-divider class="mt-5"></v-divider>
                  <!-- <p
                    class="overline"
                    style="color: black;"
                  >
                    No. Consol: -
                  </p> -->
                </div>
                  <v-row
                    class="mt-4"
                  >
                    <v-col
                      sm="6"
                      cols="12"
                    >
                      <v-card-text
                        style="padding: 1px; font-size: 18px;"
                      >
                        Header
                      </v-card-text>
                      <v-textarea
                        outlined
                        v-model="form.deskripsi_header"
                      >
                      </v-textarea>
                    </v-col>
                    <v-col
                      sm="6"
                      cols="12"
                    >
                      <v-card-text
                        style="padding: 1px; font-size: 18px;"
                      >
                        Footer
                      </v-card-text>
                      <v-textarea
                        outlined
                        v-model="form.deskripsi_footer"
                      >
                      </v-textarea>
                    </v-col>
                  </v-row>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <!-- <v-btn
                outlined
                rounded
                text
              >
                Button
              </v-btn> -->
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          sm='12'
          cols="3"
        >
          <v-card
            width="90%"
            class="mx-auto"
            outlined
            style="background-color:#f5f5fb; border:0"
          >
            <v-btn
              style="color:red; margin-left: 80%"
            >
              Cancel
            </v-btn>
            <!-- <NuxtLink to='/admin/joc/data'> -->
            <v-btn
              type="submit"
              color="primary"
              dark
              class="ml-12"
            >
              Save
            </v-btn>
            <!-- </NuxtLink> -->
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'create',
  middleware: 'marketingscl',
  data () {
    return {
      form: {},
      type: ['import', 'export'],
      type2: ['consol', 'coloud'],
      menu2: false,
      menu: false,
      ports: [],
      customers: [],
      menu3: false,
      terms: ['7 Days', '14 Days', '30 Days', '60 Days', '90 Days', '0'],
      date: new Date().toISOString().substr(0, 10),
      // form etd dan eta disamain
    }
  },
  methods: {
    async create () {
      try {
        this.form.eta = this.form.etd
        this.form.creator = this.$auth.user.name
        this.form.branch_office = this.$auth.user.branch_office
        this.form.status = 'in progress'
        const response = await this.$axios.post('quotation', this.form)
        if (response.status === 200) {
          const { data } = response.data
          console.log(data, 'ini hasil berhasil create quotation')
          this.$toast.global.app_success('successfuly created quotatioin')
          this.$router.push({ path: '/marketing/detail/' + data.id})
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to create quotation ${message}`)
      }
    },
    async getPorts () {
      try {
        const response = await this.$axios.get('data-port')
        if (response.status === 200) {
          const { data } = response.data
          console.log(data, 'ini data data port')
          data.forEach(el => {
            this.ports.push(el.port_name)
          });
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load ports, ${message}`)
      }
    },
    async getCust () {
      try {
        const response = await this.$axios.get('data-partner')
        if (response.status === 200) {
          const { data } = response.data
          data.forEach((element) => {
            this.customers.push(element.company_name)
          })
          console.log(data, 'ini data-partner')
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load all data partners ${message}`)
      }
    }
  },
  created () {
    this.getPorts()
    this.getCust()
  }
}
</script>

<style>

</style>

<template>
  <div
    class="mb-10"
  >
    <v-row>
      <v-col
        sm="12"
        cols="3"
      >
        <!-- header untuk tombol dan base alerts -->
        <v-card
          class="mx-auto"
          width="90%"
          outlined
          style="background-color:#f5f5fb; border:0px;"
        >
          <v-row>
            <v-col
              sm="2"
              cols="3"
            >
              <base-alert
                :status='true'
              >
              <!-- status masih hardcode -->
                Status: {{ form.status }}
              </base-alert>
            <!-- buttons buttons edit execute dsb -->
            </v-col>
            <v-col
              sm="3"
            >
            </v-col>
            <v-col
              sm="2"
              style="max-width:170px"
            >
              <v-dialog
                v-model="dialog_duplicate"
                persistent
                :retain-focus="false"
                max-width="270px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn 
                    class="ma-2"
                    text
                    light
                    disabled
                    style="opacity: 0"
                    elevation="1"
                    v-bind="attrs"
                    v-on="on"
                    color="indigo"
                  >
                    Duplicate <v-icon class="ml-2">mdi-file-multiple-outline</v-icon>
                  </v-btn>
                </template>
                <!-- modal untuk duplicate cost -->
                <v-card
                  style='overflow:hidden;'
                >
                  <v-form
                    @submit.prevent="duplicate"
                  >
                  <v-card-title style="text-align-last: center; text-align: justify;" class="headline">
                    Are you sure to duplicate this item?
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="dialog_duplicate = false"
                    >
                      Close
                    </v-btn>
                    <v-btn
                      color="primary darken-1"
                      text
                      type="submit"
                    >
                      Yes
                    </v-btn>
                  </v-card-actions>
                  </v-form>
                </v-card>
              </v-dialog>
            </v-col>
            <v-col
              sm="1"
            >
              <v-dialog
                v-model="dialog_edit"
                persistent
                :retain-focus="false"
                max-width="270px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn 
                    class="ma-2 ml-n1"
                    light
                    style="opacity: 0"
                    elevation="1"
                    v-bind="attrs"
                    disabled
                    v-on="on"
                    color="warning"
                  >
                    edit <v-icon class="ml-2">mdi-file-document-edit-outline</v-icon>
                  </v-btn>
                </template>
                <!-- modal untuk duplicate cost -->
                <v-card
                  style='overflow:hidden;'
                >
                  <v-form
                    @submit.prevent="enable"
                  >
                  <v-card-title style="text-align-last: center; text-align: justify;" class="headline">
                    Are you sure to edit this item?
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="dialog_edit = false"
                    >
                      Close
                    </v-btn>
                    <v-btn
                      color="primary darken-1"
                      text
                      type="submit"
                    >
                      Yes
                    </v-btn>
                  </v-card-actions>
                  </v-form>
                </v-card>
              </v-dialog>
            </v-col>
            <v-col
              sm="1"
            >
              <v-dialog
                v-model="dialog_execute"
                persistent
                :retain-focus="false"
                max-width="282px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn 
                    class="ma-2 ml-n5"
                    light
                    style="opacity: 0"
                    disabled
                    elevation="1"
                    v-bind="attrs"
                    v-on="on"
                    color="success"
                  >
                    execute <v-icon class="ml-2">mdi-checkbox-multiple-marked-outline</v-icon>
                  </v-btn>
                </template>
                <!-- modal untuk duplicate cost -->
                <v-card
                  style='overflow:hidden;'
                >
                  <v-form
                    @submit.prevent="execute"
                  >
                  <v-card-title style="text-align-last: center; text-align: justify;" class="headline">
                    Are you sure to execute this quotation?
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="error darken-1"
                      text
                      @click="dialog_execute = false"
                    >
                      Close
                    </v-btn>
                    <v-btn
                      color="primary darken-1"
                      text
                      type="submit"
                    >
                      Yes
                    </v-btn>
                  </v-card-actions>
                  </v-form>
                </v-card>
              </v-dialog>
            </v-col>
            <v-col
              sm="1"
            >
              <v-btn
                class="ma-2 ml-n1"
                elevation="1"
                color="primary"
              >
                Print <v-icon>mdi-printer</v-icon>
              </v-btn>
            </v-col>
            <v-col
              sm="1"
            >
              <v-dialog
                v-model="dialog_delete"
                persistent
                :retain-focus="false"
                max-width="270px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn 
                    class="ma-2 ml-n5"
                    light
                    elevation="1"
                    v-bind="attrs"
                    v-on="on"
                    color="error"
                  >
                    delete <v-icon class="ml-2">mdi-delete</v-icon>
                  </v-btn>
                </template>
                <!-- modal untuk duplicate cost -->
                <v-card
                  style='overflow:hidden;'
                >
                  <v-form
                    @submit.prevent="destroy"
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
                      color="primary darken-1"
                      text
                      type="submit"
                    >
                      Yes
                    </v-btn>
                  </v-card-actions>
                  </v-form>
                </v-card>
              </v-dialog>
            </v-col>
            <v-col
              sm="1"
            >
              <v-dialog
                v-model="dialog_create"
                persistent
                :retain-focus="false"
                max-width="270px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn 
                    class="ma-2 ml-n4"
                    light
                    elevation="1"
                    v-bind="attrs"
                    :disabled="form.status === 'in progress'"
                    v-on="on"
                    color="success"
                  >
                    Create JO <v-icon class="ml-2">mdi-plus-box-outline</v-icon>
                  </v-btn>
                </template>
                <!-- modal untuk duplicate cost -->
                <v-card
                  style='overflow:hidden;'
                >
                  <v-form
                    @submit.prevent="createJO"
                  >
                  <v-card-title style="text-align-last: center; text-align: justify;" class="headline">
                    are you sure to create JO?
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="dialog_create = false"
                    >
                      Close
                    </v-btn>
                    <v-btn
                      color="primary darken-1"
                      text
                      type="submit"
                    >
                      Yes
                    </v-btn>
                  </v-card-actions>
                  </v-form>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-form
      @submit.prevent="update"
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
                          v-model="form.quo_number"
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
                              v-model="form.created_at"
                            >
                            </v-text-field>
                          </template>
                          <v-date-picker
                            v-model="form.created_at"
                            @input="menu2 = false"
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
                          :disabled="disabled === 1"
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
                          :disabled="disabled === 1"
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
                          :disabled="disabled === 1"
                          v-model="form.consol"
                          :items="type2"
                          :rules="rules"
                          hide-details="auto"
                          outlined
                        ></v-select>
                      </v-col>
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
                              v-on="on"
                              readonly
                              :disabled="disabled === 1"
                              v-model="form.expires_date"
                            >
                            </v-text-field>
                          </template>
                          <v-date-picker
                            v-model="form.expires_date"
                            :disabled="disabled === 1"
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
                          :disabled="disabled === 1"
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
                              v-on="on"
                              readonly
                              :disabled="disabled === 1"
                              v-model="form.ETD"
                            >
                            </v-text-field>
                          </template>
                          <v-date-picker
                            v-model="form.ETD"
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
                          Kurs
                        </v-card-text>
                        <v-text-field
                          v-model="form.kurs"
                          :disabled="disabled === 1"
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
                          :disabled="disabled === 1"
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
                          :disabled="disabled === 1"
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
                  </v-col>
                </v-row>
                <v-row
                  class="mt-5"
                  v-if="form.type === 'import'"
                >
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
                      :disabled="disabled === 1"
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
                      :disabled="disabled === 1"
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
                      :disabled="disabled === 1"
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
                      :disabled="disabled === 1"
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
                      :disabled="disabled === 1"
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
                      :disabled="disabled === 1"
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
                      :disabled="disabled === 1"
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
                      :disabled="disabled === 1"
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
                        :disabled="disabled === 1"
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
                        :disabled="disabled === 1"
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
            class="mx-auto mb-5"
            width="90%"
            outlined
            style="background-color:#f5f5fb; border:0px;"
          >
            <!-- tabs tabs invoice dan pay request -->
            <v-tabs
              v-model="tab"
              background-color="transparent"
              light
            >
              <v-tab
                class="mr-12"
              >
                Invoice
              </v-tab>
              <v-tab
                class="mr-12"
              >
                Pay request
              </v-tab>
              <!-- tab invoice -->
              <v-tab-item
                style="background-color:#f5f5fb; border:0px;"
              >
                <hr
                  style="width:20%"
                >
                <v-row
                  class="mt-5"
                >
                  <v-col
                    sm="12"
                    cols="3"
                  >
                    <!-- tabel invoice -->
                    <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th rowspan="2" class="text-center">
                              No
                            </th>
                            <th rowspan="2" class="text-center">
                              Item Cost
                            </th>
                            <th rowspan="2" class="text-center">
                              Unit
                            </th>
                            <th rowspan="2" class="text-center">
                              Qty
                            </th>
                            <th rowspan="2" class="text-center">
                              Price
                            </th>
                            <th colspan="2" class="text-center">
                              Amount
                            </th>
                            <th rowspan="2" class="text-center">
                              Note
                            </th>
                          </tr>
                          <tr>
                            <th class="text-center">IDR</th>
                            <th class="text-center">USD</th>
                          </tr>
                        </thead>
                        <tbody
                          v-for="(req, i) in form.quotationInvoice"
                          :key="i"
                        >
                          <tr>
                            <td class="text-center">{{ i + 1 }}</td>
                            <td class="text-center">{{ req.item_cost }}</td>
                            <td class="text-center">{{ req.unit }}</td>
                            <td class="text-center">{{ req.quantity }}</td>
                            <td class="text-center">{{ req.price }}</td>
                            <td class="text-center"><money v-bind="IDR" v-model="req.priceIDR" style="text-align: center">{{ req.priceIDR }}</money></td>
                            <td class="text-center"><money v-bind="USD" v-model="req.priceUSD" style="text-align: center">{{ req.priceUSD }}</money></td>
                            <td class="text-center">{{ req.note }}</td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-col>
                  <v-card
                    class="mt-2"
                    width="50vh"
                    outlined
                  >
                    <v-row
                      style="display: flex;"
                      class="mb-3 mt-3"
                    >
                      <v-col
                        sm='6'
                        cols="2"
                        style="border-width: 0 1px 0 0;border-style: solid; border-color: #b8b8b8"
                      >
                        <v-card-title
                          style="font-size:16px; border-width: 0 0 2px 0; border-style: solid; border-color: green; padding: 0; max-width: 150px"
                          class='ml-5'
                        >
                        Total Invoice IDR
                        </v-card-title>
                        <v-card-text
                          style="font-weight:bold; font-size:18px; padding: 0"
                          class="ml-5 mt-3"
                        >
                          <money v-bind="IDR" v-model="totPayReqIDR"> {{ totPayReqIDR }} </money>
                        </v-card-text>
                      </v-col>
                      <v-col
                        sm='6'
                        cols="2"
                      >
                        <v-card-title
                          style="font-size:16px;border-width: 0 0 2px 0; border-style: solid; border-color: orange; padding: 0; max-width: 150px"
                          class='mr-3'
                        >
                        Total Invoice USD
                        </v-card-title>
                        <v-card-text
                          style="font-weight:bold; font-size:18px; padding: 0"
                          class="mt-3"
                        >
                          <money v-bind="USD" v-model="totPayReqUSD"> {{ totPayReqUSD }} </money>
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-row>
                <br>
                <v-row>
                  <v-btn
                    depressed
                    color="error"
                    style="margin-left:80%"
                    height='55px'
                    class="mr-10 mt-10 mb-10"
                    to="/admin/quotation"
                  >
                    Back
                  </v-btn>
                  <v-btn
                    depressed
                    type="submit"
                    color="primary"
                    height='55px'
                    class="mr-10 mt-10 mb-10"
                  >
                    Save
                  </v-btn>
                </v-row>
              </v-tab-item>
              <!-- tab pay request -->
              <v-tab-item
                style="background-color:#f5f5fb; border:0px;"
              >
                <hr
                  style="width:20%"
                >
                <v-row
                  class="mt-5"
                >
                  <v-col
                    sm="12"
                    cols="3"
                  >
                    <!-- tabel pay request -->
                    <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th rowspan="2" class="text-center">
                              No
                            </th>
                            <th rowspan="2" class="text-center">
                              Item Cost
                            </th>
                            <th rowspan="2" class="text-center">
                              Unit
                            </th>
                            <th rowspan="2" class="text-center">
                              Qty
                            </th>
                            <th rowspan="2" class="text-center">
                              Price
                            </th>
                            <th colspan="2" class="text-center">
                              Amount
                            </th>
                            <th rowspan="2" class="text-center">
                              Vendor
                            </th>
                          </tr>
                          <tr>
                            <th class="text-center">IDR</th>
                            <th class="text-center">USD</th>
                          </tr>
                        </thead>
                        <tbody
                          v-for="(req, i) in form.quotationPayrequest"
                          :key="i"
                        >
                          <tr>
                            <td class="text-center">{{ i + 1 }}</td>
                            <td class="text-center">{{ req.item_cost }}</td>
                            <td class="text-center">{{ req.unit }}</td>
                            <td class="text-center">{{ req.quantity }}</td>
                            <td class="text-center">{{ req.price }}</td>
                            <td class="text-center"><money v-bind="IDR" v-model="req.priceIDR" style="text-align: center">{{ req.priceIDR }}</money></td>
                            <td class="text-center"><money v-bind="USD" v-model="req.priceUSD" style="text-align: center">{{ req.priceUSD }}</money></td>
                            <td class="text-center">{{ req.vendor }}</td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-col>
                  <v-card
                    class="mt-2"
                    width="50vh"
                    outlined
                  >
                    <v-row
                      style="display: flex;"
                      class="mb-3 mt-3"
                    >
                      <v-col
                        sm='6'
                        cols="2"
                        style="border-width: 0 1px 0 0;border-style: solid; border-color: #b8b8b8"
                      >
                        <v-card-title
                          style="font-size:16px; border-width: 0 0 2px 0; border-style: solid; border-color: green; padding: 0; max-width: 150px"
                          class='ml-5'
                        >
                        Total Invoice IDR
                        </v-card-title>
                        <v-card-text
                          style="font-weight:bold; font-size:18px; padding: 0"
                          class="ml-5 mt-3"
                        >
                          <money v-bind="IDR" v-model="totIDR"> {{ totIDR }} </money>
                        </v-card-text>
                      </v-col>
                      <v-col
                        sm='6'
                        cols="2"
                      >
                        <v-card-title
                          style="font-size:16px;border-width: 0 0 2px 0; border-style: solid; border-color: orange; padding: 0; max-width: 150px"
                          class='mr-3'
                        >
                        Total Invoice USD
                        </v-card-title>
                        <v-card-text
                          style="font-weight:bold; font-size:18px; padding: 0"
                          class="mt-3"
                        >
                          <money v-bind="USD" v-model="totUSD"> {{ totUSD }} </money>
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-row>
                <br>
                <v-row>
                  <v-btn
                    depressed
                    color="error"
                    style="margin-left:80%"
                    height='55px'
                    class="mr-10 mt-10 mb-10"
                    to="/admin/quotation"
                  >
                    Back
                  </v-btn>
                  <v-btn
                    depressed
                    type="submit"
                    color="primary"
                    height='55px'
                    class="mr-10 mt-10 mb-10"
                  >
                    Save
                  </v-btn>
                </v-row>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import {Money} from 'v-money'
import baseAlert from '~/components/Base/Alert'

export default {
  name: 'create',
  middleware: 'adminscl',
  meta: {
    crumbs: [
      {
        text: 'Quotation',
        to: '/admin/quotation',
        disabled: false
      },
      {
        text: 'Details',
        disabled: true
      }
    ]
  },
  data () {
    return {
      form: {},
      type: ['import', 'export'],
      type2: ['consol', 'coloud'],
      menu2: false,
      id: 0,
      dialog: false,
      dialogPR: false,
      dialog_duplicate: false,
      dialog_edit: false,
      dialog_execute: false,
      dialog_print: false,
      dialog_delete: false,
      dialog_create: false,
      dialog_deleteI: false,
      dialog_deletePR: false,
      dialogEditPR: false,
      dialogEditI: false,
      ports: [],
      data_costs: [],
      totPayReqIDR: 0,
      totPayReqUSD: 0,
      totIDR: 0,
      dialog2: false,
      disabled: 1,
      totUSD: 0,
      customers: [],
      invoice: {},
      pay_request: {},
      currencies: ['USD', 'IDR'],
      menu3: false,
      units: ['Buruh', 'Coil', 'Colly', 'Container', 'Doc', 'Kg', 'M3', 'Trip', 'Unit'],
      terms: ['7 Days', '14 Days', '30 Days', '60 Days', '90 Days', '0'],
      date: new Date().toISOString().substr(0, 10),
      // form etd dan eta disamain
    }
  },
  components: {
    Money,
    baseAlert
  },
  methods: {
    async execute () {
      try {
        this.form.status = 'executed'
        const response = await this.$axios.put('quotation/' + this.$route.params.id, this.form)
        if (response.status === 200) {
          const { data } = response.data
          this.dialog_execute = false
          console.log(data, 'ini hasil berhasil create quotation')
          this.$toast.global.app_success('successfuly executed quotation')
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to execute quotation ${message}`)
      }
    },
    async createJO () {
      try {
        const payload = {
          customer_name: this.form.customer_name,
          type: this.form.type,
          marketing: this.form.creator,
          terms_payment: this.form.terms_payment,
          subject: this.form.subject
        }
        const response = await this.$axios.post('job-order', payload)
        if (response.status === 200) {
          const { data } = response.data
          console.log(data, 'ini hasil berhasil create jo')
          this.$toast.global.app_success('successfuly created JO')
          this.$router.push({ path: '/admin/jo/' + data.id})
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to create job order for this quotation ${message}`)
      }
    },
    set (id) {
      this.id = id
      console.log(this.id)
    },
    closePR () {
      this.dialogEditPR = false
      this.pay_request = {}
    },
    closeI () {
      this.dialogEditI = false
      this.invoice = {}
    },
    async getPR (id) {
      try {
        this.id = id
        const response = await this.$axios.get('quotation-payrequest/' + id)
        if (response.status === 200) {
          const { data } = response.data
          this.pay_request = data
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load pay request for this quotation ${message}`)
      }
    },
    async getI (id) {
      try {
        this.id = id
        const response = await this.$axios.get('quotation-invoice/' + id)
        if (response.status === 200) {
          const { data } = response.data
          this.invoice = data
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load invoice for this quotation ${message}`)
      }
    },
    async updatePR () {
      try {
        const response = await this.$axios.put('quotation-payrequest/' + this.id, this.pay_request)
        if (response.status === 200) {
          this.$toast.global.app_success('successfuly updated pay request for this quotation')
          this.closePR()
          this.getById()
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to update pay request for this quotation ${message}`)
      }
    },
    async updateI () {
      try {
        const response = await this.$axios.put('quotation-invoice/' + this.id, this.invoice)
        if (response.status === 200) {
          this.$toast.global.app_success('successfuly updated invoice for this quotation')
          this.closeI()
          this.getById()
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to update invoice for this quotation ${message}`)
      }
    },
    async update () {
      try {
        if (!this.form.status) {
          this.form.status = 'in progress'
        }
        const response = await this.$axios.put('quotation/' + this.$route.params.id, this.form)
        if (response.status === 200) {
          const { data } = response.data
          console.log(data, 'ini hasil berhasil create quotation')
          this.$toast.global.app_success('successfuly updated quotation')
          this.disabled = 1
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to create quotation ${message}`)
      }
    },
    async createPR (quo) {
      try {
        this.pay_request.quo_number = quo
        const response = await this.$axios.post('quotation-payrequest', this.pay_request)
        if (response.status === 200){
          this.$toast.global.app_success('successfully created pay request for this quotation')
          this.dialogPR = false
          this.getById()
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to create pay request for this quotation ${message}`)
      }
    },
    async deleteI () {
      try {
        const response = await this.$axios.delete('quotation-invoice/' + this.id)
        if (response.status === 200) {
          this.dialog_deleteI = false
          this.getById()
          this.$toast.global.app_success(`Successfuly deleted invoice for this quotation ${message}`)
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to delete invoice for this quotation ${message}`)
      }
    },
    async deletePR () {
      try {
        const response = await this.$axios.delete('quotation-payrequest/' + this.id)
        if (response.status === 200) {
          this.dialog_deletePR = false
          this.getById()
          this.$toast.global.app_success(`Successfuly deleted pay request for this quotation ${message}`)
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to delete pay request for this quotation ${message}`)
      }
    },
    async getById () {
      try {
        this.totPayReqIDR = 0
        this.totPayReqUSD = 0
        this.totIDR = 0
        this.totUSD = 0
        this.$toast.global.app_loading()
        const response = await this.$axios.get('quotation/' + this.$route.params.id)
        if (response.status === 200) {
          this.$toast.clear()
          const { data } = response.data
          console.log(data, 'hasil awal get by id')
          data.created_at = data.created_at.slice(0, 10)
          data.quotationInvoice.forEach((el) => {
            el.priceIDR = 0
            el.priceUSD = 0
            if (el.currency === 'IDR') {
              el.priceIDR += el.price * el.quantity
              this.totPayReqIDR += el.price * el.quantity
            } else {
              el.priceUSD += el.price * el.quantity
              this.totPayReqUSD += el.price * el.quantity
            }
          })
          data.quotationPayrequest.forEach((el) => {
            el.priceIDR = 0
            el.priceUSD = 0
            if (el.currency === 'IDR') {
              el.priceIDR += el.price * el.quantity
              this.totIDR += el.price * el.quantity
            } else {
              el.priceUSD += el.price * el.quantity
              this.totUSD += el.price * el.quantity
            }
          })
          data.expires_date = data.expires_date.slice(0, 10)
          data.ETD = data.ETD.slice(0, 10)
          this.form = data
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load data ${message}`)
      }
    },
    async createInvoice (quo) {
      try {
        this.invoice.quo_number = quo
        const response = await this.$axios.post('quotation-invoice', this.invoice)
        if (response.status === 200){
          this.$toast.global.app_success('successfully created invoice for this quotation')
          this.dialog = false
          this.getById()
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to create invoice for this quotation ${message}`)
      }
    },
    async getCost () {
      try {
        const response = await this.$axios.get('data-cost')
        if (response.status === 200) {
          const { data } = response.data
          console.log(data, 'ini hasil get data cost')
          data.forEach((el) => {
            this.data_costs.push(el.cost_name)
          })
        }
      } catch (error) {
        console.log(error, 'ini errornya data-cost')
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load data costs ${message}`)
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
    },
    async duplicate () {
      try {
        this.form.eta = this.form.ETA
        this.form.etd = this.form.ETD
        this.form.creator = this.$auth.user.name
        this.form.branch_office = this.$auth.user.branch_office
        this.form.status = 'in progress'
        const response = await this.$axios.post('quotation', this.form)
        if (response.status === 200) {
          const { data } = response.data
          this.$toast.global.app_success('successfully duplicated quotation')
          this.$router.push({ path: '/marketing/detail/' + data.id})
        } 
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to duplicate quotation ${message}`)
      }
    },
    enable () {
      this.disabled = 0
      this.dialog_edit = false
    },
    async destroy () {
      try {
        const response = await this.$axios.delete('quotation/' + this.$route.params.id)
        if (response.status === 200) {
          this.$router.push({ path: '/marketing/quotation'})
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to delete quotation ${message}`)
      }
    }
  },
  created () {
    this.getById()
    this.getCost()
    this.getCust()
    this.getPorts()
  }
}
</script>

<style>

</style>

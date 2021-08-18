<template>
  <div>
  <v-container class="mx-auto px-md-5">
    <v-tabs
      v-model="tab"
      background-color="#f5f5fb"
    >
      <v-tab class="mr-12">Data Partner</v-tab>
      <v-tab class="mr-12">Data Cost</v-tab>
      <v-tab class="mr-12">Data Port</v-tab>
      <v-tab class="mr-12">Change Password</v-tab>
      <!-- data partner -->
      <v-tab-item
        style="background-color:#f5f5fb; border:0px;"
      >
        <v-row
          style="background-color:#f5f5fb"
        >
          <v-col
            sm="12"
          >
            <hr style="width: 52%">
          </v-col>
          <v-col
            sm="1"
          >
            <p
              style="opacity:0;"
            >
              testing
            </p>
            <!-- dialog bikin data partner -->
            <v-dialog
              v-model="dialogDP"
              persistent
              max-width="1200px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  @click="addDataPartner"
                >
                  Add New <v-icon> mdi-plus-circle-outline</v-icon>
                </v-btn>
              </template>
              <v-card
                style='overflow:hidden;'
              >
                <v-form
                  @submit.prevent="addDP"
                >
                  <v-card-title>
                    <v-icon style="color:#3273dc;">mdi-file-document</v-icon><span class="headline" style="color:#3273dc;">Data Partner</span>
                  </v-card-title>
                  <hr>
                  <v-card-text>
                    <v-row>
                      <!-- company name -->
                      <v-col
                        cols="12"
                        sm="8"
                      >
                        <v-card-text
                          class="font-weight-bold"
                          style="padding: 2px; font-weight: bold; font-size: 16px"
                        >
                          Company Name
                        </v-card-text>
                        <v-text-field
                          outlined
                          v-model="dp.company_name"
                        ></v-text-field>
                      </v-col>
                      <!-- type -->
                      <v-col
                        sm="4"
                      >
                        <v-card-text
                          class="font-weight-bold"
                          style="padding: 2px; font-weight: bold; font-size: 16px"
                        >
                          Type
                        </v-card-text>
                        <v-select
                          :items="type"
                          outlined
                          v-model="dp.type"
                        >
                        </v-select>
                      </v-col>
                      <!-- Contact Person -->
                      <v-col
                        sm='4'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:2px;font-size:16px ;font-weight:bold"
                        >
                          Contact Person
                        </v-card-text>
                        <v-text-field
                          outlined
                          v-model="dp.contact_person"
                        ></v-text-field>
                      </v-col>
                      <!-- NPWP -->
                      <v-col
                        sm='4'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:2px;font-size:16px ;font-weight:bold"
                        >
                          NPWP
                        </v-card-text>
                        <v-text-field
                          outlined
                          v-model="dp.npwp"
                        >
                        </v-text-field>
                      </v-col>
                      <!-- Status -->
                      <v-col
                        sm="4"
                      >
                        <v-card-text
                          class="font-weight-bold"
                          style="padding: 2px; font-weight: bold; font-size: 16px"
                        >
                          Status
                        </v-card-text>
                        <v-select
                          :items="status"
                          outlined
                          v-model="dp.status"
                        >
                        </v-select>
                      </v-col>
                      <!-- Country -->
                      <v-col
                        sm='4'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:2px;font-size:16px ;font-weight:bold"
                        >
                          Country
                        </v-card-text>
                        <v-select
                          outlined
                          v-model="dp.country"
                          :items="countries"
                          item-text="name"
                          item-value="name"
                        >
                        </v-select>
                      </v-col>
                      <!-- City -->
                      <v-col
                        sm='4'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:2px;font-size:16px ;font-weight:500;"
                        >
                          City
                        </v-card-text>
                        <v-text-field
                          v-model="dp.city"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <!-- Postal Code -->
                      <v-col
                        sm='4'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:2px;font-size:16px ;font-weight:bold"
                        >
                          Postal Code
                        </v-card-text>
                        <v-text-field
                          outlined
                          v-model="dp.postal_code"
                        >
                        </v-text-field>
                      </v-col>
                      <!-- Address -->
                      <v-col
                        sm='8'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:0;font-size:16px ;font-weight:500;"
                          class='mt-5'
                        >
                          Address
                        </v-card-text>
                        <v-textarea
                          outlined
                          v-model="dp.address"
                        >
                        </v-textarea>
                      </v-col>
                      <!-- Spacer -->
                      <v-col
                        sm="4"
                      >
                      </v-col>
                      <!-- Fax Number -->
                      <v-col
                        sm='4'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:2px;font-size:16px ;font-weight:bold"
                        >
                          Fax number
                        </v-card-text>
                        <v-text-field
                          outlined
                          v-model="dp.fax_number"
                        >
                        </v-text-field>
                      </v-col>
                      <!-- Phone Number -->
                      <v-col
                        sm='4'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:2px;font-size:16px ;font-weight:bold"
                        >
                          Phone number
                        </v-card-text>
                        <v-text-field
                          outlined
                          v-model="dp.phone_number"
                        >
                        </v-text-field>
                      </v-col>
                      <!-- Mobile Number -->
                      <v-col
                        sm='4'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:2px;font-size:16px ;font-weight:bold"
                        >
                          Mobile number
                        </v-card-text>
                        <v-text-field
                          outlined
                          v-model="dp.mobile_number"
                        >
                        </v-text-field>
                      </v-col>
                      <!-- Email -->
                      <v-col
                        sm='4'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:2px;font-size:16px ;font-weight:bold"
                        >
                          Email
                        </v-card-text>
                        <v-text-field
                          type="email"
                          outlined
                          v-model="dp.email"
                        >
                        </v-text-field>
                      </v-col>
                      <!-- Website -->
                      <v-col
                        sm='4'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:2px;font-size:16px ;font-weight:bold"
                        >
                          Website
                        </v-card-text>
                        <v-text-field
                          type="email"
                          outlined
                          v-model="dp.website"
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <!-- <small>*indicates required field</small> -->
                  </v-card-text>
                  <v-row>
                    <v-col
                      sm='12'
                      cols="2"
                    >
                      <hr
                        style="max-width:100%"
                      >
                    </v-col>
                  </v-row>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="error darken-1"
                      text
                      @click="dialogDP = false"
                    >
                      Close
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      type="submit"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-form>
              </v-card>
            </v-dialog>
          </v-col>
          <v-col
            sm="7"
          >
          </v-col>
          <v-col
            sm="3"
            cols="3"
          >
            <p
              style="opacity: 0"
            >
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
        <v-row>
          <v-col
            sm="12"
            cols="3"
          >
            <v-data-table
              :headers="data_partner"
              :items="body"
              :page.sync="page"
              :search="search"
              hide-default-footer
              :items-per-page="itemsPerPage"
              item-key="jo_number"
              @page-count="pageCount = $event"
            >
            <template v-slot:[`item.actions`]="{ item: { id } }">
              <v-dialog
                v-model="dialogDataPartner"
                persistent
                :retain-focus="false"
                max-width="1200px"
              >
                <template v-slot:activator="{ on, attrs }">  
                  <v-icon
                    small
                    class="ml-2"
                    v-bind="attrs"
                    v-on="on"
                    @click="get1DataPartner(id)"
                  >
                    mdi-pencil
                  </v-icon>
                </template>
                <v-card
                  style='overflow:hidden;'
                >
                  <v-form
                    @submit.prevent="updateDP"
                  >
                    <v-card-title>
                      <v-icon style="color:#3273dc;">mdi-file-document</v-icon><span class="headline" style="color:#3273dc;">Data Partner</span>
                    </v-card-title>
                    <hr>
                    <v-card-text>
                      <v-row>
                        <!-- company name -->
                        <v-col
                          cols="12"
                          sm="8"
                        >
                          <v-card-text
                            class="font-weight-bold"
                            style="padding: 2px; font-weight: bold; font-size: 16px"
                          >
                            Company Name
                          </v-card-text>
                          <v-text-field
                            outlined
                            v-model="dp.company_name"
                          ></v-text-field>
                        </v-col>
                        <!-- type -->
                        <v-col
                          sm="4"
                        >
                          <v-card-text
                            class="font-weight-bold"
                            style="padding: 2px; font-weight: bold; font-size: 16px"
                          >
                            Type
                          </v-card-text>
                          <v-select
                            :items="type"
                            outlined
                            v-model="dp.type"
                          >
                          </v-select>
                        </v-col>
                        <!-- Contact Person -->
                        <v-col
                          sm='4'
                          cols="3"
                        >
                          <v-card-text
                            style="padding:2px;font-size:16px ;font-weight:bold"
                          >
                            Contact Person
                          </v-card-text>
                          <v-text-field
                            outlined
                            v-model="dp.contact_person"
                          ></v-text-field>
                        </v-col>
                        <!-- NPWP -->
                        <v-col
                          sm='4'
                          cols="3"
                        >
                          <v-card-text
                            style="padding:2px;font-size:16px ;font-weight:bold"
                          >
                            NPWP
                          </v-card-text>
                          <v-text-field
                            outlined
                            v-model="dp.npwp"
                          >
                          </v-text-field>
                        </v-col>
                        <!-- Status -->
                        <v-col
                          sm="4"
                        >
                          <v-card-text
                            class="font-weight-bold"
                            style="padding: 2px; font-weight: bold; font-size: 16px"
                          >
                            Status
                          </v-card-text>
                          <v-select
                            :items="status"
                            outlined
                            v-model="dp.status"
                          >
                          </v-select>
                        </v-col>
                        <!-- Country -->
                        <v-col
                          sm='4'
                          cols="3"
                        >
                          <v-card-text
                            style="padding:2px;font-size:16px ;font-weight:bold"
                          >
                            Country
                          </v-card-text>
                          <v-select
                            outlined
                            v-model="dp.country"
                            :items="countries"
                            item-text="name"
                            item-value="name"
                          >
                          </v-select>
                        </v-col>
                        <!-- City -->
                        <v-col
                          sm='4'
                          cols="3"
                        >
                          <v-card-text
                            style="padding:2px;font-size:16px ;font-weight:500;"
                          >
                            City
                          </v-card-text>
                          <v-text-field
                            v-model="dp.city"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <!-- Postal Code -->
                        <v-col
                          sm='4'
                          cols="3"
                        >
                          <v-card-text
                            style="padding:2px;font-size:16px ;font-weight:bold"
                          >
                            Postal Code
                          </v-card-text>
                          <v-text-field
                            outlined
                            v-model="dp.postal_code"
                          >
                          </v-text-field>
                        </v-col>
                        <!-- Address -->
                        <v-col
                          sm='8'
                          cols="3"
                        >
                          <v-card-text
                            style="padding:0;font-size:16px ;font-weight:500;"
                            class='mt-5'
                          >
                            Address
                          </v-card-text>
                          <v-textarea
                            outlined
                            v-model="dp.address"
                          >
                          </v-textarea>
                        </v-col>
                        <!-- Spacer -->
                        <v-col
                          sm="4"
                        >
                        </v-col>
                        <!-- Fax Number -->
                        <v-col
                          sm='4'
                          cols="3"
                        >
                          <v-card-text
                            style="padding:2px;font-size:16px ;font-weight:bold"
                          >
                            Fax number
                          </v-card-text>
                          <v-text-field
                            outlined
                            v-model="dp.fax_number"
                          >
                          </v-text-field>
                        </v-col>
                        <!-- Phone Number -->
                        <v-col
                          sm='4'
                          cols="3"
                        >
                          <v-card-text
                            style="padding:2px;font-size:16px ;font-weight:bold"
                          >
                            Phone number
                          </v-card-text>
                          <v-text-field
                            outlined
                            v-model="dp.phone_number"
                          >
                          </v-text-field>
                        </v-col>
                        <!-- Mobile Number -->
                        <v-col
                          sm='4'
                          cols="3"
                        >
                          <v-card-text
                            style="padding:2px;font-size:16px ;font-weight:bold"
                          >
                            Mobile number
                          </v-card-text>
                          <v-text-field
                            outlined
                            v-model="dp.mobile_number"
                          >
                          </v-text-field>
                        </v-col>
                        <!-- Email -->
                        <v-col
                          sm='4'
                          cols="3"
                        >
                          <v-card-text
                            style="padding:2px;font-size:16px ;font-weight:bold"
                          >
                            Email
                          </v-card-text>
                          <v-text-field
                            type="email"
                            outlined
                            v-model="dp.email"
                          >
                          </v-text-field>
                        </v-col>
                        <!-- Website -->
                        <v-col
                          sm='4'
                          cols="3"
                        >
                          <v-card-text
                            style="padding:2px;font-size:16px ;font-weight:bold"
                          >
                            Website
                          </v-card-text>
                          <v-text-field
                            type="email"
                            outlined
                            v-model="dp.website"
                          >
                          </v-text-field>
                        </v-col>
                      </v-row>
                      <!-- <small>*indicates required field</small> -->
                    </v-card-text>
                    <v-row>
                      <v-col
                        sm='12'
                        cols="2"
                      >
                        <hr
                          style="max-width:100%"
                        >
                      </v-col>
                    </v-row>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="error darken-1"
                        text
                        @click="closeDP"
                      >
                        Close
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        type="submit"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card>
              </v-dialog>
              |
              <v-dialog
                v-model="dialog_deleteDP"
                width="290"
                :retain-focus ="false"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    v-bind="attrs"
                    v-on="on"
                    @click="set(id)"
                  >
                    mdi-delete
                  </v-icon>
                </template>
                <v-card>
                  <v-card-title style="text-align-last: center; text-align: justify;" class="headline">
                    Are you sure to delete this item?
                  </v-card-title>
                  <v-card-actions
                    class="mx-auto"
                  >
                    <v-btn
                      color="error"
                      class="mx-auto"
                      text
                      @click="dialog_deleteDP = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      class="error mx-auto"
                      text
                      @click="deleteDP"
                    >
                      Yes, delete
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              </template>
            </v-data-table>
            <div class="text-right pt-2">
              <v-pagination
                v-model="page"
                :length="pageCount"
              ></v-pagination>
            </div>
          </v-col>
        </v-row>
      </v-tab-item>
      <!-- data cost -->
      <v-tab-item
        style="background-color:#f5f5fb; border:0px;"
      >
        <v-row
          style="background-color:#f5f5fb"
        >
          <v-col
            sm="12"
          >
            <hr style="width: 52%">
          </v-col>
          <v-col
            sm="1"
          >
            <p
              style="opacity:0;"
            >
              testing
            </p>
            <!-- dialog bikin data cost -->
            <v-dialog
              v-model="dialogC"
              persistent
              max-width="1200px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                >
                  Add New <v-icon> mdi-plus-circle-outline</v-icon>
                </v-btn>
              </template>
              <v-card
                style='overflow:hidden;'
              >
                <!-- form add data cost -->
                <v-form
                  @submit.prevent="addDC"
                >
                  <v-card-title>
                    <v-icon style="color:#3273dc;">mdi-file-document</v-icon><span class="headline" style="color:#3273dc;">Data Partner</span>
                  </v-card-title>
                  <hr>
                  <v-card-text>
                    <v-row>
                      <!-- cost name -->
                      <v-col
                        cols="12"
                        sm="8"
                      >
                        <v-card-text
                          class="font-weight-bold"
                          style="padding: 2px; font-weight: bold; font-size: 16px"
                        >
                          Cost Name
                        </v-card-text>
                        <v-text-field
                          outlined
                          v-model="dc.cost_name"
                        ></v-text-field>
                      </v-col>
                      <!-- Status -->
                      <v-col
                        sm="4"
                      >
                        <v-card-text
                          class="font-weight-bold"
                          style="padding: 2px; font-weight: bold; font-size: 16px"
                        >
                          Status
                        </v-card-text>
                        <v-select
                          :items="status"
                          outlined
                          v-model="dc.status"
                        >
                        </v-select>
                      </v-col>
                      <!-- Type -->
                      <v-col
                        sm='4'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:2px;font-size:16px ;font-weight:bold"
                        >
                          Type
                        </v-card-text>
                        <v-checkbox
                          v-model="dc.type"
                          label="refund"
                        >
                        </v-checkbox>
                      </v-col>
                    </v-row>
                    <!-- <small>*indicates required field</small> -->
                  </v-card-text>
                  <v-row>
                    <v-col
                      sm='12'
                      cols="2"
                    >
                      <hr
                        style="max-width:100%"
                      >
                    </v-col>
                  </v-row>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="error darken-1"
                      text
                      @click="dialogC = false"
                    >
                      Close
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      type="submit"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-form>
              </v-card>
            </v-dialog>
          </v-col>
          <v-col
            sm="7"
          >
          </v-col>
          <v-col
            sm="3"
            cols="3"
          >
            <p
              style="opacity: 0"
            >
              testing
            </p>
            <v-text-field
              v-model="searchDC"
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
        <v-row>
          <v-col
            sm="12"
            cols="3"
          >
            <v-data-table
              :headers="data_cost"
              :items="body_cost"
              :page.sync="pageC"
              :search="searchDC"
              hide-default-footer
              :items-per-page="itemsPerPage"
              @page-count="pageCountC = $event"
            >
              <template v-slot:[`item.status`]="{ item }">
                <v-card-text
                  v-if="item.status === 'active'"
                  style="color: green; padding:0; font-weight: bold;"
                >
                  {{ item.status }}
                </v-card-text>
                <v-card-text
                  v-else
                  style="color: red; padding:0; font-weight: bold;"
                >
                  {{ item.status }}
                </v-card-text>
              </template>
              <template v-slot:[`item.actions`]="{ item: { id } }">
                <v-dialog
                  v-model="dialogDataCost"
                  persistent
                  :retain-focus="false"
                  max-width="1200px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      small
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2"
                      @click="get1DataCost(id)"
                    >
                      mdi-pencil
                    </v-icon>
                  </template>
                  <v-card
                    style='overflow:hidden;'
                  >
                    <!-- form add data cost -->
                    <v-form
                      @submit.prevent="updateDC"
                    >
                      <v-card-title>
                        <v-icon style="color:#3273dc;">mdi-file-document</v-icon><span class="headline" style="color:#3273dc;">Data Partner</span>
                      </v-card-title>
                      <hr>
                      <v-card-text>
                        <v-row>
                          <!-- cost name -->
                          <v-col
                            cols="12"
                            sm="8"
                          >
                            <v-card-text
                              class="font-weight-bold"
                              style="padding: 2px; font-weight: bold; font-size: 16px"
                            >
                              Cost Name
                            </v-card-text>
                            <v-text-field
                              outlined
                              v-model="dc.cost_name"
                            ></v-text-field>
                          </v-col>
                          <!-- Status -->
                          <v-col
                            sm="4"
                          >
                            <v-card-text
                              class="font-weight-bold"
                              style="padding: 2px; font-weight: bold; font-size: 16px"
                            >
                              Status
                            </v-card-text>
                            <v-select
                              :items="status"
                              outlined
                              v-model="dc.status"
                            >
                            </v-select>
                          </v-col>
                          <!-- Type -->
                          <v-col
                            sm='4'
                            cols="3"
                          >
                            <v-card-text
                              style="padding:2px;font-size:16px ;font-weight:bold"
                            >
                              Type
                            </v-card-text>
                            <v-checkbox
                              v-model="dc.type"
                              label="refund"
                            >
                            </v-checkbox>
                          </v-col>
                        </v-row>
                        <!-- <small>*indicates required field</small> -->
                      </v-card-text>
                      <v-row>
                        <v-col
                          sm='12'
                          cols="2"
                        >
                          <hr
                            style="max-width:100%"
                          >
                        </v-col>
                      </v-row>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="error darken-1"
                          text
                          @click="closeDC"
                        >
                          Close
                        </v-btn>
                        <v-btn
                          color="blue darken-1"
                          text
                          type="submit"
                        >
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-form>
                  </v-card>
                </v-dialog>
                |
                <v-dialog
                  v-model="dialog_deleteDC"
                  width="290"
                  :retain-focus ="false"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      v-bind="attrs"
                      v-on="on"
                      @click="set(id)"
                    >
                      mdi-delete
                    </v-icon>
                  </template>
                  <v-card>
                    <v-card-title style="text-align-last: center; text-align: justify;" class="headline">
                      Are you sure to delete this item?
                    </v-card-title>
                    <v-card-actions
                      class="mx-auto"
                    >
                      <v-btn
                        color="error"
                        class="mx-auto"
                        text
                        @click="dialog_deleteDC = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        class="error mx-auto"
                        text
                        @click="deleteDC"
                      >
                        Yes, delete
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </template>
            </v-data-table>
            <div class="text-right pt-2">
              <v-pagination
                v-model="pageC"
                :length="pageCountC"
              ></v-pagination>
            </div>
          </v-col>
        </v-row>
      </v-tab-item>
      <!-- data port -->
      <v-tab-item
        style="background-color:#f5f5fb; border:0px;"
      >
        <v-row
          style="background-color:#f5f5fb"
        >
          <v-col
            sm="12"
          >
            <hr style="width: 52%">
          </v-col>
          <v-col
            sm="1"
          >
            <p
              style="opacity:0;"
            >
              testing
            </p>
            <!-- dialog bikin data port -->
            <v-dialog
              v-model="dialogP"
              persistent
              max-width="1200px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                >
                  Add New <v-icon> mdi-plus-circle-outline</v-icon>
                </v-btn>
              </template>
              <v-card
                style='overflow:hidden;'
              >
                <!-- form add data cost -->
                <v-form
                  @submit.prevent="addP"
                >
                  <v-card-title>
                    <v-icon style="color:#3273dc;">mdi-file-document</v-icon><span class="headline" style="color:#3273dc;">Port Name</span>
                  </v-card-title>
                  <hr>
                  <v-card-text>
                    <v-row>
                      <!-- cost name -->
                      <v-col
                        cols="12"
                        sm="12"
                      >
                        <v-card-text
                          class="font-weight-bold"
                          style="padding: 2px; font-weight: bold; font-size: 16px"
                        >
                          Port Name
                        </v-card-text>
                        <v-text-field
                          outlined
                          v-model="p.port_name"
                        ></v-text-field>
                      </v-col>
                      <!-- Status -->
                      <v-col
                        sm="4"
                      >
                        <v-card-text
                          class="font-weight-bold"
                          style="padding: 2px; font-weight: bold; font-size: 16px"
                        >
                          Caption (3 Digit)
                        </v-card-text>
                        <v-text-field
                          :items="status"
                          outlined
                          counter
                          maxlength="3"
                          v-model="p.caption"
                        >
                        </v-text-field>
                      </v-col>
                      <!-- Type -->
                      <v-col
                        sm='4'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:2px;font-size:16px ;font-weight:bold"
                        >
                          Country
                        </v-card-text>
                        <v-select
                          outlined
                          v-model="p.country"
                          :items="countries"
                          item-text="name"
                          item-value="name"
                        >
                        </v-select>
                      </v-col>
                      <!-- Status -->
                      <v-col
                        sm='4'
                        cols="3"
                      >
                        <v-card-text
                          style="padding:2px;font-size:16px ;font-weight:bold"
                        >
                          Status
                        </v-card-text>
                        <v-select
                          outlined
                          v-model="p.status"
                          :items="status"
                        >
                        </v-select>
                      </v-col>
                    </v-row>
                    <!-- <small>*indicates required field</small> -->
                  </v-card-text>
                  <v-row>
                    <v-col
                      sm='12'
                      cols="2"
                    >
                      <hr
                        style="max-width:100%"
                      >
                    </v-col>
                  </v-row>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="error darken-1"
                      text
                      @click="dialogP = false"
                    >
                      Close
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      type="submit"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-form>
              </v-card>
            </v-dialog>
          </v-col>
          <v-col
            sm="7"
          >
          </v-col>
          <v-col
            sm="3"
            cols="3"
          >
            <p
              style="opacity: 0"
            >
              testing
            </p>
            <v-text-field
              v-model="searchP"
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
        <v-row>
          <v-col
            sm="12"
            cols="3"
          >
            <v-data-table
              :headers="data_ports"
              :items="body_port"
              :page.sync="pageP"
              :search="searchP"
              hide-default-footer
              :items-per-page="itemsPerPage"
              @page-count="pageCountP = $event"
            >
              <template v-slot:[`item.status`]="{ item }">
                <v-card-text
                  v-if="item.status === 'active'"
                  style="color: green; padding:0; font-weight: bold;"
                >
                  {{ item.status }}
                </v-card-text>
                <v-card-text
                  v-else
                  style="color: red; padding:0; font-weight: bold;"
                >
                  {{ item.status }}
                </v-card-text>
              </template>
              <template v-slot:[`item.actions`]="{ item: { id } }">
                <v-dialog
                  v-model="dialogDataPort"
                  persistent
                  :retain-focus="false"
                  max-width="1200px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      small
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2"
                      @click="get1DataPort(id)"
                    >
                      mdi-pencil
                    </v-icon>
                  </template>
                  <v-card
                    style='overflow:hidden;'
                  >
                    <!-- form add data cost -->
                    <v-form
                      @submit.prevent="updateP"
                    >
                      <v-card-title>
                        <v-icon style="color:#3273dc;">mdi-file-document</v-icon><span class="headline" style="color:#3273dc;">Port Name</span>
                      </v-card-title>
                      <hr>
                      <v-card-text>
                        <v-row>
                          <!-- cost name -->
                          <v-col
                            cols="12"
                            sm="12"
                          >
                            <v-card-text
                              class="font-weight-bold"
                              style="padding: 2px; font-weight: bold; font-size: 16px"
                            >
                              Port Name
                            </v-card-text>
                            <v-text-field
                              outlined
                              v-model="p.port_name"
                            ></v-text-field>
                          </v-col>
                          <!-- Status -->
                          <v-col
                            sm="4"
                          >
                            <v-card-text
                              class="font-weight-bold"
                              style="padding: 2px; font-weight: bold; font-size: 16px"
                            >
                              Caption (3 Digit)
                            </v-card-text>
                            <v-text-field
                              :items="status"
                              outlined
                              counter
                              maxlength="3"
                              v-model="p.caption"
                            >
                            </v-text-field>
                          </v-col>
                          <!-- Type -->
                          <v-col
                            sm='4'
                            cols="3"
                          >
                            <v-card-text
                              style="padding:2px;font-size:16px ;font-weight:bold"
                            >
                              Country
                            </v-card-text>
                            <v-select
                              outlined
                              v-model="p.country"
                              :items="countries"
                              item-text="name"
                              item-value="name"
                            >
                            </v-select>
                          </v-col>
                          <!-- Status -->
                          <v-col
                            sm='4'
                            cols="3"
                          >
                            <v-card-text
                              style="padding:2px;font-size:16px ;font-weight:bold"
                            >
                              Status
                            </v-card-text>
                            <v-select
                              outlined
                              v-model="p.status"
                              :items="status"
                            >
                            </v-select>
                          </v-col>
                        </v-row>
                        <!-- <small>*indicates required field</small> -->
                      </v-card-text>
                      <v-row>
                        <v-col
                          sm='12'
                          cols="2"
                        >
                          <hr
                            style="max-width:100%"
                          >
                        </v-col>
                      </v-row>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="error darken-1"
                          text
                          @click="closeP"
                        >
                          Close
                        </v-btn>
                        <v-btn
                          color="blue darken-1"
                          text
                          type="submit"
                        >
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-form>
                  </v-card>
                </v-dialog>
                |
                <v-dialog
                  v-model="dialog_deleteP"
                  width="290"
                  :retain-focus ="false"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      v-bind="attrs"
                      v-on="on"
                      @click="set(id)"
                    >
                      mdi-delete
                    </v-icon>
                  </template>
                  <v-card>
                    <v-card-title style="text-align-last: center; text-align: justify;" class="headline">
                      Are you sure to delete this item?
                    </v-card-title>
                    <v-card-actions
                      class="mx-auto"
                    >
                      <v-btn
                        color="error"
                        class="mx-auto"
                        text
                        @click="dialog_deleteP = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        class="error mx-auto"
                        text
                        @click="deleteP"
                      >
                        Yes, delete
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </template>
            </v-data-table>
            <div class="text-right pt-2">
              <v-pagination
                v-model="pageP"
                :length="pageCountP"
              ></v-pagination>
            </div>
          </v-col>
        </v-row>
      </v-tab-item>
      <!-- change password -->
      <v-tab-item
        style="background-color:#f5f5fb;"
      >
        <hr style="width: 52%">
        <v-form style="background-color:#f5f5fb;padding-top:50px" ref="form" v-model="valid" lazy-validation>
          <v-row align="center" justify="space-between">
            <v-col cols="12" sm="6">
              <label for="email" class="text-body-1">Your e-mail</label>
              <v-text-field
                placeholder="E-mail"
                :value="$auth.user.email"
                disabled
                solo
              />
            </v-col>

            <v-col cols="12" sm="6">
              <label for="currentPassword" class="text-body-1">Your name</label>
              <v-text-field
                label="Name"
                :value="$auth.user.name"
                disabled
                solo
              />
            </v-col>
          </v-row>

          <v-divider class="my-10" />

          <v-row align="center" justify="space-between">
            <v-col cols="12">
              <div class="headline font-weight-bold">
                Change Password
              </div>
            </v-col>
          </v-row>

          <v-row align="center" justify="space-between">
            <v-col cols="12" sm="6" md="4">
              <label for="currentPassword" class="text-body-1">Current Password</label>
              <v-text-field
                id="currentPassword"
                v-model="currentPassword"
                class="mt-3"
                placeholder="Input your recent password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                :rules="[rules.currentPasswordRules, passwordConfirm]"
                solo
                validate-on-blur
                required
                :loading="isSubmiting"
                :disabled="isSubmiting"
                @click:append="show1 = !show1"
              />
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <label for="password" class="text-body-1">New Password</label>
              <v-text-field
                id="password"
                v-model="password"
                class="mt-3"
                placeholder="Input new password"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show2 ? 'text' : 'password'"
                :rules="rules.passwordRules"
                solo
                validate-on-blur
                required
                :loading="isSubmiting"
                :disabled="isSubmiting"
                @click:append="show2 = !show2"
              />
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <label for="rePassword" class="text-body-1">Re-type Password</label>
              <v-text-field
                id="rePassword"
                v-model="rePassword"
                class="mt-3"
                placeholder="Input password again"
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show3 ? 'text' : 'password'"
                :rules="[rules.rePasswordRules, retypePassword]"
                solo
                validate-on-blur
                required
                :loading="isSubmiting"
                :disabled="isSubmiting"
                @click:append="show3 = !show3"
              />
            </v-col>
          </v-row>

          <v-row align="center" justify-sm="end" class="text-sm-right">
            <v-col cols="auto">
              <v-btn :disabled="isSubmiting" text color="red" @click="clear">
                Cancel
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn :loading="isSubmiting" :disabled="!valid" color="primary" @click="submit">
                Update
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-tab-item>
    </v-tabs>
      
  </v-container>
  </div>
</template>

<script>
import qs from 'querystring'

export default {
  meta: {
    crumbs: [{
      text: 'Setting',
      to: '/setting'
      // disabled: false
    }]
  },
  data () {
    return {
      valid: true,
      itemsPerPage: 10,
      isSubmiting: false,

      // dialog-dialog 
      dialogDataPartner: false,
      dialog_deleteDP: false,

      dialogDataCost: false,
      dialog_deleteDC: false,

      dialogDataPort: false,
      dialog_deleteP: false,

      dialogDataBranchOffice: false,
      dialog_deleteDBO: false,

      // data table data partner
      data_partner: [
        {
          text: 'No',
          align: 'start',
          filterable: false,
          value: 'id',
        },
        { text: 'Company Name', value: 'company_name' },
        { text: 'Type', value: 'type' },
        { text: 'Contact Person', value: 'contact_person' },
        { text: 'Phone', value: 'phone_number' },
        { text: 'Mobile', value: 'mobile_number' },
        { text: 'Email', value: 'email' },
        { text: 'Created', value: 'company_name' },
        { text: 'Status', value: 'status' },
        { text: 'Action', value: 'actions' },
      ],
      search: '',
      body: [],
      dialogDP: false,
      rules: {
        currentPasswordRules: v => !!v || 'Current password is required.',
        passwordRules: [v => !!v || 'Password is required.'],
        rePasswordRules: v => !!v || 'Re-type password is required.'
      },
      pageCount: 0,
      page:1,

      // data table data cost
      dialogC: false,
      searchDC: '',
      data_cost: [
        {
          text: 'No',
          align: 'start',
          filterable: false,
          sortable: false,
          value: 'id',
        },
        { text: 'Cost Name', value: 'cost_name', width: '60%' },
        { text: 'Type', value: 'type' },
        { text: 'Status', value: 'status' },
        { text: 'Action', value: 'actions', width: '10%', sortable: false }
      ],
      pageCountC: 0,
      pageC:1,
      body_cost: [],

      // data table data port
      body_port: [],
      dialogP: false,
      searchP: '',
      rules: {
        counter: v => v.length <= 3 || 'Max 3 digits'
      },
      data_ports: [
        {
          text: 'No',
          align: 'start',
          filterable: false,
          sortable: false,
          value: 'id',
        },
        { text: 'Port Name', value: 'port_name', width: '60%' },
        { text: 'Caption', value: 'caption' },
        { text: 'Country', value: 'country' },
        { text: 'Status', value: 'status' },
        { text: 'Action', value: 'actions', width: '10%', sortable: false }
      ],
      pageCountP: 0,
      pageP:1,

      // data table data branch office
      body_branch_office: [],
      dialogBF: false,
      searchBF: '',
      data_branch_office: [
        {
          text: 'No',
          align: 'start',
          filterable: false,
          sortable: false,
          value: 'id',
        },
        { text: 'Branch Office Name', value: 'branch_office_name', sortable: false},
        { text: 'Branch Head', value: 'branch_head', sortable: false },
        { text: 'Phone', value: 'phone', sortable: false },
        { text: 'Email', value: 'email', sortable: false },
        { text: 'Address', value: 'address', sortable: false },
        { text: 'Status', value: 'status', sortable: false },
        { text: 'Action', value: 'actions', width: '5%', sortable: false }
      ],
      pageCountBF: 0,
      pageBF:1,

      // data partner form
      dp: {
        company_name: '',
        contact_person: '',
        npwp: '',
        address: '',
        city: '',
        country: '',
        postal_code: '',
        phone_number: '',
        fax_number: '',
        mobile_number: '',
        email: '',
        website: ''
      },

      // data cost form
      dc: {},

      // data port form
      p: {},

      // data branch office
      bf: {},

      // for v-select options
      type: ['customer', 'vendor'],
      countries: [ 
        {name: 'Afghanistan', code: 'AF'}, 
        {name: 'Åland Islands', code: 'AX'}, 
        {name: 'Albania', code: 'AL'}, 
        {name: 'Algeria', code: 'DZ'}, 
        {name: 'American Samoa', code: 'AS'}, 
        {name: 'AndorrA', code: 'AD'}, 
        {name: 'Angola', code: 'AO'}, 
        {name: 'Anguilla', code: 'AI'}, 
        {name: 'Antarctica', code: 'AQ'}, 
        {name: 'Antigua and Barbuda', code: 'AG'}, 
        {name: 'Argentina', code: 'AR'}, 
        {name: 'Armenia', code: 'AM'}, 
        {name: 'Aruba', code: 'AW'}, 
        {name: 'Australia', code: 'AU'}, 
        {name: 'Austria', code: 'AT'}, 
        {name: 'Azerbaijan', code: 'AZ'}, 
        {name: 'Bahamas', code: 'BS'}, 
        {name: 'Bahrain', code: 'BH'}, 
        {name: 'Bangladesh', code: 'BD'}, 
        {name: 'Barbados', code: 'BB'}, 
        {name: 'Belarus', code: 'BY'}, 
        {name: 'Belgium', code: 'BE'}, 
        {name: 'Belize', code: 'BZ'}, 
        {name: 'Benin', code: 'BJ'}, 
        {name: 'Bermuda', code: 'BM'}, 
        {name: 'Bhutan', code: 'BT'}, 
        {name: 'Bolivia', code: 'BO'}, 
        {name: 'Bosnia and Herzegovina', code: 'BA'}, 
        {name: 'Botswana', code: 'BW'}, 
        {name: 'Bouvet Island', code: 'BV'}, 
        {name: 'Brazil', code: 'BR'}, 
        {name: 'British Indian Ocean Territory', code: 'IO'}, 
        {name: 'Brunei Darussalam', code: 'BN'}, 
        {name: 'Bulgaria', code: 'BG'}, 
        {name: 'Burkina Faso', code: 'BF'}, 
        {name: 'Burundi', code: 'BI'}, 
        {name: 'Cambodia', code: 'KH'}, 
        {name: 'Cameroon', code: 'CM'}, 
        {name: 'Canada', code: 'CA'}, 
        {name: 'Cape Verde', code: 'CV'}, 
        {name: 'Cayman Islands', code: 'KY'}, 
        {name: 'Central African Republic', code: 'CF'}, 
        {name: 'Chad', code: 'TD'}, 
        {name: 'Chile', code: 'CL'}, 
        {name: 'China', code: 'CN'}, 
        {name: 'Christmas Island', code: 'CX'}, 
        {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
        {name: 'Colombia', code: 'CO'}, 
        {name: 'Comoros', code: 'KM'}, 
        {name: 'Congo', code: 'CG'}, 
        {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
        {name: 'Cook Islands', code: 'CK'}, 
        {name: 'Costa Rica', code: 'CR'}, 
        {name: 'Cote D\'Ivoire', code: 'CI'}, 
        {name: 'Croatia', code: 'HR'}, 
        {name: 'Cuba', code: 'CU'}, 
        {name: 'Cyprus', code: 'CY'}, 
        {name: 'Czech Republic', code: 'CZ'}, 
        {name: 'Denmark', code: 'DK'}, 
        {name: 'Djibouti', code: 'DJ'}, 
        {name: 'Dominica', code: 'DM'}, 
        {name: 'Dominican Republic', code: 'DO'}, 
        {name: 'Ecuador', code: 'EC'}, 
        {name: 'Egypt', code: 'EG'}, 
        {name: 'El Salvador', code: 'SV'}, 
        {name: 'Equatorial Guinea', code: 'GQ'}, 
        {name: 'Eritrea', code: 'ER'}, 
        {name: 'Estonia', code: 'EE'}, 
        {name: 'Ethiopia', code: 'ET'}, 
        {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
        {name: 'Faroe Islands', code: 'FO'}, 
        {name: 'Fiji', code: 'FJ'}, 
        {name: 'Finland', code: 'FI'}, 
        {name: 'France', code: 'FR'}, 
        {name: 'French Guiana', code: 'GF'}, 
        {name: 'French Polynesia', code: 'PF'}, 
        {name: 'French Southern Territories', code: 'TF'}, 
        {name: 'Gabon', code: 'GA'}, 
        {name: 'Gambia', code: 'GM'}, 
        {name: 'Georgia', code: 'GE'}, 
        {name: 'Germany', code: 'DE'}, 
        {name: 'Ghana', code: 'GH'}, 
        {name: 'Gibraltar', code: 'GI'}, 
        {name: 'Greece', code: 'GR'}, 
        {name: 'Greenland', code: 'GL'}, 
        {name: 'Grenada', code: 'GD'}, 
        {name: 'Guadeloupe', code: 'GP'}, 
        {name: 'Guam', code: 'GU'}, 
        {name: 'Guatemala', code: 'GT'}, 
        {name: 'Guernsey', code: 'GG'}, 
        {name: 'Guinea', code: 'GN'}, 
        {name: 'Guinea-Bissau', code: 'GW'}, 
        {name: 'Guyana', code: 'GY'}, 
        {name: 'Haiti', code: 'HT'}, 
        {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
        {name: 'Holy See (Vatican City State)', code: 'VA'}, 
        {name: 'Honduras', code: 'HN'}, 
        {name: 'Hong Kong', code: 'HK'}, 
        {name: 'Hungary', code: 'HU'}, 
        {name: 'Iceland', code: 'IS'}, 
        {name: 'India', code: 'IN'}, 
        {name: 'Indonesia', code: 'ID'}, 
        {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
        {name: 'Iraq', code: 'IQ'}, 
        {name: 'Ireland', code: 'IE'}, 
        {name: 'Isle of Man', code: 'IM'}, 
        {name: 'Israel', code: 'IL'}, 
        {name: 'Italy', code: 'IT'}, 
        {name: 'Jamaica', code: 'JM'}, 
        {name: 'Japan', code: 'JP'}, 
        {name: 'Jersey', code: 'JE'}, 
        {name: 'Jordan', code: 'JO'}, 
        {name: 'Kazakhstan', code: 'KZ'}, 
        {name: 'Kenya', code: 'KE'}, 
        {name: 'Kiribati', code: 'KI'}, 
        {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
        {name: 'Korea, Republic of', code: 'KR'}, 
        {name: 'Kuwait', code: 'KW'}, 
        {name: 'Kyrgyzstan', code: 'KG'}, 
        {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
        {name: 'Latvia', code: 'LV'}, 
        {name: 'Lebanon', code: 'LB'}, 
        {name: 'Lesotho', code: 'LS'}, 
        {name: 'Liberia', code: 'LR'}, 
        {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
        {name: 'Liechtenstein', code: 'LI'}, 
        {name: 'Lithuania', code: 'LT'}, 
        {name: 'Luxembourg', code: 'LU'}, 
        {name: 'Macao', code: 'MO'}, 
        {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
        {name: 'Madagascar', code: 'MG'}, 
        {name: 'Malawi', code: 'MW'}, 
        {name: 'Malaysia', code: 'MY'}, 
        {name: 'Maldives', code: 'MV'}, 
        {name: 'Mali', code: 'ML'}, 
        {name: 'Malta', code: 'MT'}, 
        {name: 'Marshall Islands', code: 'MH'}, 
        {name: 'Martinique', code: 'MQ'}, 
        {name: 'Mauritania', code: 'MR'}, 
        {name: 'Mauritius', code: 'MU'}, 
        {name: 'Mayotte', code: 'YT'}, 
        {name: 'Mexico', code: 'MX'}, 
        {name: 'Micronesia, Federated States of', code: 'FM'}, 
        {name: 'Moldova, Republic of', code: 'MD'}, 
        {name: 'Monaco', code: 'MC'}, 
        {name: 'Mongolia', code: 'MN'}, 
        {name: 'Montserrat', code: 'MS'}, 
        {name: 'Morocco', code: 'MA'}, 
        {name: 'Mozambique', code: 'MZ'}, 
        {name: 'Myanmar', code: 'MM'}, 
        {name: 'Namibia', code: 'NA'}, 
        {name: 'Nauru', code: 'NR'}, 
        {name: 'Nepal', code: 'NP'}, 
        {name: 'Netherlands', code: 'NL'}, 
        {name: 'Netherlands Antilles', code: 'AN'}, 
        {name: 'New Caledonia', code: 'NC'}, 
        {name: 'New Zealand', code: 'NZ'}, 
        {name: 'Nicaragua', code: 'NI'}, 
        {name: 'Niger', code: 'NE'}, 
        {name: 'Nigeria', code: 'NG'}, 
        {name: 'Niue', code: 'NU'}, 
        {name: 'Norfolk Island', code: 'NF'}, 
        {name: 'Northern Mariana Islands', code: 'MP'}, 
        {name: 'Norway', code: 'NO'}, 
        {name: 'Oman', code: 'OM'}, 
        {name: 'Pakistan', code: 'PK'}, 
        {name: 'Palau', code: 'PW'}, 
        {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
        {name: 'Panama', code: 'PA'}, 
        {name: 'Papua New Guinea', code: 'PG'}, 
        {name: 'Paraguay', code: 'PY'}, 
        {name: 'Peru', code: 'PE'}, 
        {name: 'Philippines', code: 'PH'}, 
        {name: 'Pitcairn', code: 'PN'}, 
        {name: 'Poland', code: 'PL'}, 
        {name: 'Portugal', code: 'PT'}, 
        {name: 'Puerto Rico', code: 'PR'}, 
        {name: 'Qatar', code: 'QA'}, 
        {name: 'Reunion', code: 'RE'}, 
        {name: 'Romania', code: 'RO'}, 
        {name: 'Russian Federation', code: 'RU'}, 
        {name: 'RWANDA', code: 'RW'}, 
        {name: 'Saint Helena', code: 'SH'}, 
        {name: 'Saint Kitts and Nevis', code: 'KN'}, 
        {name: 'Saint Lucia', code: 'LC'}, 
        {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
        {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
        {name: 'Samoa', code: 'WS'}, 
        {name: 'San Marino', code: 'SM'}, 
        {name: 'Sao Tome and Principe', code: 'ST'}, 
        {name: 'Saudi Arabia', code: 'SA'}, 
        {name: 'Senegal', code: 'SN'}, 
        {name: 'Serbia and Montenegro', code: 'CS'}, 
        {name: 'Seychelles', code: 'SC'}, 
        {name: 'Sierra Leone', code: 'SL'}, 
        {name: 'Singapore', code: 'SG'}, 
        {name: 'Slovakia', code: 'SK'}, 
        {name: 'Slovenia', code: 'SI'}, 
        {name: 'Solomon Islands', code: 'SB'}, 
        {name: 'Somalia', code: 'SO'}, 
        {name: 'South Africa', code: 'ZA'}, 
        {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
        {name: 'Spain', code: 'ES'}, 
        {name: 'Sri Lanka', code: 'LK'}, 
        {name: 'Sudan', code: 'SD'}, 
        {name: 'Suriname', code: 'SR'}, 
        {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
        {name: 'Swaziland', code: 'SZ'}, 
        {name: 'Sweden', code: 'SE'}, 
        {name: 'Switzerland', code: 'CH'}, 
        {name: 'Syrian Arab Republic', code: 'SY'}, 
        {name: 'Taiwan, Province of China', code: 'TW'}, 
        {name: 'Tajikistan', code: 'TJ'}, 
        {name: 'Tanzania, United Republic of', code: 'TZ'}, 
        {name: 'Thailand', code: 'TH'}, 
        {name: 'Timor-Leste', code: 'TL'}, 
        {name: 'Togo', code: 'TG'}, 
        {name: 'Tokelau', code: 'TK'}, 
        {name: 'Tonga', code: 'TO'}, 
        {name: 'Trinidad and Tobago', code: 'TT'}, 
        {name: 'Tunisia', code: 'TN'}, 
        {name: 'Turkey', code: 'TR'}, 
        {name: 'Turkmenistan', code: 'TM'}, 
        {name: 'Turks and Caicos Islands', code: 'TC'}, 
        {name: 'Tuvalu', code: 'TV'}, 
        {name: 'Uganda', code: 'UG'}, 
        {name: 'Ukraine', code: 'UA'}, 
        {name: 'United Arab Emirates', code: 'AE'}, 
        {name: 'United Kingdom', code: 'GB'}, 
        {name: 'United States', code: 'US'}, 
        {name: 'United States Minor Outlying Islands', code: 'UM'}, 
        {name: 'Uruguay', code: 'UY'}, 
        {name: 'Uzbekistan', code: 'UZ'}, 
        {name: 'Vanuatu', code: 'VU'}, 
        {name: 'Venezuela', code: 'VE'}, 
        {name: 'Viet Nam', code: 'VN'}, 
        {name: 'Virgin Islands, British', code: 'VG'}, 
        {name: 'Virgin Islands, U.S.', code: 'VI'}, 
        {name: 'Wallis and Futuna', code: 'WF'}, 
        {name: 'Western Sahara', code: 'EH'}, 
        {name: 'Yemen', code: 'YE'}, 
        {name: 'Zambia', code: 'ZM'}, 
        {name: 'Zimbabwe', code: 'ZW'} 
      ],
      status: ['active', 'in-active'],

      currentPassword: '',
      password: '',
      rePassword: '',

      show1: false,
      show2: false,
      show3: false,

      // id for updating and getting by id and deleting by id
      id: 0
    }
  },

  computed: {
    retypePassword () {
      return () => (this.password === this.rePassword) || "Password doesn't match."
    },
    passwordConfirm () {
      return () => (this.currentPassword === this.$auth.user.currentPassword) || 'Incorrect password.'
    }
  },

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.isSubmiting = true
        this.$toast.global.app_loading()
        this.$axios.put(`/edit_password/${this.$auth.user.id}`, qs.stringify(this.password))
          .then((response) => {
            this.$auth.setUser({ ...this.$auth.user, currentPassword: this.password })
            this.$toast.global.app_success('Password successfully updated.')
          })
          .catch((err) => {
            err && this.$toast.global.app_error('Failed to change password')
          })
          .finally(() => {
            this.isSubmiting = false
            this.clear()
            this.$router.replace('/logout')
          })
      }
    },

    // setting the id
    set (id) {
      this.id = id
    },

    // getting methods

    async getDataPartner () {
      try {
        this.$toast.global.app_loading()
        const response = await this.$axios.get('data-partner')
        if (response.status === 200) {
          this.$toast.clear()
          const { data } = response.data
          for (let i = 1; i < this.body.length; i++) {
            this.body.no = i
          }
          this.body = data
          console.log(data)
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load data partner, ${message}`)
      }
    },

    async getDC () {
      try {
        const response = await this.$axios.get('data-cost')
        if (response.status === 200) {
          const { data } = response.data
          for (let i = 1; i < this.body.length; i++) {
            this.body.no = i
          }
          this.body_cost = data
          console.log(data)
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load data partner, ${message}`)
      }
    },

    async getP () {
      try {
        const response = await this.$axios.get('data-port')
        if (response.status === 200) {
          const { data } = response.data
          for (let i = 1; i < this.body.length; i++) {
            this.body.no = i
          }
          this.body_port = data
          console.log(data)
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load data partner, ${message}`)
      }
    },

    async getBF () {
      try {
        const response = await this.$axios.get('data-branch')
        if (response.status === 200) {
          const { data } = response.data
          for (let i = 1; i < this.body.length; i++) {
            this.body.no = i
          }
          this.body_branch_office = data
          console.log(data)
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load data branch office, ${message}`)
      }
    },

    // getting by id methods

    async get1DataPartner (id) {
      try {
        this.id = id
        const response = await this.$axios.get('data-partner/' + id)
        if (response.status === 200) {
          const { data } = response.data
          this.dp = data
          console.log(data)
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load data partner, ${message}`)
      }
    },

    async get1DataCost (id) {
      try {
        this.id = id
        const response = await this.$axios.get('data-cost/' + id)
        if (response.status === 200) {
          const { data } = response.data
          this.dc = data
          console.log(data)
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load data cost, ${message}`)
      }
    },

    async get1DataPort (id) {
      try {
        this.id = id
        const response = await this.$axios.get('data-port/' + id)
        if (response.status === 200) {
          const { data } = response.data
          this.p = data
          console.log(data)
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load data port, ${message}`)
      }
    },

    async get1DataBranchOffice (id) {
      try {
        this.id = id
        const response = await this.$axios.get('data-branch/' + id)
        if (response.status === 200) {
          const { data } = response.data
          this.bf = data
          console.log(data)
        }
      } catch (error) {
        const response = error.response.data
        const message =
          response && response.message && ` , ${response.message}`
        this.$toast.global.app_error(`Failed to load data branch office, ${message}`)
      }
    },

    // adding methods

    async addDP () {
      try {
        const response = await this.$axios.post('data-partner', this.dp)
        if (response.status === 200) {
          this.dialogDP = false 
          this.$toast.global.app_success('successfully added new company')
          this.getDataPartner()
        }
      } catch (error) {
        const response = error.response.data
        let messages = ''
        if (response.message.length) {
          response.message.forEach(el => {
            messages += el.message
          })
        } else {
          messages =
            response && response.message && ` , ${response.message}`
        }
        this.$toast.global.app_error(`Failed to create new Data partner ${messages}`)
      }
    },

    async addDC () {
      try {
        if (this.dc.type === true) {
          this.dc.type = 'refund'
        } else {
          this.dc.type = 'not found'
        }
        const response = await this.$axios.post('data-cost', this.dc)
        if (response.status === 200) {
          this.dialogC = false 
          this.$toast.global.app_success('successfully added new data-cost')
          this.getDC()
        }
      } catch (error) {
        const response = error.response.data
        let messages = ''
        if (response.message.length) {
          response.message.forEach(el => {
            messages += el.message
          })
        } else {
          messages =
            response && response.message && ` , ${response.message}`
        }
        this.$toast.global.app_error(`Failed to create new Data cost ${messages}`)
      }
    },

    async addP () {
      try {
        const response = await this.$axios.post('data-port', this.p)
        if (response.status === 200) {
          this.dialogP = false 
          this.$toast.global.app_success('successfully added new data-port')
          this.getP()
        }
      } catch (error) {
        const response = error.response.data
        let messages = ''
        if (response.message.length) {
          response.message.forEach(el => {
            messages += el.message
          })
        } else {
          messages =
            response && response.message && ` , ${response.message}`
        }
        this.$toast.global.app_error(`Failed to create new Data cost ${messages}`)
      }
    },

    async addBF () {
      try {
        const response = await this.$axios.post('data-branch', this.bf)
        if (response.status === 200) {
          this.dialogBF = false 
          this.$toast.global.app_success('successfully added new data-branch-office')
          this.getBF()
        }
      } catch (error) {
        console.log(error, 'ini errornya bang')
        const response = error.response.data
        let messages = ''
        if (response.message.length) {
          response.message.forEach(el => {
            messages += el.message
          })
        } else {
          messages =
            response && response.message && ` , ${response.message}`
        }
        this.$toast.global.app_error(`Failed to create new Data branch office ${messages}`)
      }
    },

    // updating methods

    async updateDP () {
      try {
        const response = await this.$axios.put('data-partner/' + this.id, this.dp)
        if (response.status === 200) {
          this.dialogDataPartner = false 
          this.$toast.global.app_success('successfully updated data partner')
          this.getDataPartner()
          this.closeDP()
        }
      } catch (error) {
        const response = error.response.data
        let messages = ''
        if (response.message.length) {
          response.message.forEach(el => {
            messages += el.message
          })
        } else {
          messages =
            response && response.message && ` , ${response.message}`
        }
        this.$toast.global.app_error(`Failed to update Data partner ${messages}`)
      }
    },

    async updateDC () {
      try {
        const response = await this.$axios.put('data-cost/' + this.id, this.dc)
        if (response.status === 200) {
          this.dialogDataCost = false 
          this.$toast.global.app_success('successfully updated data partner')
          this.getDC()
          this.closeDC()
        }
      } catch (error) {
        const response = error.response.data
        let messages = ''
        if (response.message.length) {
          response.message.forEach(el => {
            messages += el.message
          })
        } else {
          messages =
            response && response.message && ` , ${response.message}`
        }
        this.$toast.global.app_error(`Failed to update Data cost ${messages}`)
      }
    },

    async updateP () {
      try {
        const response = await this.$axios.put('data-port/' + this.id, this.p)
        if (response.status === 200) {
          this.dialogDataPort = false 
          this.$toast.global.app_success('successfully updated data port')
          this.getP()
          this.closeP()
        }
      } catch (error) {
        const response = error.response.data
        let messages = ''
        if (response.message.length) {
          response.message.forEach(el => {
            messages += el.message
          })
        } else {
          messages =
            response && response.message && ` , ${response.message}`
        }
        this.$toast.global.app_error(`Failed to update Data port ${messages}`)
      }
    },

    async updateBF () {
      try {
        const response = await this.$axios.put('data-branch/' + this.id, this.bf)
        if (response.status === 200) {
          this.dialogDataBranchOffice = false 
          this.$toast.global.app_success('successfully updated data branch')
          this.getBF()
          this.closeBF()
        }
      } catch (error) {
        const response = error.response.data
        let messages = ''
        if (response.message.length) {
          response.message.forEach(el => {
            messages += el.message
          })
        } else {
          messages =
            response && response.message && ` , ${response.message}`
        }
        this.$toast.global.app_error(`Failed to update Data branch ${messages}`)
      }
    },

    // deleting methods

    async deleteDP () {
      try {
        const response = await this.$axios.delete('data-partner/' + this.id)
        if (response.status === 200) {
          this.$toast.global.app_success('successfully deleted data partner')
          this.getDataPartner()
          this.dialog_deleteDP = false
        }
      } catch (error) {
        const response = error.response.data
        let messages = ''
        if (response.message.length) {
          response.message.forEach(el => {
            messages += el.message
          })
        } else {
          messages =
            response && response.message && ` , ${response.message}`
        }
        this.$toast.global.app_error(`Failed to delete Data partner ${messages}`)
      }
    },

    async deleteDC () {
      try {
        const response = await this.$axios.delete('data-cost/' + this.id)
        if (response.status === 200) {
          this.$toast.global.app_success('successfully updated data partner')
          this.getDC()
          this.dialog_deleteDC = false
        }
      } catch (error) {
        const response = error.response.data
        let messages = ''
        if (response.message.length) {
          response.message.forEach(el => {
            messages += el.message
          })
        } else {
          messages =
            response && response.message && ` , ${response.message}`
        }
        this.$toast.global.app_error(`Failed to delete Data cost ${messages}`)
      }
    },

    async deleteP () {
      try {
        const response = await this.$axios.delete('data-port/' + this.id)
        if (response.status === 200) {
          this.$toast.global.app_success('successfully updated data partner')
          this.getP()
          this.dialog_deleteP = false
        }
      } catch (error) {
        const response = error.response.data
        let messages = ''
        if (response.message.length) {
          response.message.forEach(el => {
            messages += el.message
          })
        } else {
          messages =
            response && response.message && ` , ${response.message}`
        }
        this.$toast.global.app_error(`Failed to update Data port ${messages}`)
      }
    },

    // closing dialog methods

    closeDP () {
      this.dp = {}
      this.id = 0
      this.dialogDataPartner = false
    },

    closeDC () {
      this.dc = {}
      this.id = 0
      this.dialogDataCost = false
    },

    closeP () {
      this.p = {}
      this.id = 0
      this.dialogDataPort = false
    },

    closeBF () {
      this.bf = {}
      this.id = 0
      this.dialogDataBranchOffice = false
    },

    clear () {
      this.$refs.form.reset()
    },

    cancel () {
      this.clear()
      this.$router.back()
    }
  },
  created () {
    this.getDataPartner()
    this.getDC()
    this.getP()
  }
}
</script>

<style>

.v-tab.v-tab--active {
  background-color: #ffffff;
  border: #9e9e9e;
  border-style: solid;
  border-width: thin;
}

.v-text-field__details {
  display: none;
}

</style>

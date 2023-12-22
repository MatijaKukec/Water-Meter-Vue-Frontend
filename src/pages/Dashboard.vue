<template>
  <div class="container-fluid page-body-wrapper">
    <div class="main-panel">
      <div class="content-wrapper">
        <div class="row justify-content-center p-1 m-0">
          <div class="col-sm-5 p-1">
            <div class="card shadow">
              <div
                class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
              >
                <div class="float-left">
                  <h6 class="m-0 font-weight-bold text-primary">Karta</h6>
                </div>
                <div
                  id="signalStatus"
                  class="btn-circle float-right bg-success"
                ></div>
              </div>
              <div class="card-body">
                <div style="height: calc(100vh - 250px); min-height: 50vh">
                  <TestMap
                    v-if="!isLoading"
                    :map-data="jsonData"
                    @marker-click="handleMarkerClick"
                  />
                  <div v-else>Loading...</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-7 p-1">
            <div class="card shadow">
              <div
                class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
              >
                <div class="float-left">
                  <h6 class="m-0 font-weight-bold text-primary">Lokacije</h6>
                </div>
                <div class="float-right">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Nova lokacija<i class="mdi mdi-play-circle ms-1"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <TableT v-if="!isLoading" :jdata="jsonData" :cols="columns" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TabulatorFull as Tabulator } from "tabulator-tables"; //import Tabulator library
import TestMap from "../components/TestMap.vue";
import axios from "axios";
import TableT from "../components/Table.vue";

export default {
  components: {
    TestMap,
    TableT,
  },
  data() {
    return {
      jsonData: [],
      columns: [
        { title: "Naziv lokacije", field: "name" },
        { title: "Adresa", field: "address" },
        { title: "Grad", field: "city" },
        { title: "Zemlja", field: "country" },
      ],
      tabulator: null,
      isLoading: true,
    };
  },
  methods: {
    async get() {
      try {
        const res = await axios.get(`http://localhost:8080/api/Locations`);
        this.jsonData = res.data;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
    handleMarkerClick() {
      // Function to be called
      console.log('Event occurred!');
    },
  },
  async mounted() {
    await this.get();
  },
};
</script>

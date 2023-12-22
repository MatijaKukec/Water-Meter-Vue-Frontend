<template>
  <div
    ref="table"
    class="table-responsive thead-dark table-dark table-borderless"
    style="height: calc(100vh - 250px); min-height: 50vh"
  ></div>
</template>
<script>
import { TabulatorFull as Tabulator } from "tabulator-tables"; //import Tabulator library

export default {
  name: "Table",
  props: {
    jdata: {
      type: Array,
      required: true,
    },
    cols: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tabulator: null,
    };
  },

  async mounted() {
    // After loading data, initialize Tabulator
    this.tabulator = new Tabulator(this.$refs.table, {
      data: this.jdata,
      columns: this.cols,
      reactiveData: true,
      pagination: true,
      layout: "fitColumns", //fit columns to width of table (optional)
      langs: {
        "hr-HR": {
          columns: {
            name: "Ime", //replace the title of column name with the value "Name"
          },
          data: {
            loading: "Učitavanje", //data loader text
            error: "Error", //data error text
          },
          groups: {
            //copy for the auto generated item count in group header
            item: "item", //the singular  for item
            items: "items", //the plural for items
          },
          pagination: {
            page_size: "Vel.", //label for the page size select element
            page_title: "Prikaži", //tooltip text for the numeric page button, appears in front of the page number (eg. "Show Page" will result in a tool tip of "Show Page 1" on the page 1 button)
            first: "Prva", //text for the first page button
            first_title: "Prva str.", //tooltip text for the first page button
            last: "Zadnja",
            last_title: "Zadnja str.",
            prev: "Prije",
            prev_title: "Prije str.",
            next: "Iduća",
            next_title: "Iduća str.",
            all: "Sve",
            counter: {
              showing: "Prikaz",
              of: "od",
              rows: "redaka",
              pages: "str.",
            },
          },
          headerFilters: {
            default: "filter column...", //default header filter placeholder text
            columns: {
              name: "filter name...", //replace default header filter text for column name
            },
          },
        },
      },
      locale: true,
      selectable: true,
      rowClick: this.handleRowClick,

      // Other Tabulator options
    });
    // Add the rowClick event listener using the on method
    this.tabulator.on("rowClick", (e, row) => {
      const rowData = row.getData();
      console.log("Selected row data:", rowData);
      // Call your function or perform any desired actions with the row data
      this.$emit("rowSelected", rowData);
      this.zoomToLocation(rowData);
    });
  },
};
</script>

<style lang="scss">
@import "tabulator-tables/dist/css/tabulator_midnight.css";
// @import "tabulator-tables/dist/css/tabulator_bootstrap5.min.css";
</style>

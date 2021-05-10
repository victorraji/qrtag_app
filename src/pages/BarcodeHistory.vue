<template>
<div>
   <el-page-header class="h-6 bg-pink-900 text-white" @back="goBack"> </el-page-header>
  <div class="bg-green-200 h-screen sm:px-10 px-2">
   
    <div class="font-bold text-2xl flex justify-center py-10 lg:text-2xl">
      <div class="text-pink-900">Barcode History</div>
    </div>
    <div class="sm:flex sm:justify-between">
      <div class="flex justify-between">
        <div class="flex h-9 mr-2 items-center bg-gray-200 p-1 rounded-lg">
          <div
            @click="gridView"
            class="py-1 px-5 mr-2 cursor-pointer"
            :class="{
              'rounded-lg bg-white ': isGrid,
              'cursor-pointer': isList,
            }"
          >
            <img :src="GridIcon" class="py-1" alt="grid" />
          </div>
          <div
            @click="listView"
            class="py-1 px-4"
            :class="{
              'rounded-lg bg-white ': isList,
              'cursor-pointer': isGrid,
            }"
          >
            <img :src="MenuIcon" alt="menu" />
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isGrid"
      class="grid gap-6 gap-y-6 sm:grid-cols-4 grid-cols-2 py-6"
    >
      <div v-for="barcode in BarcodesList" :key="barcode" :value="barcode">
        <div class="rounded-t-lg bg-white py-4">
          <div class="flex justify-end pr-5"></div>
          <div class="flex flex-col justify-center items-center">
            <div>
              <img
                :size="84"
                :src="`https://qrtag.net/api/qr_4.png?url=https://${barcode_url}`"
              />
            </div>
            <span class="font-bold text-sm pb-1 pt-2">
              {{ barcode.time_stamp | formatDate }}</span
            >
            <span class="text-xs font-normal">
              {{ barcode.time_stamp | formatTime }}</span
            >
          </div>
        </div>
        <div
          class="rounded-b-lg uppercase font-bold text-white text-xs shadow bg-pink-900 flex justify-center items-center py-4"
        >
          {{ barcode.barcode_url }}
        </div>
      </div>
    </div>
    <div v-if="isList">
      <barcodes-table
        :tableData="BarcodesList"
        :handleDeletebarcode="handleDeletebarcode"
      ></barcodes-table>
    </div>
  </div>
</div>
</template>
<script>
import moment from "moment";
import { BarcodeDetail } from "@/store/models/Barcodes";
import barcodesTable from "../components/BarcodeHistoryTable";
import GridIcon from "@/assets/images/grid.png";
import MenuIcon from "@/assets/images/menu.png";
export default {
  components: { barcodesTable },
  filters: {
    formatDate: function (value) {
      if (!value) return "";
      const dateFormat = "Do of MMMM gggg";
      let date = moment(value).format(dateFormat);
      return date;
    },
    formatTime: function (value) {
      if (!value) return "";
      const timeFormat = "hh:mm:ss a";
      let time = moment(value).format(timeFormat);
      return time;
    },
  },
  data() {
    return {
      isGrid: false,
      isList: true,
      GridIcon: GridIcon,
      MenuIcon: MenuIcon,
    };
  },
  computed: {
    BarcodesList() {
      let data = BarcodeDetail.all();
      delete data.$id;
      if (!data) {
        return [];
      } else {
        return data;
      }
    },
  },
  methods: {
    listView() {
      (this.isList = true), (this.isGrid = false);
    },
    gridView() {
      (this.isList = false), (this.isGrid = true);
    },
    handleDeletebarcode() {},
    goBack() {
      this.$router.go(-1);
    },
    addUser() {
      this.ModalVisibleNew = true;
    },
    cancel() {},
  },
};
</script>
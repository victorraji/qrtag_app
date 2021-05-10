<template>
  <div class="mt-7">
    <template>
      <div>
        <el-table
          class="pt-4 rounded-lg font-semibold text-sm"
          stripe
          index
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column label="S/N" width="50">
            <template slot-scope="scope">
              <span class="lowercase ml-2">
                {{ scope.$index + 1 }}</span
              ></template
            >
          </el-table-column>
          <el-table-column label="Time" width="auto">
            <template slot-scope="scope">
              <span>
                {{ scope.row.time_stamp | formatDateAndTime }}</span
              ></template
            >
          </el-table-column>

          <el-table-column label="URL" width="auto">
            <template slot-scope="scope">
              <span
                @click="goToLink(scope.row.barcode_url)"
                class="cursor-pointer text-blue-700 underline"
              >
                {{ scope.row.barcode_url }}
              </span>
            </template>
          </el-table-column>
          <el-table-column label="Actions" width="auto">
            <template class="flex" slot-scope="scope">
              <el-button type="text" @click="handleDeleteBarcode(scope.row.id)">
                <i class="el-icon-delete text-red-600"></i
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </template>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    total: { type: Number },
    tableData: Array,
  },
  filters: {
    formatDateAndTime: function (value) {
      if (!value) return "";
      const dateFormat = "Do of MMMM gggg, hh:mm:ss a";
      let date = moment(value).format(dateFormat);
      return date;
    },
  },
  computed: {},
  mounted() {},
  methods: {
    handleDeleteBarcode() {},
    goToLink(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
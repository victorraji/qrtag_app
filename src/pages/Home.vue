<template>
  <div>
    <div
      class="grid rounded-xl lg:grid-cols-4 w-screen h-screen overflow-y-auto"
    >
      <div
        class="flex flex-col justify-center col-span-2 items-center bg-green-200"
      >
      <img class="h-16 md:mb-10 mb-24" src="https://www.logologo.com/logos/sunrise-plant-logo.jpg" alt="">
        <card class="md:w-4/6 w-5/6">
          <div class="flex flex-col items-center">
            <span
              class="w-full flex justify-center items-center text-primary bg-pinkBackground pt-6 mb-8 font-bold"
              >QrCode Scanner XD</span
            >
            <div v-loading="loading" class="font-semibold w-4/5">
              <el-input
                @input="clearBarcode"
                placeholder="Type in a web address"
                v-model="email"
              ></el-input>
              <qr-button
                class="pt-2 pb-2 w-full font-black"
                :primary="true"
                :action="checkValid"
                >Generate Bar Code</qr-button
              >
            </div>
          </div>
        </card>
        <div class="py-2">
          <img v-if="qrImage" :src="qrImage" alt="qrtag" />
          <div class="font-bold flex justify-center ">{{ emailAfterGeneration }}</div>
        </div>
        <div class="">
          <div
            class="text-4xl flex justify-center text-white pb-6"
            :class="{
              'text-red-900 ': BarcodesSize > 9,
            }"
          >
            {{ BarcodesSize }}/10
          </div>
          <el-button
            class="bg-pink-900 rounded-lg font-bold"
            @click="viewHistory"
            size="mini"
            type="primary"
            >View barcode history <i class="el-icon-caret-right"></i>
          </el-button>
        </div>
      </div>

      <div
        class="hidden lg:block col-span-2 relative text-center text-pink-900 bg-cover bg-center backgroundImage"
      >
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="flex w-2/5 flex-col justify-center text-left">
            <span class="pb-4 font-bold text-lg"
              >Use QrCode Scanner XD to :</span
            >
            <ul class="list-disc text-base ml-4">
              <li class="pb-6">
                Provide quick, easy retrieval of a product's Information
              </li>
              <li class="pb-6">Manage schedules And Bank Automations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BarcodeDetail } from "@/store/models/Barcodes";
import moment from "moment";
import Card from "@/components/Card";
import QrButton from "@/components/Button";
export default {
  components: { Card, QrButton },
  data() {
    return {
      email: "",
      loading: false,
      emailAfterGeneration: "",
      qrImage: "",
    };
  },
  computed: {
    BarcodesList() {
      let data = BarcodeDetail.all();
      return data;
    },
    BarcodesSize() {
      let size = this.BarcodesList.length;
      return size;
    },
  },
  methods: {
    validURL(str) {
      //function to validate a web address
      var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      ); // fragment locator
      return !!pattern.test(str);
    },
    checkValid() {
      if (!this.email) {
        this.$notify.error({
          title: "Invalid",
          message: "Pls Fill in an email address",
          position: "top-left",
        });
      } else if (this.validURL(this.email)) {
        this.generateCode();
      } else {
        this.$notify.error({
          title: "Invalid",
          message: "Pls Fill in a valid email address",
          position: "top-left",
        });
      }
    },
    viewHistory() {
      this.$router.push("barcode-history");
    },
    clearBarcode() {
      this.qrImage = "";
      this.emailAfterGeneration=""
    },
    generateCode() {
      if (this.BarcodesSize < 10) {
        // const timeFormat = "Do of MMMM gggg, hh:mm:ss a";
        let timeNow = moment().format();
        this.loading = true;
        this.emailAfterGeneration = this.email;
        setTimeout(
          () => (
            (this.loading = false),
            (this.qrImage =
              "https://qrtag.net/api/qr_4.png?url=https://" + this.email)
          ),
          2000
        );
        BarcodeDetail.insert({
          data: {
            time_stamp: timeNow,
            barcode_url: this.emailAfterGeneration,
          },
        });

        this.email = "";
      } else {
        this.$notify.error({
          title: "Reached Limit!",
          message: "Please Refresh the Page to regenerate new barcodes",
          position: "top-left",
        });
      }
    },
  },
};
</script>

<style scoped>
.backgroundImage {
  background-image: url(../assets/images/landingImage.jpeg);
}

.circular {
  display: initial;
}
</style>

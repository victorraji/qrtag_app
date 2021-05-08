<template>
  <div>
    <div class="grid p-5 rounded-xl lg:grid-cols-5 w-screen h-screen overflow-y-auto">
      <div class="flex flex-col justify-center col-span-3 items-center lg:bg-green-200">
        <card class="md:w-4/6 w-full" v-loading="loading">
          <div class="flex flex-col items-center">
            <span
              class="w-full flex justify-center items-center text-primary bg-pinkBackground py-6 mb-8 font-bold"
              >Type in the website to create your QrCode</span
            >
            <div class="font-semibold w-4/5">
              victor raji
              <qr-button
                class="pt-2 pb-2 w-full  font-black"
                :primary="true"
                :action="login"
                >Login</qr-button
              >
            </div>
          </div>
        </card>
        <div class="py-6">
          <img :src="AppLogo" class alt="logo" />
        </div>
      </div>
      <div
        class="hidden lg:block col-span-2 relative text-center text-green-800 bg-cover bg-center backgroundImage"
      >
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="flex w-2/5 flex-col justify-center text-left">
            <span class="pb-4 font-bold text-lg">Use Synaptron EMR to :</span>
            <ul class="list-disc text-base ml-4">
              <li class="pb-6">
                Provide quick, easy retrieval of a patient's entire clinical
                record
              </li>
              <li class="pb-6">
                Manage schedules & health reminders; e-prescription,e-blood bank
                and bank automation
              </li>
              <li class="pb-6">
                Manage chronic conditions via customised patients' portal
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import QrButton from "@/components/Button";
import AppLogo from "@/assets/images/scanner.png";
export default {
  components: { Card, QrButton },
  data() {
    return {
      AppLogo: AppLogo,
    };
  },
};
</script>

<style scoped>
.backgroundImage {
  background-image: url(../assets/images/landingImage.jpeg);
}
</style>

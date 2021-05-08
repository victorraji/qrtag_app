<template>
  <div>
    <div v-if="primary">
      <button
        class="bg-green-200 text-xs text-white font-semibold w-full h-10 px-6 rounded-lg"
        @click.prevent="action"
      >
        <slot></slot>
      </button>
    </div>
    <div v-else>
      <button
        class="w-full text-primary text-xs bg-secondary h-10 px-6 rounded-lg"
        @click.prevent="action"
      >
        <slot></slot>
      </button>
    </div>
  </div>
</template>

<script>
// A component for buttons in the app
export default {
  name: "emr-button",
  props: {
    action: Function,
    primary: { Boolean, default: true }
  }
};
</script>

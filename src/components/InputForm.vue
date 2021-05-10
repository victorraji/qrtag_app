<template>
  <el-form-item class="font-semibold text-black-1" :label="label" :prop="name">
    <el-input
      v-bind="$attrs"
      v-on="$listeners"
      :placeholder="placeholder"
      :type="type"
    ></el-input>
  </el-form-item>
</template>

<script>
/**
 * Form input component which serves as a wrapper over Element UI form input component.
 * It can handle the following types of inputs --> text, email, number and textarea
 */

export default {
  name: "form-input",

  props: {
    label: { type: String, default: "" },
    required: { type: Boolean, default: false },
    placeholder: { type: String, default: "" },
    name: { type: String, required: true },
    // value: { required: true, type: String },
    type: { required: true, type: String },
  },
};
</script>

<script setup lang="ts">
import '../../ui-libs/src/index';
</script>

<template>
  <div>
    <h2>Vue Demo Web Component Input</h2>
    <div>
      <form @submit.prevent="submitForm">
        <!-- <input v-model="formValue" type="text" placeholder="Enter your name" required /> -->
        <pj1-input v-model="formValue" @onchange="onChange" type="text" placeholder="Place holder for input" required />
        <br>
        <input type="submit" value="Submit" />
      </form>
      <br>
      <code>Form value: {{ formValue }}</code>
    </div>
  </div>
</template>

<script  lang="ts">
export default {
  data() {
    return {
      formValue: "",
      formSubmitted: false,
    };
  },
  methods: {
    submitForm: function () {
      this.formSubmitted = true;
      alert(this.formValue);
    },
    onChange: (e: any) => {
      console.log('@@onChange', e?.detail?.target?.value)
    }
  },
};
</script>

<style scoped></style>

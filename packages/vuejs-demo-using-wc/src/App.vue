<script setup lang="ts">
</script>

<template>
  <div>
    <h2>Vue Demo Web Component Input</h2>
    <div>
      <form @submit.prevent="submitForm">
        <!-- <input v-model="formValue" type="text" placeholder="Enter your name" required /> -->
        <pj1-input :value="formValue" @onchange="onChange" type="text" required="true" />
        <input type="submit" value="Submit" :disabled="!formValue" />
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
    onChange: function (e: any) {
      console.log('@@onChange', e?.detail?.target?.value);
      this.formValue = e?.detail?.target?.value || '';
    }
  },
};
</script>

<style scoped></style>

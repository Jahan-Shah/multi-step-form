<script setup lang="ts">
import { computed, ref } from "vue";

const modelValue = defineModel();
const label = defineModel<string>("label");
const type = defineModel<string>("type");
const placeHolder = defineModel<string>("placeHolder");
const required = defineModel<boolean>("required", {
  default: true,
});
const isValid = defineModel<boolean>("isValid", {
  default: true,
});

const modalInput = ref(true);

const blur = () => {
  if (!modelValue.value) modalInput.value = false;
};

const requiredField = computed(() => {
  return required.value && !modalInput.value;
});
</script>

<template>
  <div class="relative flex flex-col">
    <label class="text-xs font-medium" v-if="label" :for="label">{{
      label
    }}</label>
    <span
      v-if="requiredField"
      class="absolute right-0 top-0 text-xs font-bold text-error"
    >
      This field is required
    </span>
    <input
      @blur="blur"
      @focus="modalInput = true"
      :class="{ 'border-error': requiredField }"
      class="label mt-0.5 rounded font-medium placeholder:font-normal hover:ring-2 focus:outline-none focus:ring-2 active:ring-2 md:mt-3"
      :id="label"
      :type="type"
      :name="label"
      :required="required"
      :placeholder="placeHolder"
      v-model="modelValue"
    />
  </div>
</template>

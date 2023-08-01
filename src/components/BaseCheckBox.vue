<script setup lang="ts">
import { computed } from "vue";

const modelValue = defineModel();
const title = defineModel<string>("title");
const description = defineModel<string>("description");
const price = defineModel<number>("price", { default: 0 });
const duration = defineModel<string>("duration");

const repTitle = computed(() => {
  return title.value?.replace(/\s+/g, "").toLowerCase();
});

const calcPrice = computed(() => {
  if (duration.value === "Yearly") {
    return price.value * 10;
  }
  if (duration.value === "Monthly") {
    return price.value;
  }
});
</script>

<template>
  <label
    :for="repTitle"
    class="label flex items-center rounded-lg border border-secondary-400 py-4 ring-primary-300 hover:ring-2 focus:ring-2 [&:has(input:checked)]:ring-2"
  >
    <input
      type="checkbox"
      :id="repTitle"
      :value="{ title, price: calcPrice }"
      :name="repTitle"
      v-model="modelValue"
      class="label relative h-5 w-5 appearance-none rounded p-0 text-lg text-secondary-100 checked:border-primary-300 checked:bg-primary-300 before:checked:absolute before:checked:left-1/2 before:checked:top-1/2 before:checked:-translate-x-1/2 before:checked:-translate-y-1/2 before:checked:text-secondary-100 before:checked:content-['\2713'] focus:ring-2"
    />
    <div class="flex w-full justify-between">
      <div class="ml-4">
        <h3 class="text-md font-bold">{{ title }}</h3>
        <p class="text-sm">{{ description }}</p>
      </div>
      <p class="text-sm text-primary-300">
        +${{ calcPrice }}/{{ duration === "Monthly" ? "mo" : "yr" }}
      </p>
    </div>
  </label>
</template>

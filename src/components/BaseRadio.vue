<script setup lang="ts">
import { computed } from "vue";

const modelValue = defineModel<string>();
const label = defineModel<string>("label");
const price = defineModel<number>("price", { default: 0 });
const duration = defineModel<string>("duration");

const src = `/icon-${label.value?.toLowerCase()}.svg`;

const emits = defineEmits(["sendPrice"]);

const calcPrice = computed(() => {
  if (duration.value === "yearly") {
    return price.value * 10;
  }
  if (duration.value === "monthly") {
    return price.value;
  }
});

const updatePrice = function () {
  emits("sendPrice", calcPrice.value);
};
</script>

<template>
  <input
    type="radio"
    :id="label?.toLowerCase()"
    name="plan"
    :value="label?.toLowerCase()"
    v-model="modelValue"
    class="peer hidden"
    required
    @click="updatePrice"
  />
  <label
    :for="label?.toLowerCase()"
    class="label inline-flex w-full items-center gap-3 rounded-lg py-3 peer-checked:ring-2 peer-hover:ring-2 peer-focus:outline-none peer-focus:ring-2 peer-active:ring-2"
  >
    <img :src="src" alt="" />
    <div class="block">
      <h3 class="text-md font-semibold">{{ label }}</h3>
      <p v-if="duration === 'yearly'" class="text-sm">${{ price * 10 }}/yr</p>
      <p
        v-if="duration === 'yearly'"
        class="text-sm font-medium text-primary-400"
      >
        2 months free
      </p>
      <p v-else class="text-sm">${{ price }}/mo</p>
    </div>
  </label>
</template>

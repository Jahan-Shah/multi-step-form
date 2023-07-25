<script setup>
import { useStore } from "../store";
import BaseRadio from "./BaseRadio.vue";

function planPrice(val) {
  store.planPrice = val;
}

const setDuration = function () {
  store.addOns = [];
  if (store.duration === "monthly") {
    store.duration = "yearly";
    store.planPrice *= 10;
  } else if (store.duration === "yearly") {
    store.duration = "monthly";
    store.planPrice /= 10;
  }
};

const store = useStore();
</script>

<template>
  <div class="max-sm:base__card flex flex-col gap-5">
    <div class="flex flex-col gap-1.5">
      <h2 class="text-2xl font-bold">Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
    </div>
    <ul class="form__inputs flex flex-col gap-2.5">
      <li>
        <BaseRadio
          @sendPrice="planPrice"
          :duration="store.duration"
          v-model="store.plan"
          label="Arcade"
          :price="9"
        />
      </li>
      <li>
        <BaseRadio
          @sendPrice="planPrice"
          :duration="store.duration"
          v-model="store.plan"
          label="Advance"
          :price="12"
        />
      </li>
      <li>
        <BaseRadio
          @sendPrice="planPrice"
          :duration="store.duration"
          v-model="store.plan"
          label="Pro"
          :price="15"
        />
      </li>
    </ul>
    <div
      class="mt-1.5 inline-flex items-center justify-center gap-6 rounded-lg bg-secondary-200 py-3.5"
    >
      <span class="text-sm font-bold">Monthly</span>
      <label class="relative inline-flex cursor-pointer items-center">
        <input
          :checked="store.duration === 'yearly'"
          type="checkbox"
          @click="setDuration"
          name="yearly"
          class="peer sr-only"
        />
        <div
          class="peer h-[18px] w-[40px] rounded-full bg-primary-400 after:absolute after:left-[4px] after:top-[3px] after:h-[12px] after:w-[12px] after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-[170%] peer-checked:after:border-white peer-focus:outline-none"
        ></div>
      </label>
      <span class="text-sm font-medium text-secondary-500">Yearly</span>
    </div>
  </div>
</template>

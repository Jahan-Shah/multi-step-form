<script setup>
import { useStore } from "../store";
import BaseCheckBox from "./BaseCheckBox.vue";
const store = useStore();

const addOns = [
  {
    title: "Online services",
    description: "Access to multiplayer games",
    price: 1,
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2,
  },
];
</script>

<template>
  <div class="max-sm:base__card input__flex">
    <div class="flex flex-col gap-1.5">
      <h2 class="text-2xl font-bold">Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience</p>
    </div>
    <div class="flex flex-col gap-3" v-for="addOn in addOns">
      <BaseCheckBox
        :duration="store.duration"
        v-model="store.addOns"
        :title="addOn.title"
        :description="addOn.description"
        :price="addOn.price"
      />
    </div>
  </div>
</template>

import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useStore = defineStore("store", () => {
  const name = ref("");
  const email = ref("");
  const phoneNumber = ref();
  const plan = ref("");
  const planPrice = ref();
  const duration = ref("Monthly");
  const addOns = ref([]);
  const addOnPrice = ref([]);

  const totalAddOn = () => {
    addOnPrice.value = addOns.value.map(addOn => addOn.price);
    addOnPrice.value = addOnPrice.value.reduce((acc, curr) => acc + curr, 0);
  }

  watch(addOns, totalAddOn)

  const setDuration = () => {
    if (duration.value === 'Monthly') {
      duration.value = 'Yearly';
      addOns.value.price = addOns.value.map((addOn) => addOn.price *= 10);
      totalAddOn();
      planPrice.value *= 10;
    } else if (duration.value === 'Yearly') {
      duration.value = 'Monthly';
      addOns.value.price = addOns.value.map((addOn) => addOn.price /= 10);
      totalAddOn();
      planPrice.value /= 10;
    }
  }

  return {
    name,
    email,
    phoneNumber,
    plan,
    planPrice,
    duration,
    addOns,
    addOnPrice,
    setDuration,
  }
});
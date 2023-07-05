import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("store", () => {
  const name = ref("");
  const email = ref("");
  const phoneNumber = ref();
  const plan = ref("");
  const duration = ref("monthly");

  return {
    name,
    email,
    phoneNumber,
    plan,
    duration,
  }
})
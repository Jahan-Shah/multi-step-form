import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";

export const useStore = defineStore("store", () => {
  const router = useRouter();
  const name = ref("");
  const email = ref("");
  const phoneNumber = ref();
  const plan = ref("");
  const planPrice = ref(0);
  const duration = ref("Monthly");
  const addOns = ref([]);
  const addOnPrice = ref([]);

  const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const phoneReg = /^\+?[0-9()-\s]+$/
  const isFormValid = ref(true);
  const isFormSubmitted = ref(false);

  const isEmailValid = computed(() => {
    return !emailReg.test(email.value)
  })

  const isNameEmpty = computed(() => {
    return name.value === '';
  })

  const isPhoneNumberValid = computed(() => {
    return !phoneReg.test(phoneNumber.value);
  })

  const isPlanSelected = computed(() => {
    return plan.value !== "";
  })

  const totalAddOn = () => {
    addOnPrice.value = addOns.value.map(addOn => addOn.price);
    addOnPrice.value = addOnPrice.value.reduce((acc, curr) => acc + curr, 0);
  }

  const submitForm = () => {
    isFormValid.value = true;
    if (isEmailValid.value || isNameEmpty.value || isPhoneNumberValid.value || !isPlanSelected.value) {
      isFormValid.value = false
      return;
    } else {
      isFormValid.value = true;
      isFormSubmitted.value = true;
      router.push('/thank-you')
    }
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
    isEmailValid,
    isNameEmpty,
    isPhoneNumberValid,
    isPlanSelected,
    isFormValid,
    submitForm,
    isFormSubmitted
  }
});
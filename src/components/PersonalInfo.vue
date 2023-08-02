<script setup>
import { ref } from "vue";
import { onBeforeRouteLeave, useRoute } from "vue-router";

const route = useRoute();

import { useStore } from "../store";
import BaseInput from "./BaseInput.vue";
const store = useStore();

const name = ref(false);
const email = ref(false);
const phoneNum = ref(false);

onBeforeRouteLeave((_to, _from, next) => {
  name.value = false;
  email.value = false;
  phoneNum.value = false;
  if (!store.isEmailValid && !store.isNameEmpty && !store.isPhoneNumberValid)
    next();

  if (store.isEmailValid) email.value = true;

  if (store.isNameEmpty) name.value = true;

  if (store.isPhoneNumberValid) phoneNum.value = true;
});
</script>

<template>
  <div class="max-sm:base__card flex flex-col gap-5">
    <div class="flex flex-col gap-1.5">
      <h2 class="text-2xl font-bold">Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
    </div>
    <div class="form__inputs flex flex-col gap-2.5">
      <BaseInput
        v-model="store.name"
        label="Name"
        type="text"
        :isValid="name"
        placeHolder="e.g. Stephan King"
      />
      <BaseInput
        v-model="store.email"
        label="Email Address"
        type="email"
        :isValid="email"
        placeHolder="e.g. stephanking@lorem.com"
      />
      <BaseInput
        v-model="store.phoneNumber"
        label="Phone Number"
        type="number"
        :isValid="phoneNum"
        placeHolder="e.g. +1 234 567 890"
      />
    </div>
  </div>
</template>

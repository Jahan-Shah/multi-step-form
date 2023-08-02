<script setup>
import { useStore } from "../store";
const store = useStore();
</script>

<template>
  <div class="max-sm:base__card input__flex">
    <div class="flex flex-col gap-1.5">
      <h2 class="text-2xl font-bold">Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
    </div>
    <div
      :class="{ 'flex flex-col items-center text-center': !store.plan }"
      class="rounded-lg bg-secondary-300 p-4"
    >
      <div class="flex justify-between">
        <div>
          <h3 class="text-md font-semibold">
            {{
              !store.plan
                ? "Please select a plan"
                : `${store.plan} (${store.duration})`
            }}
          </h3>
          <RouterLink class="text-secondary-500 underline" to="/plan">{{
            !store.plan ? "Select" : "Change"
          }}</RouterLink>
        </div>
        <p v-if="store.plan" class="font-bold text-primary-400">
          ${{ store.planPrice }}/{{
            store.duration === "Monthly" ? "mo" : "yr"
          }}
        </p>
      </div>
      <hr class="my-4" v-if="store.addOns.length > 0" />
      <div class="flex flex-col gap-4">
        <div class="flex justify-between" v-for="addOn in store.addOns">
          <p>{{ addOn.title }}</p>
          <p class="text-primary-400">
            +${{ addOn.price }}/{{ store.duration === "Monthly" ? "mo" : "yr" }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="store.planPrice !== 0" class="flex justify-between p-4">
      <p>Total (per {{ store.duration === "Monthly" ? "month" : "year" }})</p>
      <p class="text-lg font-bold text-primary-300">
        ${{ store.planPrice + store.addOnPrice }}/{{
          store.duration === "Monthly" ? "mo" : "yr"
        }}
      </p>
    </div>
    <span
      v-if="!store.isFormValid"
      class="text-right text-xs font-bold text-error"
    >
      Please fill all the fields in the form
    </span>
  </div>
</template>

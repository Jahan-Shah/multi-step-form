<template>
  <header>
    <nav>
      <div class="flex justify-center gap-3.5 sm:flex-col sm:gap-8">
        <RouterLink
          class="flex w-max gap-3.5"
          active-class="link__active"
          to="/personal-info"
        >
          <div class="link">1</div>
          <div class="text-sm uppercase max-sm:hidden">
            <p class="text-xs text-primary-200">Step 1</p>
            <h3 class="font-medium text-secondary-100">Your Info</h3>
          </div>
        </RouterLink>
        <RouterLink
          class="flex w-max gap-3.5"
          active-class="link__active"
          to="/plan"
        >
          <div class="link">2</div>
          <div class="text-sm uppercase max-sm:hidden">
            <p class="text-xs text-primary-200">Step 2</p>
            <h3 class="font-medium text-secondary-100">Select Plan</h3>
          </div>
        </RouterLink>
        <RouterLink
          class="flex w-max gap-3.5"
          active-class="link__active"
          to="/add-ons"
        >
          <div class="link">3</div>
          <div class="text-sm uppercase max-sm:hidden">
            <p class="text-xs text-primary-200">Step 3</p>
            <h3 class="font-medium text-secondary-100">Add-Ons</h3>
          </div>
        </RouterLink>
        <RouterLink
          class="flex w-max gap-3.5"
          active-class="link__active"
          to="finishing-up"
        >
          <div class="link">4</div>
          <div class="text-sm uppercase max-sm:hidden">
            <p class="text-xs text-primary-200">Step 4</p>
            <h3 class="font-medium text-secondary-100">Summary</h3>
          </div>
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

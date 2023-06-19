<template>
  <div class="space-y-6 sm:space-y-3 text-center">
    <img :src="require(`~/assets/img/getting-started/${step.img}`)" class="mx-auto" alt="" />
    <h3 class="text-xl text-neutral-800 font-semibold">{{ step.title }}</h3>

    <p v-for="(item, index) in step.description" :key="index" class="text-sm text-gray-700 leading-relaxed">
      {{ item }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'LandingStep',
  props: {
    step: {
      type: Object,
      required: true,
    },
  },
}
</script>

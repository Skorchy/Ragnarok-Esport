<template>
  <div class="sticky">
    <HeaderDesktop class="desktop" />
    <HeaderMobile class="mobile" />
  </div>
</template>

<script>
import HeaderDesktop from "@/components/HeaderDesktop.vue";
import HeaderMobile from "@/components/HeaderMobile.vue";

export default {
  components: {
    HeaderDesktop,
    HeaderMobile
  }
};
</script>

<style scoped>
.mobile {
  display: none;
}

@media (max-width: 768px) {
  .mobile {
    display: flex;
  }
  .desktop {
    display: none;
  }
}
</style>
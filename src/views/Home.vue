<template>
  <div class="home">
    <Caroussel />
    <Association />
    <NosJeux />
    <Partenaires />
    <Footer />
  </div>
</template>

<script>
import Caroussel from "@/components/Caroussel.vue";
import Association from "@/components/Association.vue";
import Partenaires from "@/components/Partenaires.vue";
import NosJeux from "@/components/NosJeux.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Caroussel,
    Association,
    Partenaires,
    NosJeux,
    Footer
  }
};
</script>
<style scoped></style>

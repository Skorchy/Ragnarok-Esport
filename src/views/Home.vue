<template>
  <div class="home">
    <Header />
    <Caroussel />
    <Association />
    <Partenaires />
    <NosJeux />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Caroussel from "@/components/Caroussel.vue";
import Association from "@/components/Association.vue";
import Partenaires from "@/components/Partenaires.vue";
import NosJeux from "@/components/NosJeux.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Header,
    Caroussel,
    Association,
    Partenaires,
    NosJeux,
    Footer,
  },
};
</script>
<style scoped></style>

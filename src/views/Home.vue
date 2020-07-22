<template>
  <div class="home">
    <Caroussel />
    <Association />
    <NosJeux />
    <Partenaires />
    <SocialNetworks />
    <Footer />
  </div>
</template>

<script>
import Caroussel from "@/components/Caroussel.vue";
import Association from "@/components/Association.vue";
import Partenaires from "@/components/Partenaires.vue";
import NosJeux from "@/components/NosJeux.vue";
import SocialNetworks from "@/components/SocialNetworks.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Caroussel,
    Association,
    Partenaires,
    NosJeux,
    SocialNetworks,
    Footer
  }
};
</script>
<style scoped></style>

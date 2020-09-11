<template>
  <span>
    <PrettyWord v-for="word in wordsSplitted" :key="word" :word="word"></PrettyWord>
  </span>
</template>

<script>
import PrettyWord from "@/components/PrettyWord.vue";
export default {
  components: { PrettyWord },
  props: {
    words: {
      type: String,
      required: true
    }
  },
  computed: {
    wordsSplitted() {
      return this.words.split(" ");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
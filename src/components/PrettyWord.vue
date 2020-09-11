<template>
  <span>
    <span class="blue">{{firstLetter}}</span>
    <span>{{rest}}&nbsp;</span>
  </span>
</template>

<script>
export default {
  props: {
    word: {
      type: String,
      required: true
    }
  },
  computed: {
    firstLetter() {
      return this.word[0];
    },
    rest() {
      const wordArray = this.word.split("");
      const restArray = wordArray.slice(1);
      const rest = restArray.join("");
      return rest;

      // const word=this.word;
      // return word.split("").slice(1).join("");
    }
  }
};
</script>

<style lang="scss" scoped>
.blue {
  color: #32c1ad;
}
</style>
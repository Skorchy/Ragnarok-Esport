<template>
  <h1 class="rgk-h1">
    <span class="blue">//&nbsp;</span>
    <slot></slot>
  </h1>
</template>

<script>
export default {};
</script>

<style scoped>
.rgk-h1 {
  font-size: 40px;
  font-family: "azonixregular";
  color: #fafafa;
  text-shadow: 3px 3px 0px rgba(15, 15, 15, 0.9);
}
.blue {
  color: #32c1ad;
}
</style>
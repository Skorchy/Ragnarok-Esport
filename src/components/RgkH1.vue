<template>
  <div class="rgk-h1">
    <span class="blue">//&nbsp;</span>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.rgk-h1 {
  font-size: 40px;
  font-family: "azonixregular";
  color: #ebebeb;
  text-shadow: 3px 3px 0px rgba(15, 15, 15, 0.9);
}
.blue {
  color: #32c1ad;
}
</style>
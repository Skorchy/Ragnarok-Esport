<template>
  <div>
    <div class="ragnarok-team">
      <RgkPlayerCard v-for="player in team.players" :key="player.name" :player="player" />
    </div>
  </div>
</template>

<script>
import RgkPlayerCard from "@/components/RgkPlayerCard.vue";
export default {
  components: {
    RgkPlayerCard
  },
  props: {
    team: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.ragnarok-team {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  min-height: 150px;
  color: white;
  margin-bottom: 120px;
}
</style>
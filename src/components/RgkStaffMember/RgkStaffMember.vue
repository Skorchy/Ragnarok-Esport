<template>
  <div class="rgk-staff-container">
    <div class="rgk-staff-member" v-for="member in members" :key="member.poste">
      <RgkStaffDescription />
      <RgkStaffCard :poste="member.poste" :photo="member.infos.photo" />
    </div>
  </div>
</template>

<script>
import RgkStaffDescription from "@/components/RgkStaffMember/RgkStaffDescription.vue";
import RgkStaffCard from "@/components/RgkStaffMember/RgkStaffCard.vue";
export default {
  components: {
    RgkStaffDescription,
    RgkStaffCard
  },
  props: {
    members: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.rgk-staff-member {
  width: 1200px;
  max-width: 100%;
  margin: 0 10px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
}
</style>